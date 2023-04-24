/*Task 1*/
function silnia(t){
    if (t==1){
        return 1;
    }
    else{
        return t*silnia(t-1);
    }
}
console.log(silnia(5))
/*Task 2*/
const buttons = document.querySelectorAll("button");
let actBt;
for (var i=0;i<buttons.length;i++){
    const btn=buttons[i];
    btn.addEventListener("click", () =>{
        btn.classList.add("selected");
        for(var j=0;j<buttons.length;j++){
            const btn1 =buttons[j];
            btn1.classList.remove("selected");
        }
        btn.classList.add("selected");
    })
}
/*Task 3*/
const but1=document.getElementById("but1");
but1.addEventListener("click",() =>{
h1=document.querySelector("h1");
h1.classList.add("changes");
});

/*Task 4*/
const b=document.getElementById("b");
const inpt=document.getElementById("t");
b.addEventListener("click",() =>{
    const val=inpt.value;
    const ul=document.querySelector("ul");
    const li1=document.createElement("li");
    li1.textContent =val;
    ul.appendChild(li1);
});
/*Task 5*/
const b1=document.getElementById("b1");
const pole1=document.getElementById("t1");
const pole2=document.getElementById("t2");

b1.addEventListener("click",() => {
    const value1=pole1.value;
    const value2=pole2.value;
    const table=document.querySelector("table");
    var newRow=table.insertRow()
    const newCell1=newRow.insertCell();
    const newCell2=newRow.insertCell();
    newCell1.textContent=value1;
    newCell2.textContent=value2;



});




