//Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.

 const user = {
  name: "Nikolas",
  age: 30
}
 
 function myFun(user, str) {
  return str in user;
 }
   console.log(myFun(user, 'name'))              
   console.log(myFun(user, 'job'))  