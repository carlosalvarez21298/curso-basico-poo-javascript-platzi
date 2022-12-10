/*Creando un objeto literal*/

const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
};

//Hacer que Natalia apruebe otro curso

natalia.cursosAprobados.push("Curso de Responsive Design");
natalia.name = "Nath";
natalia.age += 1;
natalia.aprobarCurso("Curso de CSS Grid");

/*Creando prototipo*/

function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    /* this.aprobarCurso = function(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    } */
}

/*Creando metodo al prorotipo Student por fuera*/
Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
    "Juanita",
    15,
    ["Curso de introduccion a los videojuegos",
    "Curso de creaion de personajes"]
);

juanita.aprobarCurso("Real Engine");