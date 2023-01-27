//Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.

 const user = {
  name: "Nikolas",
  age: 30
}

function myFun (user) {
  
for (let key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(Object.keys(user), Object.values(user));
     }   
   }
 } 
myFun(user)
 