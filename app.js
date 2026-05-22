  const hdr=document.getElementById('hdr');
  window.addEventListener('scroll',()=>hdr.classList.toggle('sc',scrollY>20));
  const hmbg=document.getElementById('hmbg'),mnav=document.getElementById('mnav');
  hmbg.addEventListener('click',()=>{
    const o=hmbg.classList.toggle('open');
    mnav.classList.toggle('open',o);
    hmbg.setAttribute('aria-expanded',o);
  });
  function closeM(){hmbg.classList.remove('open');mnav.classList.remove('open');hmbg.setAttribute('aria-expanded','false')}
  function goTo(id,el){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
    document.querySelectorAll('.ctab').forEach(t=>t.classList.remove('active'));
    el.classList.add('active');
  }
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');obs.unobserve(e.target)}});
  },{threshold:0.12});
  document.querySelectorAll('.reveal,.rl,.rr').forEach(el=>obs.observe(el));
  document.querySelectorAll('.wish').forEach(b=>{
    b.addEventListener('click',e=>{e.stopPropagation();b.textContent=b.textContent==='🤍'?'❤️':'🤍'});
  });
  let tt;
  function subscribe(){
    const v=document.getElementById('nle').value.trim();
    if(!v||!v.includes('@')){alert('Please enter a valid email.');return}
    const t=document.getElementById('toast');
    document.getElementById('tmsg').textContent='🎉 Subscribed with '+v;
    t.classList.add('show');clearTimeout(tt);
    tt=setTimeout(()=>t.classList.remove('show'),3000);
    document.getElementById('nle').value='';
  }
