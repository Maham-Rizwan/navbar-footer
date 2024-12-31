function searchAction() {
    const searchInput = document.getElementById('searchInput').value;
    const categorySelect = document.getElementById('categorySelect').value;
  }

  
  // Function to toggle dropdown on click
  document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent the event from propagating to other elements
      var dropdownContent = item.querySelector('.dropdown-content');
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none'; // Hide the dropdown
      } else {
        dropdownContent.style.display = 'block'; // Show the dropdown
      }
    });
  });
  
  // Toggle the menu when the hamburger button is clicked
document.getElementById('menu-toggle').addEventListener('click', function() {
  const sideMenu = document.getElementById('side-menu');
  const content = document.getElementById('content');
  const body = document.body;
  const overlay = document.getElementById('overlay');

  // Toggle the 'open' class to show or hide the menu
  sideMenu.classList.toggle('open');
  content.classList.toggle('open');
  // Hide or show the hamburger menu toggle icon
  this.classList.toggle('hide');
})

  // Remove the 'open' class to hide the menu
  sideMenu.classList.remove('open');
  content.classList.remove('open');
  // Show the hamburger menu toggle icon
  menuToggle.classList.remove('hide');

