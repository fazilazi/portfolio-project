// typing effect for terminal hero
(function(){
  const el = document.getElementById('typed-role');
  if(!el) return;
  const text = "Mohamed Fazil A — Full Stack Developer";
  let i = 0;
  function type(){
    if(i <= text.length){
      el.innerHTML = text.slice(0,i) + '<span class="cursor"></span>';
      i++;
      setTimeout(type, 38);
    } else {
      el.innerHTML = text + '<span class="cursor"></span>';
    }
  }
  type();
})();

// scroll reveal (progressive enhancement: content is visible by default,
// JS opts elements below the fold into a subtle enter animation)
(function(){
  const items = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)) return;

  items.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top > window.innerHeight * 0.9){
      el.classList.add('pre');
    }
  });

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.remove('pre');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal.pre').forEach(i=>io.observe(i));

  // safety net: guarantee visibility no matter what
  setTimeout(()=>items.forEach(i=>i.classList.remove('pre')), 3000);
})();
