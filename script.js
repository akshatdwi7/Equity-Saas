document.addEventListener('DOMContentLoaded', () => {
  // Sidebar Toggle Functionality
  const toggleSidebarButton = document.getElementById('toggleSidebar');
  const sidebar = document.querySelector('.sidebar');
  
  toggleSidebarButton.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
  });

  // Search Functionality
  const searchInput = document.getElementById('searchInput');
  const topicsGrid = document.getElementById('topicsGrid');
  const topics = topicsGrid.querySelectorAll('.topic-card');

  searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      
      topics.forEach(topic => {
          const topicTitle = topic.dataset.topic.toLowerCase();
          if (topicTitle.includes(searchTerm)) {
              topic.style.display = 'block';
          } else {
              topic.style.display = 'none';
          }
      });
  });

  // Dropdown Functionality for Notifications and Profile
  const notificationIcon = document.getElementById('notificationIcon');
  const notificationDropdown = document.getElementById('notificationDropdown');
  const profileIcon = document.getElementById('profileIcon');
  const profileDropdown = document.getElementById('profileDropdown');

  notificationIcon.addEventListener('click', (e) => {
      e.preventDefault();
      notificationDropdown.classList.toggle('show');
  });

  profileIcon.addEventListener('click', (e) => {
      e.preventDefault();
      profileDropdown.classList.toggle('show');
  });

  // Close dropdowns if clicking outside of them
  document.addEventListener('click', (e) => {
      if (!notificationIcon.contains(e.target) && !notificationDropdown.contains(e.target)) {
          notificationDropdown.classList.remove('show');
      }
      if (!profileIcon.contains(e.target) && !profileDropdown.contains(e.target)) {
          profileDropdown.classList.remove('show');
      }
  });
});