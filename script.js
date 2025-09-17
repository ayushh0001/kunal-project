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