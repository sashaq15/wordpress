let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Artem: "dsf"
  }



function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }


function multiplyObjects(obj) {
    for(let key in obj) {
        if (typeof(obj[key]) == 'number') {
            obj[key] = obj[key]*2;
        }
    }
}

for(let key in salaries) {
    console.log(salaries[key])
}d

multiplyObjects(salaries);

for(let key in salaries) {
    console.log(salaries[key])
}


console.log(typeof(2));