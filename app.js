const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const projectsButton = document.querySelector('#to-projects');
projectsButton.addEventListener('click', () => {
  const projectsSection = document.getElementById('why-me');
  projectsSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

const aboutMeButton = document.querySelector('#scroll-to-about'); 
aboutMeButton.addEventListener('click', () => {
  const aboutSection = document.getElementById('about'); 
  aboutSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});

hiddenElements.forEach(el => observer.observe(el));