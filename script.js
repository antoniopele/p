// Mock data for user accounts
const users = [
  { username: "antonio", password: "19042005" },
  { username: "rafael", password: "timbauba22" },
  { username: "allef", password: "wandalinda" },
  { username: "mirella", password: "rubiburra10" },
  { username: "glaydson", password: "callcenter2024" }
];

// Function to handle form submission
function login(event) {
  event.preventDefault();

  // Get username and password from form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if username and password match any user in the users array
  const user = users.find(user => user.username === username && user.password === password);

  // If user is found, display success message, otherwise display error message
  const messageElement = document.getElementById("message");
  if (user) {
    messageElement.textContent = "Login successful!";
    messageElement.style.color = "green";
  } else {
    messageElement.textContent = "Invalid username or password";
    messageElement.style.color = "red";
  }
}

// Add event listener to the form
document.getElementById("loginForm").addEventListener("submit", login);

function login(event) {
  event.preventDefault();

  // Get username and password from form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if username and password match any user in the users array
  const user = users.find(user => user.username === username && user.password === password);

  // If user is found, redirect to another page, otherwise display error message
  if (user) {
    // Redirect to another page
    window.location.href = "https://onyx-daphne-071.notion.site/Avalia-es-Ant-nio-8ce6b989736e440f9f874902d491d0f5?pvs=4";
  } else {
    // Display error message
    const messageElement = document.getElementById("message");
    messageElement.textContent = "Invalid username or password";
    messageElement.style.color = "red";
  }
}

