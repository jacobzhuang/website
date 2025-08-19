// Smooth scroll effect for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Contact form (dummy handler)
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent! (This is a demo form)");
  });
  