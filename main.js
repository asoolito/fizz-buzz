// let userAge = prompt ("yoshingizni kiirting")
// if(18  <= userAge){
//     console.log("siz balog'at  yoshidasiz  ")
// }else{
//   console.log("siz balog'at yoshida emassiz");
// }   
const userRandomNumber = alert ("SIzda hozir random raqamlar chiqadi")
const randomNumber =Math.round(Math.random()* 100)
alert(`Random raqam ${randomNumber} edi`)
if(randomNumber % 3 == 0){
    alert("Bu raqam fizz ")
}
else if(randomNumber % 5 == 0){
    alert("Bu raqam buzz ")
}else if(randomNumber % 3&&5==0){
    alert("Bu raqam fizzbuzz")
}
else{
    alert("Bu raqam fizz ham  buzz ham emas")
}