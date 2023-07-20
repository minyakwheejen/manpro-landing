const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const toTop = document.querySelector(".to-top");
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// navbar burger //
burger.addEventListener('click', function(){
  navLinks.classList.toggle('show');
  burger.classList.toggle('toggle');
});

// back to top//
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// accordion
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});