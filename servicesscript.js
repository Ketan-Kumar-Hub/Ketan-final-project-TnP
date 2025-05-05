document.addEventListener("DOMContentLoaded", function () {
    // Zoom functionality
    const zoomables = document.querySelectorAll(".zoomable");
    const modal = document.getElementById("zoom-modal");
    const modalImg = document.getElementById("zoomed-image");
    const closeBtn = document.querySelector(".close-btn");
  
    zoomables.forEach((img) => {
      img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
      });
    });
  
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // FAQ toggle
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", function () {
        item.classList.toggle("active");
      });
    });
  });
  