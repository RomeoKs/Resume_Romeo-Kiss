function selectElementByClass(className) {
  return document.querySelector(`.${className}`);
}
const sections = [
  selectElementByClass('home'),
  selectElementByClass('about_space'),
  selectElementByClass('skills_space'),
  selectElementByClass('exp_space'),
  selectElementByClass('contact'),
];

const navItems = {
  home: selectElementByClass('homeNavItem'),
  about: selectElementByClass('aboutNavItem'),
  skills: selectElementByClass('skillsNavItem'),
  experience: selectElementByClass('experienceNavItem'),
  contact: selectElementByClass('contactNavItem'),
};
// intersection observer setup
const observerOptions = {
  root: null,
  rootMargin: '10px',
  threshold: 0.1,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // get the nav item corresponding to the id of the section
      // that is currently in view
      const navItem = navItems[entry.target.id];
      // add 'active' class on the navItem
      navItem.classList.add('active');
      // remove 'active' class from any navItem that is not
      // same as 'navItem' defined above
      Object.values(navItems).forEach((item) => {
        if (item != navItem) {
          item.classList.remove('active');
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));