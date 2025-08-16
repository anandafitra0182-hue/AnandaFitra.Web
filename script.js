(function(){
  // simple reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('show');
    });
  },{threshold:0.12});
  reveals.forEach(r=>observer.observe(r));

  // mobile menu toggle
  const btns = document.querySelectorAll('.menu-toggle');
  btns.forEach(btn=> btn.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav-list');
    if(nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex';
  }));

  // smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
      }
    })
  });

})();


