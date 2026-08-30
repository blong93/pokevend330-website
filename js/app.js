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

// ===== Stage 17.2: in-page AJAX form submission + friendly website URL normalization =====
const pvForms=[...document.querySelectorAll('.pv-form[action^="https://formsubmit.co/"]')];

function formSuccessCopy(form){
  const panel=form.closest('.form-panel');
  if(panel?.id==='support-form'){
    return {
      eyebrow:'REQUEST RECEIVED',
      title:'We Got Your Support Request',
      message:'Your support request was received. We’ll review the details and follow up as soon as possible.'
    };
  }
  if(panel?.id==='launch-updates'){
    return {
      eyebrow:'MESSAGE RECEIVED',
      title:'Thanks for Reaching Out',
      message:'You’re on our radar. We’ll follow up on your message and keep your launch-update interest noted.'
    };
  }
  return {
    eyebrow:'SITE REVIEW REQUESTED',
    title:'Thanks for Your Interest',
    message:'We’ll review your location information and follow up about whether a PokeVend 330 machine could be a good fit.'
  };
}

function normalizeWebsiteUrl(value){
  const raw=String(value||'').trim();
  if(!raw) return '';
  if(/^https?:\/\//i.test(raw)) return raw;
  return `https://${raw.replace(/^\/\//,'')}`;
}

function showFormStatus(form,type,message){
  let status=form.querySelector('.form-status');
  if(!status){
    status=document.createElement('div');
    status.className='form-status';
    status.setAttribute('role','status');
    status.setAttribute('aria-live','polite');
    form.appendChild(status);
  }
  status.className=`form-status ${type}`;
  status.textContent=message;
}

pvForms.forEach(form=>{
  form.addEventListener('submit',async event=>{
    if(!form.reportValidity()) return;
    event.preventDefault();

    const button=form.querySelector('button[type="submit"]');
    const originalText=button?.textContent||'Submit';
    if(button){
      button.disabled=true;
      button.textContent='Sending…';
      button.setAttribute('aria-busy','true');
    }
    showFormStatus(form,'sending','Sending your message…');

    try{
      const websiteInput=form.querySelector('input[name="Business Website"]');
      if(websiteInput && websiteInput.value.trim()){
        websiteInput.value=normalizeWebsiteUrl(websiteInput.value);
      }

      const data={};
      new FormData(form).forEach((value,key)=>{
        if(key==='_next') return; // Used only by the non-JavaScript fallback.
        if(Object.prototype.hasOwnProperty.call(data,key)){
          data[key]=Array.isArray(data[key])?[...data[key],value]:[data[key],value];
        }else{
          data[key]=value;
        }
      });

      const action=form.getAttribute('action');
      const ajaxAction=action.replace('https://formsubmit.co/','https://formsubmit.co/ajax/');
      const response=await fetch(ajaxAction,{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify(data)
      });
      const result=await response.json().catch(()=>({}));
      if(!response.ok||result.success===false){
        throw new Error(result.message||'Submission failed');
      }

      const copy=formSuccessCopy(form);
      const panel=form.closest('.form-panel');
      if(panel){
        panel.innerHTML=`<div class="form-success" role="status" aria-live="polite"><div class="form-success-icon" aria-hidden="true">✓</div><p class="eyebrow">${copy.eyebrow}</p><h2>${copy.title}</h2><p>${copy.message}</p><a class="button button-outline" href="${window.location.pathname}">Send Another Message</a></div>`;
        panel.scrollIntoView({behavior:'smooth',block:'center'});
      }
    }catch(error){
      console.error('PokeVend form submission failed:',error);
      showFormStatus(form,'error','We couldn’t send that message. Please check your connection and try again, or call/text (330) 552-8172.');
      if(button){
        button.disabled=false;
        button.textContent=originalText;
        button.removeAttribute('aria-busy');
      }
    }
  });
});
