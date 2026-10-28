// Keep the reading navigation in sync; all navigation works without JavaScript.
const links = [...document.querySelectorAll('.profile-nav a')];
const sections = links.map(link => document.querySelector(link.hash));
let queued = false;
function updateNavigation() {
  const marker = window.innerHeight * 0.35;
  let active = 0;
  sections.forEach((section, index) => {
    if (section && section.getBoundingClientRect().top <= marker) active = index;
  });
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) active = links.length - 1;
  links.forEach((link, index) => {
    if (index === active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  queued = false;
}
function scheduleUpdate() {
  if (!queued) { queued = true; requestAnimationFrame(updateNavigation); }
}
window.addEventListener('scroll', scheduleUpdate, { passive: true });
window.addEventListener('resize', scheduleUpdate);
updateNavigation();
