const header=document.querySelector('.site-header');
const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
const year=document.querySelector('#year');

year.textContent=new Date().getFullYear();

window.addEventListener('scroll',()=>{
  header.classList.toggle('scrolled',window.scrollY>18);
});

menuBtn.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
});

document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
