/*Task1*/
class Book{
    constructor(name,author,year){
        this.author=author;
        this.name=name;
        this.year=year;
    }
}
function Info(Book){
    const Zamek= new Book("Zamek","Kafka",1891)
    return console.log(Zamek.name+"-"+Zamek.author+"("+Zamek.year+")")
}
Info(Book)

/*Task 2*/
const student={
    name: "Marek",
    surname:"Lewandowski",
    nrAlb:"w89091",
    ocJ:2,
    ocD:3.5,
    ocT:5,
    Sred:function(){
         console.log((this.ocJ+this.ocD+this.ocT)/3);
    }
};
student.Sred()
/*Task 3 and 4*/
class Car{
    constructor(mark,model,year,color,speed){
        this.mark=mark;
        this.model=model;
        this.year=year;
        this.color=color;
        this.speed=speed;
    }
    Sp(){
        const c=30;
        var k=this.speed
        var f=k+c;
        var s=k-c;
        console.log("after icreasing: "+f+" after decreasing: "+s)
    };
    Inf(){
        console.log(this.mark+" "+this.model+"("+this.year+"), Kolor:"+this.color+",Speed:"+this.speed)
    };
    Age(){
        let date=new Date().getFullYear();
         console.log("The age of the car is: ", date-this.year)
     };

}
const honda=new Car("honda","CV",1998,"red",200);
honda.Sp();
honda.Inf();
honda.Age();
/*Task 5 and 6*/ 
class Rectangle{
    constructor(length,width){
        this.length=length;
        this.width=width;
    }
    Pole(){
        console.log("Pole: ",this.width*this.length)
    };
    Obwod(){
        console.log("Obwod: ",2*(this.width+this.length))
    };
    Check(){
        if(this.width==this.length){
            console.log("This rectangle is a square");
        }
        else{
            console.log("This rectangle isn't square")
        }
    }
}
rec1=new Rectangle(12,13);
rec2=new Rectangle(4,4)
rec1.Pole();
rec1.Obwod();
rec1.Check();
rec2.Pole();
rec2.Obwod();
rec2.Check();
function Creat(ln,wd,Rectangle){
   const inc=new Rectangle(ln,wd);
   document.write("Length is: ",inc.length,"  ");
   document.write("Width is: ",inc.width)
   inc.Pole();
   inc.Obwod();
   inc.Check();
}
var l=document.getElementById("pole");
var w=document.getElementById("pole1");
Creat(l,w,Rectangle);