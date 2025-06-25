//Responsive Nav menu toggle:
const navbarDialog = document.getElementById("navbar-dialog");
const handleMobileMenu = () => {
  navbarDialog.classList.toggle("hidden");
};

//Scroll listener and slider animation:
const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 40 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    let isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);

  function scrollHandler() {
    let translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }
    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const group_1 = document.getElementById("group-1");
const group_2 = document.getElementById("group-2");
const group_3 = document.getElementById("group-3");
const group_4 = document.getElementById("group-4");

setupIntersectionObserver(group_1, true, 0.15);
setupIntersectionObserver(group_2, false, 0.15);
setupIntersectionObserver(group_3, true, 0.15);
setupIntersectionObserver(group_4, false, 0.10);

const dtElements = document.querySelectorAll("dt");
dtElements.forEach((element) => {
  element.addEventListener("click", () => {
    const ddID = element.getAttribute("aria-controls");
    const ddElement = document.getElementById(ddID);
    const arrowIcon = element.querySelectorAll("i")[0];

    ddElement.classList.toggle("hidden");
    arrowIcon.classList.toggle("-rotate-180");
  });
});

const currentYear = document.getElementById("year");
const getYear = () => {
  const date = new Date();
  const crntYear = date.getFullYear();
  currentYear.innerText = crntYear;
};
getYear();

//aos scroll animation initialization:
AOS.init();
