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


/*
const scrollOffset = 100;
 
const scrollElement = document.querySelector(".description");
 
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}
 
const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}
 
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
}) */