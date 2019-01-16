const urlParams = new URLSearchParams(window.location.search);
const modeParam = urlParams.get('mode');
if (modeParam === 'embed') {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add("embed");
  }, false);
}
