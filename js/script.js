"use strict";


/*
Вкажіть принаймні один спосіб доступу до кожного з перелічених нижче DOM вузлів:

До DOM вузла <div>?
*/
const divELem = document.body.firstElementChild
console.log(divELem)
/*
До DOM вузла <ul>?
 */
const ulElem = divELem.nextElementSibling
console.log(ulElem)
/*
До другого <li> (Петро)?*/
const lastLiElem = ulElem.lastElementChild
console.log(lastLiElem)






