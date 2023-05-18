/*const pole= document.getElementById("name");
pole.addEventListener("input",()=>{
    var v=pole.value;
    v1=v.trim();
    console.log(v1)
    if (v==""){
        alert("The pole is empty!");
    }
    if 


    }
);*/


function validateForm() {
    let x = document.forms["form"]["name"].value;
    if (x == "") {
        alert("This field must be filled out");
        return false;
    }
}
function validateForm2() {
    let y = document.forms["form"]["nazwisko"].value;
    if (y == "") {
        alert("This field must be filled out");
        return false;
    }
}
const z=document.getElementById("surn");
z.addEventListener("input",()=>{
    let k=z.value;
    let k1=k.length;
    console.log("It has "+k1+" signs");  
});
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
};
function bigFunc(){
    if((validateEmail()||validatePass()||validateDate())){
        return true;
    }
}
let curDate=new Date();
const curYear=curDate.getFullYear();
const curYearInt= parseInt(curYear);

function validateDate(){
    const data=document.forms["forms"]["bday"];
    let data_v=data.value;
    const dateList=split(" ");
    console.log(dateList);
    let dataRegex=/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if(!dataRegex.test(data_v)){
        alert("Nie poprawno wprowadzono dane dotyczące daty urodzenia");
    }

}


