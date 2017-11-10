// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(num) {return num.toLowerCase()})
}

function nameToAttributes(array) {
  return array.map(function(num){
    let numero = num.split(' ');
    return Object.assign({}, { firstName: numero[0]}, { lastName: numero[1]} );
  })
}

function attributesToPhrase(array){
  return array.map(function(num){
    return `${num.name} is from ${num.hometown}`
  })
}
