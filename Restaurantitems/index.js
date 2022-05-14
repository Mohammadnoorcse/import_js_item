const menuItems = [
  {
    id: 1,
    item: "Food Item1",
    oneliner:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, labore?",
    img: "./image/1.webp",
    hotel: "Hotel name1",
    dec: "One:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt eligendi cumque esse eveniet, ea libero!",
  },
  {
    id: 2,
    item: "Food Item2",
    oneliner:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, labore?",
    img: "./image/2.webp",
    hotel: "Hotel name2",
    dec: "One:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt eligendi cumque esse eveniet, ea libero!",
  },
  {
    id: 3,
    item: "Food Item3",
    oneliner:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, labore?",
    img: "./image/3.webp",
    hotel: "Hotel name3",
    dec: "One:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt eligendi cumque esse eveniet, ea libero!",
  },
  {
    id: 4,
    item: "Food Item4",
    oneliner:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, labore?",
    img: "./image/2.webp",
    hotel: "Hotel name4",
    dec: "One:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt eligendi cumque esse eveniet, ea libero!",
  },
  {
    id: 5,
    item: "Food Item5",
    oneliner:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, labore?",
    img: "./image/3.webp",
    hotel: "Hotel name5",
    dec: "One:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt eligendi cumque esse eveniet, ea libero!",
  },
];

const item = document.getElementById('item');
const oneliner = document.getElementById('oneline');
const img = document.getElementById('img');
const hotel = document.getElementById('hotel');
const desc = document.getElementById('desc');
const  prev= document.getElementById('prev');
const  random= document.getElementById('random');
const next = document.getElementById('next');
let currentMenu = 0;

window.addEventListener('DOMContentLoaded', function () {

    allMenu(currentMenu);
});

const allMenu = () => {
        let menu = menuItems[currentMenu];
        item.textContent = menu.item;
        oneliner.textContent = menu.oneliner;
        img.src = menu.img;
        hotel.textContent = menu.hotel;
        desc.textContent = menu.dec;
}


// random menu
random.addEventListener('click', () => {
    currentMenu = Math.floor(Math.random() * menuItems.length);
    allMenu(currentMenu);
})


