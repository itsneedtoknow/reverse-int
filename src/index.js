module.exports = function reverse (n) {
  if(n < 0){
    n = -(n);
  }
    let string = n.toString(); //преобразую число в строку
    let stringArray = string.split(""); //разбиваю на массив
    let reversedArray = stringArray.reverse(); // изменяю порядок массива
    let reversed = reversedArray.join(""); // соединяю
    let reversedNumber = Number(reversed);  
    return reversedNumber;//преобразую в число  
}  
