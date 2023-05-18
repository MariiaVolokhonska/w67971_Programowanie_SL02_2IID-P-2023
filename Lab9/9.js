const btns=document.querySelectorAll("button");
for(var i=0;i<btns.length;i++){
    const btn=btns[i];
    btn.addEventListener("click",() =>{
        btn.classList.add("color");
        for(var j=0;j<btns.length;j++){
            const btn1=btns[j];
            btn1.classList.remove("color");
        }
        btn.classList.add("color");
    });

};
function validateName(){
    const n=document.forms["form"]["imie"];
    const n_v=n.value;
    if(n_v==''){
        alert("Field of the name should be filled");
    }
};
function validateSurname(){
    const s=document.forms["form"]["surname"];
    const s_v=s.value;
    if(s_v==''){
        alert("Field of the surname should be filled");
    }
};
function validateEmail(){
    const e=document.forms["form"]["email"];
    var e1=e.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e1)) {
        alert("Proszę podać poprawny adres e-mail.");
 }
};
function validatePass(){
    const pass=document.forms["form"]["pas"];
    var pass_val=pass.value;
    const passRegex=/^[a-zA-Z0-9!@#$%^&*]{8,32}$/;
    if(!passRegex.test(pass_val)){
        alert("Proszę podać silniejsze hasło");
    } 
    return pass_val;
};

function drugieHaslo(){
    const p=validatePass();
    const pass2=document.forms["form"]["pas2"];
    const pass2_v=pass2.value;
    
    if(p!=pass2_v){
        alert("Hasło nie jest prawidłowe!");
    }
};
function bigFunc(){
    if(validateEmail()||validatePass()){
        return true;
    }
};
class Samochod {
    constructor(marka,model,rok,kolor,speed){
        this.marka=marka;
        this.model=model;
        this.rok=rok;
        this.kolor=kolor;
        this.speed=speed;
    }
    Predkosc(){
        const t=this.speed
        const k=12;
        const t1=t-k;
        const t2=t+k;

        console.log("po zmnieszeniu: "+t1+" po zwiększeniu: "+t2);
    };
    Info(){
        console.log(this.marka+" "+this.model+"("+this.rok+"), Kolor: "+this.kolor+", Prędkość: "+this.speed);
    }
}
const mazda=new Samochod("Mazda","X15",2017,"czarny",190);
mazda.Predkosc();
mazda.Info();
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


