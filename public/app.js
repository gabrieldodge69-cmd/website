function showPage(page) {

  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = "<h1>Welcome to CashMoneyGoats Dashboard</h1>";
  }

  if (page === "info") {
    content.innerHTML = "<h2>Bot Info</h2><p>Live stats will connect soon...</p>";
  }

  if (page === "logs") {
    content.innerHTML = "<h2>Server Logs</h2><p>Waiting for bot data...</p>";
  }
}

function openOwnerConfig() {
  document.getElementById("ownerModal").style.display = "block";
}

function closeModal() {
  document.getElementById("ownerModal").style.display = "none";
}

function checkCode() {

  const code = document.getElementById("codeInput").value;

  if (code === "2027") {
    document.getElementById("content").innerHTML = `
      <h1>Owner Config Panel</h1>
      <p>Welcome owner 👑</p>
      <p>Bot controls coming soon...</p>
    `;
    closeModal();
  } else {
    alert("Wrong code");
  }
}

showPage("home");