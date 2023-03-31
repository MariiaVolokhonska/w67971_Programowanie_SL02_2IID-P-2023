function Alertt() {
    alert("Warning!Watch your mouth!")
    }
for(i=0;i<=100;i++){
    if (i%2==0) {
        console.log(i+",")
    }
}
var a,b;
var g,j;


a=prompt("Enter a");
b=prompt("enter b");
console.log(Number(a)+Number(b));


w=Math.floor(Math.random()*100);
g=True
j=True
while(g){
    u=prompt("Enter your number")
    while (j){
        if (w==u){
            console.log("Congratulations!")
            j=False
        }
        else if(w>u){
            console.log("Your guess number is too small. Try again")
        }
        else if(u>w){
            console.log("Your guess number is too big.Try again")
        }
    }
    

    }
