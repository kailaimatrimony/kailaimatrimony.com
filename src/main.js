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

    // Set default language to English
    translatePage('en');
});
