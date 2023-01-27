//Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.

function getObject() {
 let emptyObgect = Object.create(null);
  console.log(emptyObgect)
}
getObject()