const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    const profile=entry.target.querySelector('.profile');
    const nameboard=entry.target.querySelector('.namesec');
    if(entry.isIntersecting){
      profile.classList.add('rotateprofile');
      nameboard.classList.add('nameboard');
      return;
    }
    profile.classList.remove('rotateprofile');
    nameboard.classList.remove('nameboard');
  })
})
observer.observe(document.querySelector('#home'));

window.onscroll = () => {
  var current = "";
  const sections=document.querySelectorAll('.sec');
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY+110 >= sectionTop ) {
      current = section.getAttribute("id");
  }
  });
  const navLi=document.querySelectorAll('.navigation>*');
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};