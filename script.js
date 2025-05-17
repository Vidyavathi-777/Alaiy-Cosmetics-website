document.addEventListener('DOMContentLoaded', function() {
  
  const hamburger = document.getElementById("hamburger");
  const navbar = document.querySelector('.nav-list'); // Fixed: added dot for class selector
  const userIcon = document.getElementById("user-icon");
  const userDropdown = document.getElementById("user-dropdown");
  const userDetails = document.getElementById("userdetails");
  

  const isLoggedIn = !!localStorage.getItem("token");
  const username = localStorage.getItem("username");
  

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle("active");
  });
  
 
  if (isLoggedIn && username) {
    userDetails.innerHTML = `<a href="#">${username}</a>`;
  }
  
  function updateUserMenu() {
    userDropdown.innerHTML = "";
    
    if (isLoggedIn && username) {
      
      const usernameDisplay = document.createElement("div");
      usernameDisplay.className = 'username-display';
      usernameDisplay.innerHTML = `<i class="fa-solid fa-circle-user"></i>${username}`;
      userDropdown.appendChild(usernameDisplay);
      
    
      const divider = document.createElement("hr");
      userDropdown.appendChild(divider);
      
     
      const logoutLink = document.createElement("a");
      logoutLink.href = "#";
      logoutLink.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>Logout';
      logoutLink.addEventListener("click", function(e) {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        sessionStorage.clear();
        
        alert("You have been logged out");
        window.location.href = "/index.html";
      });
      userDropdown.appendChild(logoutLink);
    } else {
    
      const loginLink = document.createElement("a");
      loginLink.href = "/login.html";
      loginLink.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>Login';
      userDropdown.appendChild(loginLink);
      
     
      const registerLink = document.createElement("a");
      registerLink.href = "/register.html";
      registerLink.innerHTML = '<i class="fa-solid fa-user-plus"></i>Register';
      userDropdown.appendChild(registerLink);
    }
  }
  
 
  updateUserMenu();
  
 
  userIcon.addEventListener("click", function() {
    updateUserMenu();
    userDropdown.classList.toggle("hidden");
  });
  
  document.addEventListener("click", function(event) {
    if (!userDropdown.contains(event.target) && event.target !== userIcon) {
      userDropdown.classList.add("hidden");
    }
  });
});