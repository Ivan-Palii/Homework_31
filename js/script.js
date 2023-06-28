"use strict";

/*
* Як знайти?…
*/

//Таблиця з id="age-table".
const table = document.getElementById('age-table')
console.log(table)

//Усі елементи label всередині цієї таблиці (їх має бути 3).
const labels = table.getElementsByTagName('label')
console.log(labels)

//Перший td у цій таблиці (зі словом “Age”).
const firstTd = table.rows[0].cells[0]
console.log(firstTd)

//form з name="search".
const form = document.querySelector('form[name="search"]')
console.log(form)

const formInputs = form.getElementsByTagName('input')
//Перший input у цій формі.
const firstInp  = formInputs[0]
console.log(firstInp)

//Останній input у цій формі.
const lastInp = formInputs[formInputs.length-1]
console.log(lastInp)