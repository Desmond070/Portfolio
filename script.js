// Toggle dropdown and hamburger animation
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('show');
    toggle.classList.toggle('open');
  }

  // Scroll effect for navbar expansion
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
   
// Overlay functionality for project images
  function openOverlay(id) {
    document.querySelectorAll('[id^="overlay"]').forEach(el => el.style.display = 'none'); // Hide all first
    document.getElementById(id).style.display = 'block';
    document.body.classList.add("no-scroll");
  }

  function closeOverlay(id) {
    document.getElementById(id).style.display = "none";
    document.body.classList.remove("no-scroll");
  }




function openOverlay(id) {
  document.getElementById(id).style.display = "block";
  setupScrollNav(id);
   document.body.classList.add("no-scroll");
}

function closeOverlay(id) {
  document.getElementById(id).style.display = "none";
   document.body.classList.remove("no-scroll");
}

function setupScrollNav(overlayId) {
  const overlay = document.getElementById(overlayId);
  const navbar = overlay.querySelector('.navbar');
  let prevScrollPos = overlay.scrollTop;

  overlay.onscroll = () => {
    const currentScrollPos = overlay.scrollTop;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
  };
}
