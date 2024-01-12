'use strict';
 document.addEventListener('DOMContentLoaded', () => {
     let isGameRunning = false;

     // Array with cards
     const food = [
         {alt: 'burger', src: 'img/food/burger.png', bg: 'img/background-food.png'},
         {alt: 'crabs', src: 'img/food/crabs.png', bg: 'img/background-food.png'},
         {alt: 'drink', src: 'img/food/drink.png', bg: 'img/background-food.png'},
         {alt: 'onigiri', src: 'img/food/onigiri.png', bg: 'img/background-food.png'},
         {alt: 'pizza', src: 'img/food/pizza.png', bg: 'img/background-food.png'},
         {alt: 'poke', src: 'img/food/poke.png', bg: 'img/background-food.png'},
         {alt: 'ramen', src: 'img/food/ramen.png', bg: 'img/background-food.png'},
         {alt: 'sushi', src: 'img/food/sushi.png', bg: 'img/background-food.png'},
         {alt: 'burger', src: 'img/food/burger.png', bg: 'img/background-food.png'},
         {alt: 'crabs', src: 'img/food/crabs.png', bg: 'img/background-food.png'},
         {alt: 'drink', src: 'img/food/drink.png', bg: 'img/background-food.png'},
         {alt: 'onigiri', src: 'img/food/onigiri.png', bg: 'img/background-food.png'},
         {alt: 'pizza', src: 'img/food/pizza.png', bg: 'img/background-food.png'},
         {alt: 'poke', src: 'img/food/poke.png', bg: 'img/background-food.png'},
         {alt: 'ramen', src: 'img/food/ramen.png', bg: 'img/background-food.png'},
         {alt: 'sushi', src: 'img/food/sushi.png', bg: 'img/background-food.png'}
     ];

     const animals = [
         {alt: 'bear', src: 'img/animals/bear.png', bg: 'img/background-animals.png'},
         {alt: 'cat', src: 'img/animals/cat.png', bg: 'img/background-animals.png'},
         {alt: 'dog', src: 'img/animals/dog.png', bg: 'img/background-animals.png'},
         {alt: 'elephant', src: 'img/animals/elephant.png', bg: 'img/background-animals.png'},
         {alt: 'fox', src: 'img/animals/fox.png', bg: 'img/background-animals.png'},
         {alt: 'monkey', src: 'img/animals/monkey.png', bg: 'img/background-animals.png'},
         {alt: 'owl', src: 'img/animals/owl.png', bg: 'img/background-animals.png'},
         {alt: 'rabbit', src: 'img/animals/rabbit.png', bg: 'img/background-animals.png'},
         {alt: 'bear', src: 'img/animals/bear.png', bg: 'img/background-animals.png'},
         {alt: 'cat', src: 'img/animals/cat.png', bg: 'img/background-animals.png'},
         {alt: 'dog', src: 'img/animals/dog.png', bg: 'img/background-animals.png'},
         {alt: 'elephant', src: 'img/animals/elephant.png', bg: 'img/background-animals.png'},
         {alt: 'fox', src: 'img/animals/fox.png', bg: 'img/background-animals.png'},
         {alt: 'monkey', src: 'img/animals/monkey.png', bg: 'img/background-animals.png'},
         {alt: 'owl', src: 'img/animals/owl.png', bg: 'img/background-animals.png'},
         {alt: 'rabbit', src: 'img/animals/rabbit.png', bg: 'img/background-animals.png'}
     ];

     const anime = [
         {alt: 'boy', src: 'img/anime/boy.png', bg: 'img/background-anime.png'},
         {alt: 'bunny ears', src: 'img/anime/bunny-ears.png', bg: 'img/background-anime.png'},
         {alt: 'with cloak', src: 'img/anime/cloak.png', bg: 'img/background-anime.png'},
         {alt: 'girl', src: 'img/anime/girl.png', bg: 'img/background-anime.png'},
         {alt: 'pink hair', src: 'img/anime/pink-hair.png', bg: 'img/background-anime.png'},
         {alt: 'ponytails', src: 'img/anime/ponytails.png', bg: 'img/background-anime.png'},
         {alt: 'white dress', src: 'img/anime/white-dress.png', bg: 'img/background-anime.png'},
         {alt: 'white hair', src: 'img/anime/white-hair.png', bg: 'img/background-anime.png'},
         {alt: 'boy', src: 'img/anime/boy.png', bg: 'img/background-anime.png'},
         {alt: 'bunny ears', src: 'img/anime/bunny-ears.png', bg: 'img/background-anime.png'},
         {alt: 'with cloak', src: 'img/anime/cloak.png', bg: 'img/background-anime.png'},
         {alt: 'girl', src: 'img/anime/girl.png', bg: 'img/background-anime.png'},
         {alt: 'pink hair', src: 'img/anime/pink-hair.png', bg: 'img/background-anime.png'},
         {alt: 'ponytails', src: 'img/anime/ponytails.png', bg: 'img/background-anime.png'},
         {alt: 'white dress', src: 'img/anime/white-dress.png', bg: 'img/background-anime.png'},
         {alt: 'white hair', src: 'img/anime/white-hair.png', bg: 'img/background-anime.png'}
     ];

     const minion = [
         {alt: 'chef', src: 'img/minion/chef.png', bg: 'img/background-minion.png'},
         {alt: 'cyborg', src: 'img/minion/cyborg.png', bg: 'img/background-minion.png'},
         {alt: 'devil', src: 'img/minion/devil.png', bg: 'img/background-minion.png'},
         {alt: 'magician', src: 'img/minion/magician.png', bg: 'img/background-minion.png'},
         {alt: 'pirate', src: 'img/minion/pirate.png', bg: 'img/background-minion.png'},
         {alt: 'police', src: 'img/minion/police.png', bg: 'img/background-minion.png'},
         {alt: 'police with beard', src: 'img/minion/police-with-beard.png', bg: 'img/background-minion.png'},
         {alt: 'scout', src: 'img/minion/scout.png', bg: 'img/background-minion.png'},
         {alt: 'chef', src: 'img/minion/chef.png', bg: 'img/background-minion.png'},
         {alt: 'cyborg', src: 'img/minion/cyborg.png', bg: 'img/background-minion.png'},
         {alt: 'devil', src: 'img/minion/devil.png', bg: 'img/background-minion.png'},
         {alt: 'magician', src: 'img/minion/magician.png', bg: 'img/background-minion.png'},
         {alt: 'pirate', src: 'img/minion/pirate.png', bg: 'img/background-minion.png'},
         {alt: 'police', src: 'img/minion/police.png', bg: 'img/background-minion.png'},
         {alt: 'police with beard', src: 'img/minion/police-with-beard.png', bg: 'img/background-minion.png'},
         {alt: 'scout', src: 'img/minion/scout.png', bg: 'img/background-minion.png'}
     ];

     // Changing theme and cursor
     const themeBtns = document.querySelectorAll('.theme');
     let theme = food;
     let cursor = 'cursor-food';
     const body = document.querySelector('body'),
           html = document.querySelector('html'),
           game = document.querySelector('.game'),
           btns = document.querySelectorAll('.btn');

     themeBtns.forEach((btn) => {
         btn.addEventListener('click', () => {
             audio.play();
             resetGame();
             if (btn.classList.contains('food')) {
                 theme = food;
                 body.style.cursor = "url('icon/cursor-food.png'), auto";
                 html.style.cursor = "url('icon/cursor-food.png'), auto";
                 game.style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
                 cursor = 'cursor-food';
                 render(food, cursor);
             } else if (btn.classList.contains('animals')) {
                 theme = animals;
                 body.style.cursor = "url('icon/cursor-animals.png'), auto";
                 html.style.cursor = "url('icon/cursor-animals.png'), auto";
                 game.style.backgroundImage = "linear-gradient(160deg, #14de50 0%, #8eda8e 100%)";
                 cursor = 'cursor-animals';
                 render(animals, cursor);
             } else if (btn.classList.contains('anime')) {
                 theme = anime;
                 body.style.cursor = "url('icon/cursor-anime.png'), auto";
                 html.style.cursor = "url('icon/cursor-anime.png'), auto";
                 game.style.backgroundImage = "linear-gradient(315deg, #bdcad9 0%, #e1dada 74%)";
                 cursor = 'cursor-anime';
                 render(anime, cursor);
             } else if (btn.classList.contains('minion')) {
                 theme = minion;
                 body.style.cursor = "url('icon/cursor-minion.png'), auto";
                 html.style.cursor = "url('icon/cursor-minion.png'), auto";
                 game.style.backgroundImage = "linear-gradient(315deg, #fff293 0%, #ffe884 74%)";
                 cursor = 'cursor-minion';
                 render(minion, cursor);
             }
         })
     })

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
     function render(theme, cursor) {
         shuffle(gameItems);

         const cardBoard = document.querySelector('.cardboard');
         cardBoard.innerHTML = '';

         theme.forEach((item) => {
             const card = document.createElement('div');
             card.classList.add('card');
             card.classList.add(cursor);
             card.setAttribute('data-alt', item.alt);
             card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <img src="${item.bg}" alt="background" class="no-select" draggable="false" ondragstart="return false;">
                    </div>
                    <div class="card-back">
                        <img src="${item.src}" alt="${item.alt}" class="no-select" draggable="false" ondragstart="return false;">
                    </div>
                </div>
             `;
             cardBoard.append(card);
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
                             selectedItems = [];
                             endGame();
                         }
                     }
                 }
             })
         });
     }
     render(theme);

     const sleep = (ms) => {
         return new Promise((resolve) => {
             setTimeout(() => {
                 resolve();
             }, ms);
         })
     };

     const btnStart = document.querySelector('.btn-start');
     const overlay = document.querySelector('.overlay');

     async function startGame (theme, cursor) {
         render(theme, cursor);

         isGameRunning = true;

         const timer = document.querySelector('.timer');
         overlay.style.display = 'flex';
         timer.style.display = 'flex';

         // Countdown timer
         timer.innerHTML = '3';
         await sleep(1000);
         timer.innerHTML = '2';
         await sleep(1000);
         timer.innerHTML = '1';
         await sleep(1000);

         overlay.style.display = 'none';
         timer.style.display = 'none';

         const cards = document.querySelectorAll('.card');
         cards.forEach((card) => {
             card.classList.add('flip');
         })
         await sleep(2000);
         cards.forEach((card) => {
             card.classList.remove('flip');
         })
     }

     function resetGame () {
         isGameRunning = false;
         selectedItems = [];
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
         overlay.style.display = 'flex';
         const modal = document.querySelector('.modal');
         modal.style.display = 'flex';

         await sleep(2000);
         overlay.style.display = 'none';
         modal.style.display = 'none';

         cards.forEach((card) => {
             card.classList.remove('flip');
         })
     }

     const audio = new Audio('click-sound.mp3');

     btnStart.addEventListener('click', () => {
         audio.play();
         startGame(theme, cursor);
     });

 })