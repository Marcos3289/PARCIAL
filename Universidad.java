
/**
 *Marcos_Naasón_Monzón_Zacarias
 *Aqui se mostrara el codigo de la clase universidad en lenguaje 
 */
public class Universidad {
    // Atributos
    private String nombre;
    private String matricula;
    private int edad;
    private String carrera;
    private double promedio;

    // Constructor
    public Universidad(String nombre, String matricula, int edad, String carrera, double promedio) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.edad = edad;
        this.carrera = carrera;
        this.promedio = promedio;
    }

    // Métodos

    // Inscribirse en un curso (simulación, no está conectado a un objeto Curso)
    public void inscribirseCurso(String curso) {
        System.out.println(nombre + " se ha inscrito en el curso: " + curso);
    }

    // Obtener el promedio
    public double obtenerPromedio() {
        return promedio;
    }

    // Mostrar la información del estudiante
    public void mostrarInformacion() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Matrícula: " + matricula);
        System.out.println("Edad: " + edad);
        System.out.println("Carrera: " + carrera);
        System.out.println("Promedio: " + promedio);
    }

    // Métodos getter y setter si los necesitas

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getCarrera() {
        return carrera;
    }

    public void setCarrera(String carrera) {
        this.carrera = carrera;
    }

    public double getPromedio() {
        return promedio;
    }

    public void setPromedio(double promedio) {
        this.promedio = promedio;
    }
}


