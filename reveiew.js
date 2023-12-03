new Vue({
  el: '#app',
  data: {
    content: '',
    name: '',
    photo: '',
    city: '',
    list: [
      
    ]
  },
  methods: {
    addReview(){
      this.list.push({
        name:this.name, 
        city:this.city,
        photo:this.photo,
        content:this.content
      }),
        this.name='',
        this.city='',
        this.content=''
    }
  },
})
function updateDateTime() {
  const now = new Date();
  const dateDisplay = document.getElementById("date");
  const timeDisplay = document.getElementById("time");

  const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
  };

  dateDisplay.textContent = now.toLocaleDateString(undefined, options);
  timeDisplay.textContent = now.toLocaleTimeString(undefined, options);
}

// Update the date and time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);


'use strict'

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');

const navBar = document.querySelector('.navbar');

// --- open menu ---

bxMenu.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-menu')){
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
    }
})

// --- close menu ---

bxX.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-x')){
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
    }
})