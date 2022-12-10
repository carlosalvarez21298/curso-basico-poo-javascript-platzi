/*Clases en javascript*/

/* Las clases son prototipos por
dentro. Solo son azucar sintactico de los prototipos */

/* class Student{
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCursos(curso){
        this.cursosAprobados.push(curso);
    }
}

const miguel = new Student(
    "Miguel",
    28,
    ["Curso de matematicas",
    "Curso de fisica"]
);

miguel.aprobarCursos("Curso de quimica"); */

class Student{
    constructor({
        name,
        age,
        twitter,
        facebook,
        cursosAprobados = []
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.twitter = twitter,
        this.facebook = facebook
    }

    aprobarCursos(curso){
        this.cursosAprobados.push(curso);
    }
}


const miguel = new Student({
    name: "Miguel", 
    age: "18", 
    twitter: "@miguel",
    facebook: "miguel@facebook"
});