// This script loads the Foremark viewer from the actual location.
(function () {
    document.getElementsByTagName('script')[0].outerHTML = '';

    let script = document.createElement('script');
    script.src = 'https://unpkg.com/foremark/browser/foremark.js';
    script.setAttribute('data-rel', 'foremark');
    document.body.appendChild(script);
})();
