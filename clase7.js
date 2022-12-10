/*Ventajas de la POO*/

/* const juan1 = {
    name: "Juan",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "fjuandsc",
        instagram: "fjuandc",
        facebook: undefined,
    },
    cursosAprovados:[
        "Curso definitivo de html y css",
        "curso de fisica"
    ],
    rutasDeAprendizaje: [
        {
            name: "Escuela de desarrolo web",
            cursos: [
                "Curso definitivo de html y css",
                "curso de fisica"
            ]
        },
        {
            name: "otra ruta",
            cursos: [
                "fisica",
                "matematica"
            ]
        }
    ]
}; */

class cursosAprobados{
    constructor(cursosAprobados = []){
        this.cursosAprobados = cursosAprobados;
    }
    
    agnadirCurso(curso){
        this.cursosAprobados.push(curso);
    }
    
    mostrarCursosAprobados(){
        console.log("Los cursos aprobados son:");
        for (const curso of this.cursosAprobados) {
            console.log(`\n${curso}`);
        }
    }
    
    obtenerCursos(){
        return this.cursosAprobados;
    }
}

const cursosJuan = new cursosAprobados(["matematica", "fisica", "algebra"]);

const cursorMiguel = new cursosAprobados(["lectura", "electrónica"]);

/* class rutas{
    constructor({
        name,
        cursos = []
    }){
        this.ruta[name] = cursos;
    }

    agnadirRuta(ruta, cursos=[]){
        this.ruta[ruta] = cursos;
    }

    verRutas(){
        console.log("Las rutas son:");
        for (const ruta in this.ruta) {
            console.log(`\n${ruta}: ${this.ruta[ruta]}`);
        }
    }

    obtenerRutas(){
        return this.ruta;
    }
} */


class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        cursosAprobados = [],
        rutasDeAprendizaje = []
    }){
        this.name = name ,
        this.email = email,
        this.username = username,
        this.socialMedia = {
        twitter,
        instagram,
        facebook
        };
        this.cursosAprobados = cursosAprobados,
        this.rutasDeAprendizaje = rutasDeAprendizaje

    }
}

const juan = new Student({
    name: "Juan",
    username: "juanddc",
    email: "email@email.com",
    twitter: "@juand",
    cursosAprobados: cursosJuan.obtenerCursos()
});

const miguel = new Student({
    name: "Miguel",
    username: "Miguel",
    email: "email@email.com",
    instagram: "@juand",
    cursosAprobados: cursorMiguel.obtenerCursos()
});