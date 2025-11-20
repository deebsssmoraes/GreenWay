// Simple interactions: mobile nav toggle + form submit handling
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav ul');
  toggle && toggle.addEventListener('click', ()=> {
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    // Simple client-side feedback (replace with real integration)
    alert('Obrigado! Recebemos sua solicitação. Respondemos em até 48h úteis.');
    form.reset();
  });

  // reveal on scroll (simple)
  const io = new IntersectionObserver((entries)=> {
    entries.forEach(en => {
      if(en.isIntersecting) en.target.classList.add('in-view');
    });
  }, {threshold: 0.12});
  document.querySelectorAll('section').forEach(s => io.observe(s));
});