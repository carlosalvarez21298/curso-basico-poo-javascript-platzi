/*objetos literales*/

const objeto = {
    prop1: "value",
    prop2: "value",
    prop3: "value"
};

/*Los objetos literales no son iguales a las instancias de una clase*/
/*Pero los objetos literales y los objetos que creemos son instancias
del prototipo Object con el que cuenta javascript*/

/*Javascript es un lenguaje orientado a objetos basados en prototipos*/

/*Prototipo*/

function Student(){
    this.name = "Nombre";
    this.age = 18;
    this.point = 250;
}

const juanita = new Student();

/*
Javascript cuenta con varias prototipos como Object Array o String...
Cuando se crean objectos o arrays nuestros ellos cuenta con su
correspondiente prototipo del cual tienen acceso a todos lo metodos
y propiedades con los que cuenten estos prototipos de javascript
*/

/*El prototipo Object es la madre de todos los protoripos en
javascript */