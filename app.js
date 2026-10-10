'use strict';
const menu = document.querySelector('#menu');
const toggle = document.querySelector('.menu-toggle');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); toggle.setAttribute('aria-label', 'Abrir menu'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); menu.classList.toggle('open', open); });
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.addEventListener('click', e => { if (!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu(); });
const whatsappURL = topic => 'https://wa.me/5582993478462?text=' + encodeURIComponent('Olá! Entrei pelo site da Colônia Z42 – Nova Canaã e gostaria de informações sobre ' + topic + '.');
document.querySelectorAll('[data-whatsapp]').forEach(a => { a.href = whatsappURL(a.dataset.topic); a.target = '_blank'; a.rel = 'noopener noreferrer'; });
document.querySelector('#assunto').addEventListener('change', e => { document.querySelector('#contact-whatsapp').href = whatsappURL(e.target.value); });
const dialog = document.querySelector('#privacy-dialog');
document.querySelector('#privacy-open').addEventListener('click', () => dialog.showModal());
document.querySelector('#privacy-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
