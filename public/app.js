let currentPage = "logs";

async function loadStats() {
  const res = await fetch("/api/stats");
  const data = await res.json();

  document.getElementById("stats").innerHTML = `
    📊 Servers: ${data.servers} |
    👥 Users: ${data.users} |
    📡 Ping: ${data.ping}ms
  `;
}

async function loadLogs() {
  const res = await fetch("/api/logs");
  const data = await res.json();

  document.getElementById("content").innerHTML = data.map(log => `
    <div class="card">
      <b>${log.type}</b><br>
      🏠 ${log.name}<br>
      🆔 ${log.id}<br>
      👥 ${log.members || "N/A"}<br>
      📅 ${new Date(log.time).toLocaleString()}
    </div>
  `).join("");
}

function loadPage(page) {
  currentPage = page;

  if (page === "logs") {
    document.getElementById("title").innerText = "📥 Server Logs";
    loadLogs();
  }

  if (page === "stats") {
    document.getElementById("title").innerText = "⚙️ Bot Stats";
    loadStats();
  }
}

setInterval(() => {
  if (currentPage === "logs") {
    loadLogs();
  }

  if (currentPage === "stats") {
    loadStats();
  }
}, 3000);

loadPage("logs");