const scrollElements = document.querySelectorAll(".scrolling");

scrollElements.forEach ((el) => {
  el.style.opacity = 0
})

const elementInView = (el, scrollOffset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
   
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
    );
  };

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    })
}



window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });

 window.addEventListener('load', () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
        displayScrollElement(el);
  } else {
    hideScrollElement(el);
  }
  })
});