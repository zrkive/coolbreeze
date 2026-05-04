function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const btn = document.querySelector(".menu-btn");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    btn.style.display = "none";   
  } else {
    btn.style.display = "block"; 
  }
}


document.getElementById("serviceForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const appointmentData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value
  };

  let inboxMessages = JSON.parse(localStorage.getItem("appointments")) || [];

  inboxMessages.push(appointmentData);

  localStorage.setItem("appointments", JSON.stringify(inboxMessages));

  alert("Appointment submitted successfully!");

  window.location.href = "message.html";
});