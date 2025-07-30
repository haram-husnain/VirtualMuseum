/* Removed bottom navbar loading as per update to move links to header nav
fetch('components/navbar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('navbar-container').innerHTML = html;
    // Highlight active page based on current URL
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelector(`.bottom-nav a[href="${currentPage}"]`).classList.add('active');
  });
*/
