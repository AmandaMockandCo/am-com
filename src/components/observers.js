const header = document.querySelector("Navbar");
const sectionOne = document.querySelector(".HeroSection";)

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
      entries.forEach(entry => {
        if(entry.isIntersecting)
      });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);