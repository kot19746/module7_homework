//Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

//Определяем родительскую функцию с методами, которые включают/выключают прибор из розетки

function ElecMachin(name, power) { 
  
      this.name = name;
      this.power = power;        
      this.enabled = false; 
  }

ElecMachin.prototype.getEnabled = function() {
  
    this.enabled = true;  
}  

ElecMachin.prototype.getPower = function() {
  
  if (this.enabled) {
    
    return this.power;
    
  } else {
    
    return 0;
  }
}
//Выносим метод за пределы функции конструктора
ElecMachin.prototype.getInfo = function(marque, power) { 
 console.log(`Marque is ${marque}, power is ${power} Watt `)
}

//Создаем делегирующую связь
OfficeAppliance.prototype = new ElecMachin()

function OfficeAppliance(name, fabrication) { 
    this.name = name,
    this.fabrication = fabrication,
    this.category = 'electrical appliance',//Собственные свойства нового прибора
    this.place = 'table position'
}
//Собственный метод нового прибора опять выносим метод за пределы тела функции
OfficeAppliance.prototype.getFabrication = function(fabrication) {
  console.log(`Made in ${fabrication}`)
};

//создаем экземпляры прибора
const printer = new OfficeAppliance('printer', 10, 'Chine', 'Canon')
const computer = new OfficeAppliance('computer', 15, 'USA', 'Аpple')
const lamp = new ElecMachin('lamp', 50, 'Luxen')

printer.getPower()
//вызов конструктора ElecMachin 
//если не задать аргументы, пишет "Marque is undefined, power is undefined Watt "
 lamp.getInfo('Luxen', 50); 
 printer.getInfo('Canon', 10);
 computer.getInfo('Apple', 15);

//вызов конструктора OfficeAppliance
computer.getFabrication('USA'); 

//считаем общую мощность и... не работает

const getPowerSum = () => {
    let sum = 0
    sum += printer.getPower()
    sum += computer.getPower()
    console.log(sum)
    let result = sum !== 0 ? `Потребляют ${sum} ват` : 'Turn on your appliance'
    console.log(result)
}

getPowerSum()
