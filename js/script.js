const hamburger_menu  = document.querySelector('.ham');
const close_menu  = document.querySelector('.close');
const menu = document.querySelector('nav ul');

hamburger_menu.addEventListener('click',()=>{
    menu.classList.add('slide')
})

close_menu.addEventListener('click',()=>{
    menu.classList.remove('slide')
})


// Select elements
const slideContainer = document.querySelector('.slide_container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Set the width to scroll (one item width + gap)
const itemWidth = 360; // Adjust as per your item width + gap

// Scroll to the next item
nextButton.addEventListener('click', () => {
  // Check if we've reached the end of the container
  if (slideContainer.scrollLeft + slideContainer.clientWidth >= slideContainer.scrollWidth) {
    // If at the end, go back to the start
    slideContainer.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    // Otherwise, scroll right by one item
    slideContainer.scrollBy({ left: itemWidth, behavior: 'smooth' });
  }
});

// Scroll to the previous item
prevButton.addEventListener('click', () => {
  // Check if we're at the beginning of the container
  if (slideContainer.scrollLeft === 0) {
    // If at the start, scroll to the end
    slideContainer.scrollTo({ left: slideContainer.scrollWidth, behavior: 'smooth' });
  } else {
    // Otherwise, scroll left by one item
    slideContainer.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  }
});




var typetxt = new Typed("#animate_txt", {
    strings: ["Web developer.","Front-end-developer.","Programmer.", "Web designer."],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#project .slide_container");
  const items = document.querySelectorAll("#project .slide_container .item");
  const itemWidth = items[0].offsetWidth + 10; // Width of each item plus gap

  let scrollPosition = 0;

  container.addEventListener("wheel", (event) => {
    event.preventDefault();
    // Determine scroll direction
    if (event.deltaY > 0) {
      // Scroll right
      scrollPosition = Math.min(scrollPosition + itemWidth, container.scrollWidth - container.clientWidth);
    } else {
      // Scroll left
      scrollPosition = Math.max(scrollPosition - itemWidth, 0);
    }
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    });
  });
});
