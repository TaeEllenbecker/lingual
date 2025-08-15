

// Theme toggle (persist)
const toggle = document.getElementById('theme-toggle');
const KEY = 'forceLightMode';
function applyTheme() {
    const forceLight = localStorage.getItem(KEY) === '1';
    document.body.classList.toggle('force-light', forceLight);
    toggle.textContent = forceLight ? 'Use System Theme' : 'Toggle Theme';
}
toggle?.addEventListener('click', () => {
    const current = localStorage.getItem(KEY) === '1';
    localStorage.setItem(KEY, current ? '0' : '1');
    applyTheme();
});
applyTheme();

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
