

// ====== slider start=======>
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});
prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});
function carousel() {
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = "none";

// =======menu section start=========>
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "vegetable",
    price: 15.99,
    img: "https://images.pexels.com/photos/4194610/pexels-photo-4194610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "food",
    price: 13.99,
    img: "https://images.pexels.com/photos/4197986/pexels-photo-4197986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "weekly",
    price: 6.99,
    img: "https://images.pexels.com/photos/4194612/pexels-photo-4194612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "vegetable",
    price: 20.99,
    img: "https://images.pexels.com/photos/4020557/pexels-photo-4020557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "food",
    price: 22.99,
    img: "https://images.pexels.com/photos/4022098/pexels-photo-4022098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "weekly",
    price: 18.99,
    img: "https://images.pexels.com/photos/4022091/pexels-photo-4022091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "vegetable",
    price: 8.99,
    img: "https://images.pexels.com/photos/3990338/pexels-photo-3990338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "food",
    price: 12.99,
    img: "https://images.pexels.com/photos/4021624/pexels-photo-4021624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "weekly",
    price: 16.99,
    img: "https://images.pexels.com/photos/4197444/pexels-photo-4197444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "healthy",
    price: 22.99,
    img: "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "bison steak",
    category: "plan",
    price: 22.99,
    img: "https://images.pexels.com/photos/3716873/pexels-photo-3716873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "bison steak",
    category: "plan",
    price: 22.99,
    img: "https://images.pexels.com/photos/3900335/pexels-photo-3900335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const sectionCenter = document.querySelector('.menu-contain')
const filterBtn = document.querySelectorAll('.btn-menu')
 window.addEventListener('DOMContentLoaded',function(){
     displayMenuItem(menu)
 })
  filterBtn.forEach(btn=>{
    btn.addEventListener('click',function(e){
       const category = e.currentTarget.dataset.id
       const menuCategory = menu.filter(menuItem=>{
         if(menuItem.category===category){
           return menuItem
         }
       })
      if(category === 'all'){
        displayMenuItem(menu)
      }else{
        displayMenuItem(menuCategory)
      }
    })
  })

 function displayMenuItem(menuItem){
  let displayMenu = menuItem.map(item=>{
    return ` <div class="menu-item"> 
    <img class="img-fluid" src="${item.img}" alt="${item.title}">
    <div class="menu-info">
       <header>
          <h4>${item.title}</h4>
          <h3>${item.price}</h3>
       </header>
       <p class="text">${item.desc}</p>
    </div>
   </div>`
})
displayMenu = displayMenu.join("")
sectionCenter.innerHTML = displayMenu
 }
// =======menu section end=========>
// ========video section start =====>
const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

video.addEventListener('click',videoStatus)
video.addEventListener('timeupdate',updateProgress)
play.addEventListener('click',videoStatus)
progress.addEventListener('change',setVideoProgress)

stop.addEventListener('click',function(){
     video.currentTime =0;
     video.pause()
})

function updateProgress(){
   progress.value = (video.currentTime / video.duration) *100

   let mins = Math.floor(video.currentTime / 60)
   if(mins<10){
      mins = '0' + String(mins)
   }
   let secs = Math.floor(video.currentTime % 60)

   if(secs<10){
     secs = '0' + String(secs)
   }
   timestamp.innerHTML = `${mins}:${secs}`
}
function setVideoProgress(){
  video.currentTime = (+progress.value * video.duration)/100
}
function videoStatus(){
  if(video.paused){
    video.play()
    play.innerHTML = `<i class="fas fa-pause fa-2x"></i>`
  }else{
    video.pause()
    play.innerHTML = `<i class="fa fa-play fa-2x">`
    
  }
}

// ========video section end =====>
// ========review section start====>

const reviews = [
  {
    id: 1,
    name: "Ovi Mitra",
    job: "Game Developer",
    img:
      "https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.0-9/59211545_2342289952481405_1326453756916662272_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_eui2=AeHp-HPfU0RPVHXJBCsFEBK9jv8Zf5eShcWO_xl_l5KFxSXMcXwlcltkjU85cOqQC7sbb1_RS3ttBooFxPK7J3W_&_nc_ohc=AvozukLAI4kAX-hT13l&_nc_ht=scontent.fcgp6-1.fna&oh=53e06996a4e81bbc368f5071cd6b5962&oe=5F625DCF",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Tutul Das",
    job: "web designer",
    img:
      "https://scontent.fcgp6-1.fna.fbcdn.net/v/t1.0-9/22448664_1944099662511267_27249712594668349_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_eui2=AeGaJJV0X6XKhji76fqRRGBxp3rJU4j_09OneslTiP_T04YUK4-Ud6exVpkxUdelTFZOvQKhWIkOUNDzHHgGfTSj&_nc_ohc=bX7EB16acv4AX_Nmvoj&_nc_ht=scontent.fcgp6-1.fna&oh=9a86e82b0579640160471520f4b8aff9&oe=5F5FA4F1",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const reviewImg = document.getElementById('img-rev')
const author = document.getElementById('author')
const job = document.getElementById('job')
const desc = document.getElementById('desc')

const prevReview = document.getElementById('prev-review')
const nextReview = document.getElementById('next-review')
const randomBtn = document.querySelector('.random-review')

let currentItem =0
// console.log(prevReview)
window.addEventListener('DOMContentLoaded',function(){
  showPerson(currentItem)
})
function showPerson(person){
     let item = reviews[person]
         reviewImg.src = item.img
         author.textContent = item.name
         job.textContent = item.job
         desc.textContent = item.text
}
nextReview.addEventListener('click',function(){
    currentItem++
    if(currentItem > reviews.length -1){
      currentItem =0
    }
    showPerson(currentItem)
})
prevReview.addEventListener('click',function(){
    currentItem--
    if(currentItem < 0){
      currentItem = reviews.length -1
    }
    showPerson(currentItem)
})
randomBtn.addEventListener('click',function(){
      let randomSelect = Math.floor(Math.random() * reviews.length)
      showPerson(randomSelect)
})
// ========review section end====>
