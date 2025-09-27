 // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 150; // The lower the slower
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace('+', '');
        const increment = Math.ceil(target / speed);
        if (count < target) {
          counter.innerText = `${count + increment}+`;
          setTimeout(updateCount, 20); // Recursive call
        } else {
          counter.innerText = `${target}+`;
        }
      };
      updateCount();
    });











  



document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const btn = document.getElementById("view-cert-btn");
    const modalImg = document.getElementById("modal-img");
    const certificateImg = document.getElementById("certificate-img");
    const closeBtn = document.querySelector(".close-btn");

    const mainContent = document.querySelector('.certificate-section');
    const certificateContainer = document.querySelector('.certificate-container');
    const footer = document.querySelector('footer');
    
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = certificateImg.src;
        document.body.classList.add('modal-open');
        mainContent.classList.add('content-blur');
        certificateContainer.classList.add('content-blur');
        footer.classList.add('content-blur');
    });

    const closeModal = () => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        mainContent.classList.remove('content-blur');
        certificateContainer.classList.remove('content-blur');
        footer.classList.remove('content-blur');
    };

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});