const navLinks = document.querySelectorAll('.navbar a:not(.home)');



function main() {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      //Clear all clicked
      navLinks.forEach(link => {
        link.classList.remove('navclick');
      });
      link.classList.toggle('navclick');
    });
  });
}

main()