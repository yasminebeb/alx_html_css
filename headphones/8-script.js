document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.open-menu');
  const closeBtn = document.querySelector('.close-menu');
  const menu = document.querySelector('.menu');
  const menuLinks = menu.querySelectorAll('a');

  // Toggle menu open/close
  function toggleMenu() {
    menu.classList.toggle('show');
  }

  // Open: click .open-menu
  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("Hamburger clicked");
      toggleMenu();
    });
  }

  // Close: click .close-menu (the X inside the menu)
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      menu.classList.remove('show');
    });
  }

  // Clicking any link closes the mobile menu
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        menu.classList.remove('show');
      }
    });
  });

  // On resize: ensure the mobile menu state resets correctly
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      // desktop: remove mobile 'show' (menu will be displayed by CSS)
      menu.classList.remove('show');
    }
  });
});
