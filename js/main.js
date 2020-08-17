
const navBar = document.getElementById('nav')
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelector('.links')
const topLink = document.querySelector('.top-link')

navToggle.addEventListener('click',function(){
  let navHeight = navLinks.getBoundingClientRect().height
  let linksHeight = links.getBoundingClientRect().height
   if(navHeight===0){
      navLinks.style.height = `${linksHeight}px`
   }else{
    navLinks.style.height =0
   }
})

window.addEventListener('scroll',function(e){
    const page= window.pageYOffset
    const navLink = nav.getBoundingClientRect().height;
     if(navLink<page){
       navBar.classList.add('fixed-nav')
       navLinks.style.height =0
     }else{
       navBar.classList.remove('fixed-nav')
     }
     if(page>500){
       topLink.classList.add('show-link')
     }else{
      topLink.classList.remove('show-link')
     }
})



