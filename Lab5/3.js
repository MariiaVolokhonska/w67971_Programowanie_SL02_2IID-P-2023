/*Task1*/
function Age(){
    if(age>=18){
        document.write("You are adult")
    }
    else{
        document.write("You are not adult yet")
    }
}
let age  = prompt("Enter your age")
Age(age)
/*Task2*/
let temp=prompt("Enter the temperature in Celsjiusz")
console.log("Result of convertion to Farenheit is: ",temp*1.8+32)
/*Task4*/
let tablica=[0]
function Fibbonaci(tablica){
    tablica.push(1);
    for(i=2;i<100;i++){
        tablica.push(tablica[i-1]+tablica[i-2]);
    }
    for (i=0;i<tablica.length;i++){
        console.log(tablica[i]) 
    }
}

Fibbonaci(tablica)