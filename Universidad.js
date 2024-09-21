// Definición de la clase Universidad
class Universidad {
    constructor(nombre, ubicacion, fundacion) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.fundacion = fundacion;
        this.listaEstudiantes = [];
        this.listaProfesores = [];
        this.listaCursos = [];
    }

    // Métodos para agregar objetos
    agregarEstudiante(estudiante) {
        this.listaEstudiantes.push(estudiante);
        console.log(`Estudiante agregado: ${estudiante.nombre}`);
    }

    agregarProfesor(profesor) {
        this.listaProfesores.push(profesor);
        console.log(`Profesor agregado: ${profesor.nombre}`);
    }

    agregarCurso(curso) {
        this.listaCursos.push(curso);
        console.log(`Curso agregado: ${curso.nombre}`);
    }

    // Métodos para mostrar información
    mostrarEstudiantes() {
        console.log("Lista de estudiantes:");
        this.listaEstudiantes.forEach(estudiante => estudiante.mostrarInformacion());
    }

    mostrarProfesores() {
        console.log("Lista de profesores:");
        this.listaProfesores.forEach(profesor => profesor.mostrarInformacion());
    }

    mostrarCursos() {
        console.log("Lista de cursos:");
        this.listaCursos.forEach(curso => curso.mostrarInformacion());
    }
}

// Definición del Objeto Estudiante
class Estudiante {
    constructor(nombre, matricula, edad, carrera, promedio) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.edad = edad;
        this.carrera = carrera;
        this.promedio = promedio;
    }

    inscribirseCurso(curso) {
        console.log(`${this.nombre} se ha inscrito en el curso: ${curso}`);
    }

    obtenerPromedio() {
        return this.promedio;
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Carrera: ${this.carrera}`);
        console.log(`Promedio: ${this.promedio}`);
    }
}

// Definición del Objeto Profesor
class Profesor {
    constructor(nombre, idProfesor, departamento, especialidad) {
        this.nombre = nombre;
        this.idProfesor = idProfesor;
        this.departamento = departamento;
        this.especialidad = especialidad;
        this.listaCursos = [];
    }

    asignarCurso(curso) {
        this.listaCursos.push(curso);
        console.log(`Curso asignado: ${curso.nombre}`);
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`ID Profesor: ${this.idProfesor}`);
        console.log(`Departamento: ${this.departamento}`);
        console.log(`Especialidad: ${this.especialidad}`);
    }

    mostrarCursosAsignados() {
        console.log("Cursos asignados:");
        this.listaCursos.forEach(curso => console.log(curso.nombre));
    }
}

// Definición del objeto Curso
class Curso {
    constructor(codigo, nombre, creditos, profesor) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.creditos = creditos;
        this.profesor = profesor;
        this.listaEstudiantes = [];
    }

    inscribirEstudiante(estudiante) {
        this.listaEstudiantes.push(estudiante);
        console.log(`Estudiante inscrito: ${estudiante.nombre} en el curso: ${this.nombre}`);
    }

    mostrarInformacion() {
        console.log(`Código: ${this.codigo}`);
        console.log(`Nombre del curso: ${this.nombre}`);
        console.log(`Créditos: ${this.creditos}`);
        console.log(`Profesor: ${this.profesor.nombre}`);
    }

    listarEstudiantes() {
        console.log("Estudiantes inscritos:");
        this.listaEstudiantes.forEach(estudiante => console.log(estudiante.nombre));
    }
}

// Ejemplo de uso:

// Crear la universidad
const universidad = new Universidad("Universidad Nacional", "Ciudad X, Pais Y", 1950);

// Crear algunos estudiantes
const estudiante1 = new Estudiante("Juan Perez", "12345", 20, "Ingenieria", 8.5);
const estudiante2 = new Estudiante("Ana Gomez", "67890", 22, "Medicina", 9.2);

// Crear un profesor
const profesor1 = new Profesor("Dr. Luis Fernandez", "P001", "Ingenieria", "Mateaticas");

// Crear un curso
const curso1 = new Curso("MAT101", "Matematicas Basicas", 4, profesor1);

// Agregar estudiantes, profesor y curso a la universidad
universidad.agregarEstudiante(estudiante1);
universidad.agregarEstudiante(estudiante2);
universidad.agregarProfesor(profesor1);
universidad.agregarCurso(curso1);

// Inscribir estudiantes en el curso
curso1.inscribirEstudiante(estudiante1);
curso1.inscribirEstudiante(estudiante2);

// Mostrar la información
universidad.mostrarEstudiantes();
universidad.mostrarProfesores();
universidad.mostrarCursos();
curso1.listarEstudiantes();
