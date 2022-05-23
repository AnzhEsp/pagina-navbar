


(function() {
const menuItem = document.querySelectorAll('.menu__toggle')
 const addClick=()=>{
   menuItem.forEach(item=>{
     item.firstElementChild.firstElementChild.addEventListener('click',()=>{
       item.lastElementChild.classList.toggle('slide')
       item.firstElementChild.classList.toggle('menu__item-text')
       
     })
   })
 }
// item.addEventListener('click',()=>{
//       item.lastElementChild.classList.toggle('slide')
//       const div=item.firstElementChild
//       div.classList.toggle('menu__item-text')
//      })
  window.addEventListener('resize',()=>{
    if(window.innerWidth <= 768){
    addClick()
    }
  })
})();