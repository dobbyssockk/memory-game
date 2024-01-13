'use strict';
 document.addEventListener('DOMContentLoaded', () => {
     let isGameRunning = false;

     // Array with cards
     const food = [
         {alt: 'burger', src: 'img/food/burger-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'crabs', src: 'img/food/crabs-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'drink', src: 'img/food/drink-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'onigiri', src: 'img/food/onigiri-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'pizza', src: 'img/food/pizza-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'poke', src: 'img/food/poke-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'ramen', src: 'img/food/ramen-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'sushi', src: 'img/food/sushi-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'burger', src: 'img/food/burger-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'crabs', src: 'img/food/crabs-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'drink', src: 'img/food/drink-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'onigiri', src: 'img/food/onigiri-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'pizza', src: 'img/food/pizza-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'poke', src: 'img/food/poke-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'ramen', src: 'img/food/ramen-min.png', bg: 'img/bg-food-min.png'},
         {alt: 'sushi', src: 'img/food/sushi-min.png', bg: 'img/bg-food-min.png'}
     ];

     const animals = [
         {alt: 'bear', src: 'img/animals/bear-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'cat', src: 'img/animals/cat-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'dog', src: 'img/animals/dog-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'elephant', src: 'img/animals/elephant-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'fox', src: 'img/animals/fox-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'monkey', src: 'img/animals/monkey-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'owl', src: 'img/animals/owl-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'rabbit', src: 'img/animals/rabbit-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'bear', src: 'img/animals/bear-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'cat', src: 'img/animals/cat-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'dog', src: 'img/animals/dog-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'elephant', src: 'img/animals/elephant-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'fox', src: 'img/animals/fox-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'monkey', src: 'img/animals/monkey-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'owl', src: 'img/animals/owl-min.png', bg: 'img/bg-animals-min.png'},
         {alt: 'rabbit', src: 'img/animals/rabbit-min.png', bg: 'img/bg-animals-min.png'}
     ];

     const anime = [
         {alt: 'boy', src: 'img/anime/boy-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'bunny ears', src: 'img/anime/bunny-ears-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'with cloak', src: 'img/anime/cloak-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'girl', src: 'img/anime/girl-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'pink hair', src: 'img/anime/pink-hair-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'ponytails', src: 'img/anime/ponytails-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'white dress', src: 'img/anime/white-dress-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'white hair', src: 'img/anime/white-hair-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'boy', src: 'img/anime/boy-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'bunny ears', src: 'img/anime/bunny-ears-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'with cloak', src: 'img/anime/cloak-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'girl', src: 'img/anime/girl-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'pink hair', src: 'img/anime/pink-hair-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'ponytails', src: 'img/anime/ponytails-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'white dress', src: 'img/anime/white-dress-min.png', bg: 'img/bg-anime-min.png'},
         {alt: 'white hair', src: 'img/anime/white-hair-min.png', bg: 'img/bg-anime-min.png'}
     ];

     const minion = [
         {alt: 'chef', src: 'img/minion/chef-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'cyborg', src: 'img/minion/cyborg-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'devil', src: 'img/minion/devil-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'magician', src: 'img/minion/magician-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'pirate', src: 'img/minion/pirate-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'police', src: 'img/minion/police-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'police with beard', src: 'img/minion/police-with-beard-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'scout', src: 'img/minion/scout-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'chef', src: 'img/minion/chef-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'cyborg', src: 'img/minion/cyborg-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'devil', src: 'img/minion/devil-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'magician', src: 'img/minion/magician-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'pirate', src: 'img/minion/pirate-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'police', src: 'img/minion/police-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'police with beard', src: 'img/minion/police-with-beard-min.png', bg: 'img/bg-minion-min.png'},
         {alt: 'scout', src: 'img/minion/scout-min.png', bg: 'img/bg-minion-min.png'}
     ];

     // Changing theme and cursor
     const themeBtns = document.querySelectorAll('.game__theme');
     let theme = food;
     let cursor = 'cursor-food';
     const body = document.querySelector('body'),
           html = document.querySelector('html'),
           game = document.querySelector('.game');

     themeBtns.forEach((btn) => {
         btn.addEventListener('click', () => {
             audioStart.play();
             resetGame();
             if (btn.classList.contains('food')) {
                 theme = food;
                 body.style.cursor = "url('icons/cursor-food.png'), auto";
                 html.style.cursor = "url('icons/cursor-food.png'), auto";
                 game.style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
                 cursor = 'cursor-food';
                 render(food, cursor);
             } else if (btn.classList.contains('animals')) {
                 theme = animals;
                 body.style.cursor = "url('icons/cursor-animals.png'), auto";
                 html.style.cursor = "url('icons/cursor-animals.png'), auto";
                 game.style.backgroundImage = "linear-gradient(160deg, #eca372 0%, #e1ac71 100%)";
                 cursor = 'cursor-animals';
                 render(animals, cursor);
             } else if (btn.classList.contains('anime')) {
                 theme = anime;
                 body.style.cursor = "url('icons/cursor-anime.png'), auto";
                 html.style.cursor = "url('icons/cursor-anime.png'), auto";
                 game.style.backgroundImage = "linear-gradient(315deg, #bdcad9 0%, #e1dada 74%)";
                 cursor = 'cursor-anime';
                 render(anime, cursor);
             } else if (btn.classList.contains('minion')) {
                 theme = minion;
                 body.style.cursor = "url('icons/cursor-minion.png'), auto";
                 html.style.cursor = "url('icons/cursor-minion.png'), auto";
                 game.style.backgroundImage = "linear-gradient(315deg, rgb(226 215 129) 0%, rgb(226 190 35) 74%)";
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

     const audioMatch = new Audio('match.wav');
     const audioCardClick = new Audio('click-card.wav');
     const indicator = document.querySelector('.game__indicator');
     let totalScore = 0;
     const score = document.querySelector('.game__score span');

     const measure = 15;

     // Rendering cards
     function render(theme, cursor) {
         shuffle(theme);

         const cardBoard = document.querySelector('.game__cardboard');
         cardBoard.innerHTML = '';

         theme.forEach((item) => {
             const card = document.createElement('div');
             card.classList.add('game__card');
             card.classList.add(cursor);
             card.setAttribute('data-alt', item.alt);
             card.innerHTML = `
                <div class="game__card-inner">
                    <div class="game__card-front">
                        <img src="${item.bg}" alt="background" class="no-select" draggable="false" ondragstart="return false;">
                    </div>
                    <div class="game__card-back">
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
                 audioCardClick.play();

                 if (selectedItems.length === 2) {
                     const [firstItem, secondItem] = selectedItems;
                     if (firstItem.getAttribute('data-alt') !== secondItem.getAttribute('data-alt')) {
                         setTimeout(() => {
                             firstItem.classList.remove('flip');
                             secondItem.classList.remove('flip');
                             selectedItems = [];
                         }, 1000);
                         indicator.style.color = 'red';
                         indicator.textContent = `-${measure}`;
                         totalScore -= measure;
                         score.textContent = totalScore;
                     } else {
                         audioMatch.play();
                         indicator.style.color = 'darkgreen';
                         indicator.textContent = `+${measure}`;
                         totalScore += measure;
                         score.textContent = totalScore;
                         selectedItems = [];
                         counter +=1;
                         if (counter === 7) {
                             indicator.style.color = 'darkgreen';
                             indicator.textContent = `+${measure}`;
                             totalScore += measure;
                             score.textContent = totalScore;
                             counter = 0;
                             selectedItems = [];
                             endGame();
                         }
                     }
                 }
                 if (totalScore < 0) {
                     score.style.color = 'red';
                 } else {
                     score.style.color = 'darkgreen';
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
         counter = 0;
         selectedItems = [];
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

         const cards = document.querySelectorAll('.game__card');
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
         counter = 0;
         selectedItems = [];
     }

     async function endGame () {
         isGameRunning = false;
         counter = 0;
         selectedItems = [];

         // Auto flip last two cards
         await sleep(500);
         const cards = document.querySelectorAll('.game__card');
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

     const audioStart = new Audio('click-sound.mp3');

     btnStart.addEventListener('click', () => {
         audioStart.play();
         startGame(theme, cursor);
     });

 })