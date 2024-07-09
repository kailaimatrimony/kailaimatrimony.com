document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
  
    languageSelector.addEventListener('change', (event) => {
      const language = event.target.value;
      translatePage(language);
    });
  
    const translatePage = (language) => {
      const elementsToTranslate = document.querySelectorAll('[data-en], [data-ta]');
      elementsToTranslate.forEach(element => {
        const text = element.getAttribute(`data-${language}`);
        if (text) {
          element.textContent = text;
        }
      });
    };
  
    // Set default language to Tamil
    translatePage('ta');
  });

  document.addEventListener('DOMContentLoaded', () => {
    function updateClasses() {
        const logoContainer = document.querySelector('.km_logo').parentElement;
        const addressContainer = document.querySelector('.km_addr').parentElement;

        if (window.innerWidth < 769) {
            logoContainer.className = 'col-12 text-center';
            addressContainer.className = 'col-12 text-center mt-3';
        } else {
            logoContainer.className = 'col-12 col-md-6 text-center text-md-start';
            addressContainer.className = 'col-12 col-md-6 text-center text-md-end mt-3 mt-md-0';
        }
    }

    // Update classes on initial load
    updateClasses();

    // Update classes on window resize
    window.addEventListener('resize', updateClasses);
});

document.addEventListener('DOMContentLoaded', () => {
  function updateLanguage() {
      const language = document.getElementById('language-selector').value;
      const kmLogoP = document.querySelector('.km_logo p'); // Select the <p> inside .km_logo

      if (language === 'ta' && window.innerWidth < 769) {
          kmLogoP.innerHTML = kmLogoP.getAttribute('data-ta').replace('கயிலை', 'கயிலை<br>');
      } else {
          kmLogoP.innerHTML = kmLogoP.getAttribute(`data-${language}`);
      }
  }

  // Update language on initial load
  updateLanguage();

  // Update language on language change
  document.getElementById('language-selector').addEventListener('change', updateLanguage);

  // Update language on window resize
  window.addEventListener('resize', updateLanguage);
});
