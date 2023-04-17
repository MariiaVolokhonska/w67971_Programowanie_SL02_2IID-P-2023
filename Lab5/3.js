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
/*Task 3*/
//1
let s=0;
let l=[0,1,2,3,4,5,6,7,8,9];
for(let j=0;j<l.length;j++){
    s+=l[j];
}
console.log(s);
//2
console.log("Liczbe parzyste w ciągu: ")
for(let j=0;j<l.length;j++){
    if(l[j]%2==0){
        console.log(l[j]);
    }
}
//3
let nl=l.map(element=>element*3);
console.log("Nowa tablica z wartościami,mnożonymi razy 3: ");
console.log(nl);
//4
l.push(67971);
console.log("Nowa tablica z numerem albumu: ");
console.log(l);
for(let j=0;j<l.length;j++){
    if(l[j]==67971){
        console.log("Indeksem numera albumu jest: ",j);
    }
}
//5
s+=67971;
console.log("średnia arytmetyczna jest: ",s/l.length);
//6
let max=l[0];
for(let j=1;j<l.length;j++){
    if(l[j]>l[j-1]){
        max=l[j];
    }
}
console.log("Elementem największym jest: ",max);
//7
let t=prompt("Wprowadz wybraną wartość:")
let k=0;
for (let m=0;m<l.length;m++){
    if(m==t){
        k+=1;
    }
}
console.log("Ilość wystąpień:",k)

/*Task4*/
let tablica=[0,1]
function Fibbonaci(tablica){
    for(let i=2;i<100;i++){
        tablica.push(tablica[i-1]+tablica[i-2]);
    }
    for (i=0;i<tablica.length;i++){
        console.log(tablica[i]) 
    }
}

Fibbonaci(tablica)