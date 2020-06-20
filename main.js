'use strict';
// sort books
const asideGroup = Array.from(document.querySelectorAll('.books > .book'));

// const asideGroup = aside.querySelectorAll('.aside');
const books = document.querySelector('.books');
// const tileElement = document.getElementsByTagName('h2');
// const collectionList = document. getElementsByTagName('ul');
// const collectionElem = document.querySelectorAll('li');

// tileElement[4].textContent = '"Книга 3. this и Прототипы Объектов"';

const sortedList = asideGroup.sort((a, b) => {
   const bookNumber1 = Number(a.querySelector('a').innerText.trim()[6]);
   const bookNumber2 = Number(b.querySelector('a').innerText.trim()[6]);

   return bookNumber1 - bookNumber2;
});

books.innerHTML = "";

sortedList.forEach(bookItem => {
   books.append(bookItem);
});

document.body.style.background = "url(./image/you-dont-know-js.jpg) center no-repeat";

const titleWithError = sortedList[2].querySelector('a');
titleWithError.innerText = titleWithError.innerText.replace('Пропопипы', 'Прототипы');

document.querySelectorAll('.adv').forEach((item) => {
   item.remove();
});

function sortOrderOfBooks(booksList) {
   return booksList.sort((a, b) => {
      if (a.innerText.startsWith('Глава') && b.innerText.startsWith('Глава')) {
         return Number(a.innerText[6]) - Number(b.innerText[6]);
      }
      if (a.innerText.startsWith('Приложение') && b.innerText.startsWith('Приложение')) {
         return a.innerText[11].charCodeAt(0) - b.innerText[11].charCodeAt(0);
      }
      if (a.innerText.startsWith('Глава') && b.innerText.startsWith('Приложение')) {
         return -1;
      }
      if (a.innerText.startsWith('Приложение') && b.innerText.startsWith('Глава')) {
         return 1;
      }
      return 0;
   })
}

const chaptersOfBook2 = Array.from(sortedList[1].querySelectorAll('li'));
const chaptersOfBook5 = Array.from(sortedList[4].querySelectorAll('li'));

sortedList[1].querySelector('ul').innerHTML = '';
sortedList[4].querySelector('ul').innerHTML = '';

sortOrderOfBooks(chaptersOfBook2).forEach(chapter => {
   sortedList[1].querySelector('ul').append(chapter);
});
sortOrderOfBooks(chaptersOfBook5).forEach(chapter => {
   sortedList[4].querySelector('ul').append(chapter);
});


const newLi = document.createElement('li');
newLi.innerText = 'Глава 8: За пределами ES6';
sortedList[5].querySelectorAll('li')[8].after(newLi);

console.log(asideGroup);
console.log(sortedList);
