const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.main-nav');
const dropdowns=[...document.querySelectorAll('.nav-dropdown')];

function closeDropdown(dropdown){
  dropdown.classList.remove('open');
  const button=dropdown.querySelector('.nav-dropdown-toggle');
  if(button) button.setAttribute('aria-expanded','false');
}

if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
  });

  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    dropdowns.forEach(closeDropdown);
  }));
}

dropdowns.forEach(dropdown=>{
  const button=dropdown.querySelector('.nav-dropdown-toggle');
  if(!button) return;
  button.addEventListener('click',event=>{
    event.preventDefault();
    event.stopPropagation();
    const willOpen=!dropdown.classList.contains('open');
    dropdowns.forEach(closeDropdown);
    dropdown.classList.toggle('open',willOpen);
    button.setAttribute('aria-expanded',String(willOpen));
  });
});

document.addEventListener('click',event=>{
  dropdowns.forEach(dropdown=>{
    if(!dropdown.contains(event.target)) closeDropdown(dropdown);
  });
});

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
