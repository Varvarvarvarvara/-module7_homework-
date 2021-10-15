//Задание 1. Написать, функцию, которая принимает в качестве аргумента объект
// и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const food = {
  fruit: "apple", 
  veg: "carrot"
  };
  
  function WhatIeat (object) {
    for (let key in object) {
    if (object.hasOwnProperty(key)){
     console.log(key, object[key])
    }
      
    }
  }
  
  
  
  
  WhatIeat(food); 
  
//Задание 2.Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.    

const food = {
  fruit: "apple", 
  veg: "carrot"
  };
  
  function WhatIeat (object, string) {
  let result;
  result = (string in object);
  return result;
  }
  
  console.log(WhatIeat(food, 'fruit')); 
  
  
//Задание 3.Написать функцию, которая создает пустой объект, но без прототипа.

function nullObj() {
  let obj = {};
  console.log(obj);
}

nullObj();



//Задание 4.

function Technics(type, power ){
  this.type = type;
  this.power = power;
  this.enabled = false;
}

Technics.prototype.button = function () {
  if (this.enabled == false) {
    this.enabled=true;
    console.log(this.type + ' is on')
  } else {
    this.enabled=false;
    console.log(this.type + " is off")
  } 
}

Technics.prototype.getPower = function() {
 console.log("power is " + this.power )
}

function Computer(type, power, screenResolution) {
    this.type = type;
    this.power = power; 
    this.screenResolution = screenResolution;
    this.description = function() {
      console.log("this is" + this.type + ". requires " + this.power + " watts. resolution is " + this.screenResolution);
    }
}



function Phone(type, power, screenResolution) {
  this.type = type;
  this.power = power; 
  this.screenResolution = screenResolution;
  this.description = function() {
    console.log("this is" + this.type + ". requires " + this.power + " watts. resolution is " + this.screenResolution);
    }
}


Computer.prototype = new Technics();
Phone.prototype = new Technics();


let macbook = new Computer("laptop", 500, "1920 x 1080");
let iphone = new Phone("mobile phone", 100, "720 x 1080");

macbook.getPower();
macbook.button();
macbook.description();


