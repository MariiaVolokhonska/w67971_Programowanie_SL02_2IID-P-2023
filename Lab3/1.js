function Alertt() {
    alert("Warning!Watch your mouth!")
    }
for(i=0;i<=100;i++){
    if (i%2==0) {
        console.log(i+",")
    }
}
var a,b;



a=prompt("Enter a");
b=prompt("enter b");
console.log(Number(a)+Number(b));

function Game(){
    var g,j = true;
    var t=0;
    while(g){
        var w=Math.floor(Math.random()*100);
        var u=document.getElementById("pole");
        while (j){
            if (w==u){
                document.write("Congratulations!");
                document.write("Amount of your guesses:",t);
                j=False
            }
            else if(w>u){
                document.write("Your guess number is too small. Try again");
                t+=1;
            }
            else if(u>w){
                document.write("Your guess number is too big.Try again");
                t+=1;
            }
        }
    }
}
