const elementos=document.querySelectorAll(".reveal")
const cards=document.querySelectorAll(".card_skill")
const btn=document.querySelector(".btn_menu")
const menu=document.querySelector(".menu")
const sticky=document.querySelector(".stick_1")
const sticky2=document.querySelector(".stick_2")
const links = document.querySelectorAll('.link_menu');
const acord = document.querySelectorAll('.acord');



btn.addEventListener("click",()=>{
  sticky.classList.toggle("aberto")
  sticky2.classList.toggle("aberto");
  menu.classList.toggle("aberto")

})

links.forEach((elemento) => {
  elemento.addEventListener('click', () => {
    menu.classList.remove('aberto');
    sticky.classList.remove('aberto');
    sticky2.classList.remove('aberto');
  });
});


acord.forEach((elemento) => {
  elemento.addEventListener('click', () => {
    elemento.children[1].classList.toggle('active');
  });
});





const observador=new IntersectionObserver(alvo=>{
  alvo.forEach((elemento)=>{
    if(elemento.isIntersecting){
      elemento.target.classList.add("active")

      observador.unobserve(elemento.target)

    }


  },{threshold:0.1})
})

elementos.forEach(elemento=>{
  observador.observe(elemento)
})

cards.forEach(card=>{
  card.addEventListener("click",()=>{
      card.classList.remove('toque');
      void card.offsetWidth;
      card.classList.add('toque');

  })

  card.addEventListener('animationend', (e) => {
    if (e.animationName === 'brilho-toque') {
      card.classList.remove('toque');
    }
  });
})