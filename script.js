document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let error = document.getElementById("error");

  // Validation
  if (name === "" || email === "" || message === "") {
    error.textContent = "All fields are required!";
    return;
  }

  error.textContent = "";

  // Get existing data
  let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

  // Add new data
  submissions.push({ name, email, message });

  // Save back
  localStorage.setItem("submissions", JSON.stringify(submissions));

  alert("Form submitted successfully!");

  document.getElementById("contactForm").reset();
});
