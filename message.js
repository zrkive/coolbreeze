function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const btn = document.querySelector(".menu-btn");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    btn.style.display = "none";   // hide hamburger
  } else {
    btn.style.display = "block";  // show hamburger
  }
}

let inbox = JSON.parse(message.html.getItem("inbox")) || [];

const list = document.getElementById("serviceForm");
const details = document.getElementById("inbox");

function loadInbox() {
  list.innerHTML = "";

  if (inbox.length === 0) {
    list.innerHTML = "<p style='padding:10px'>No messages yet</p>";
    return;
  }

  inbox.forEach((msg, index) => {
    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <b>${msg.firstName} ${msg.lastName}</b><br>
      <small>${msg.service}</small>
    `;

    div.onclick = () => {
      details.innerHTML = `
        <h2>${msg.firstName} ${msg.lastName}</h2>
        <p><b>Email:</b> ${msg.email}</p>
        <p><b>Phone:</b> ${msg.phone}</p>
        <p><b>Address:</b> ${msg.address}</p>
        <p><b>Service:</b> ${msg.service}</p>
        <p><b>Message:</b> ${msg.message}</p>
        <p><b>Date:</b> ${msg.date}</p>
      `;
    };

    list.appendChild(div);
  });
}

loadInbox();