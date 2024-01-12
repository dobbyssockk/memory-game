'use strict';
 document.addEventListener('DOMContentLoaded', () => {
     let isGameRunning = false;

     // Array with cards
     const gameItems = [
         {alt: 'burger', src: 'img/burger.png'},
         {alt: 'crabs', src: 'img/crabs.png'},
         {alt: 'drink', src: 'img/drink.png'},
         {alt: 'onigiri', src: 'img/onigiri.png'},
         {alt: 'pizza', src: 'img/pizza.png'},
         {alt: 'poke', src: 'img/poke.png'},
         {alt: 'ramen', src: 'img/ramen.png'},
         {alt: 'sushi', src: 'img/sushi.png'},
         {alt: 'burger', src: 'img/burger.png'},
         {alt: 'crabs', src: 'img/crabs.png'},
         {alt: 'drink', src: 'img/drink.png'},
         {alt: 'onigiri', src: 'img/onigiri.png'},
         {alt: 'pizza', src: 'img/pizza.png'},
         {alt: 'poke', src: 'img/poke.png'},
         {alt: 'ramen', src: 'img/ramen.png'},
         {alt: 'sushi', src: 'img/sushi.png'}
     ];

     // Array for selected items
     let selectedItems = [];

     // Function for shuffling game items
     function shuffle(array) {
         for (let i = array.length - 1; i > 0; i--) {
             let j = Math.floor(Math.random() * (i + 1));
             [array[i], array[j]] = [array[j], array[i]];
         }
     }

     // Counting matched cards
     let counter = 0;

     // Rendering cards
     function render() {
         shuffle(gameItems);

         const container = document.querySelector('.container');
         container.innerHTML = '';

         gameItems.forEach((item) => {
             const card = document.createElement('div');
             card.classList.add('card');
             card.setAttribute('data-alt', item.alt);
             card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <img src="img/background.png" alt="backgroung" class="no-select" draggable="false" ondragstart="return false;">
                    </div>
                    <div class="card-back">
                        <img src="${item.src}" alt="${item.alt}" class="no-select" draggable="false" ondragstart="return false;">
                    </div>
                </div>
             `;
             container.append(card);
             card.addEventListener('click', () => {
                 if (card.classList.contains('flip')) return;
                 if (selectedItems.length === 2) return;
                 if (!isGameRunning) return;

                 selectedItems.push(card);
                 card.classList.add('flip');

                 if (selectedItems.length === 2) {
                     const [firstItem, secondItem] = selectedItems;
                     if (firstItem.getAttribute('data-alt') !== secondItem.getAttribute('data-alt')) {
                         setTimeout(() => {
                             firstItem.classList.remove('flip');
                             secondItem.classList.remove('flip');
                             selectedItems = [];
                         }, 1000);
                     } else {
                         selectedItems = [];
                         counter +=1;
                         console.log(counter);
                         if (counter === 7) {
                             counter = 0;
                             endGame();
                         }
                     }
                 }
             })
         });
     }
     render();

     const sleep = (ms) => {
         return new Promise((resolve) => {
             setTimeout(() => {
                 resolve();
             }, ms);
         })
     };

     const btn = document.querySelector('.btn-start');

     async function startGame () {
         render();

         isGameRunning = true;

         const overlay = document.querySelector('.overlay');
         const timer = document.querySelector('.timer');
         overlay.style.display = 'flex';

         // Countdown timer
         timer.innerHTML = '3';
         await sleep(1000);
         timer.innerHTML = '2';
         await sleep(1000);
         timer.innerHTML = '1';
         await sleep(1000);

         overlay.style.display = 'none';

         const cards = document.querySelectorAll('.card');
         cards.forEach((card) => {
             card.classList.add('flip');
         })
         await sleep(2000);
         cards.forEach((card) => {
             card.classList.remove('flip');
         })
     }

     async function endGame () {
         isGameRunning = false;

         // Auto flip last two cards
         await sleep(500);
         const cards = document.querySelectorAll('.card');
         cards.forEach((card) => {
             card.classList.add('flip');
         })

         await sleep(500);
         alert('Congratulations! You won =)');
         cards.forEach((card) => {
             card.classList.remove('flip');
         })
     }

     btn.addEventListener('click', startGame);
 })