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
/*Task 3*/
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
        f=this.speed+c;
        s=this.speed-c;
        console.log("after icreasing: "+f+" after decreasing: "+s)
    }
}
const honda=new Car("honda","something",1998,"red",200)
honda.Sp()