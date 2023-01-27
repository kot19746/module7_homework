//Задание 5.
Переписать консольное приложение из предыдущего юнита на классы.

//Определяем родительский класс
class ElecMachine {
  
  constructor (name) {
  this.name = name;
} 
   getInfo() {
  console.log(`With is ${this.name}`)
  }
}
 

//делаем дочерний класс
class AppareilElectrique extends ElecMachine {
  
  constructor (category, name) {
    super(name);
    this.category = category;
    
  }
  getCategoryInfo() {
  console.log(`It's from ${this.category}`)
  }
}

//создаем экземпляры класса
const printer = new AppareilElectrique('table category', 'printer', 'Canon', 50);
const computer = new AppareilElectrique('table category', 'computer', 'Аpple', 40);

console.log(computer instanceof ElecMachine)

console.log(computer instanceof AppareilElectrique)

console.log(computer.getInfo())
console.log(computer.getCategoryInfo())