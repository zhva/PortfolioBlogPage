function fadeInOutGallery(containerId, galleryItemsClass) {
  let current = 0;
  const slidesContainer = document.getElementById(containerId);
  const slides = slidesContainer.getElementsByClassName(galleryItemsClass);

  setInterval(() => {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    current = (current !== slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
  }, 4000);
}
