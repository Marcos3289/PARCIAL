//Marcos Monz�n 000149995
Algoritmo Sumatoria_5_numeros
	
    // Definici�n de variables
   Definir Numero como entero// Variable para almacenar cada n�mero ingresado
    Suma Es Numerico // Variable para almacenar la suma total
    Contador Es Entero // Variable para controlar el ciclo
	
    // Se inicia la suma en 0
    Suma <- 0
	
    // Bucle para solicitar los 5 n�meros
    Contador <- 1 // Para empezar el contador en 1
    Mientras Contador <= 5 Hacer //Para detener el contador en 5
        Escribir "Introduce el n�mero ", Contador, ":"
        Leer Numero
        Suma <- Suma + Numero //suma cada uno de los numeros ingresados 1 a 1
        Contador <- Contador + 1
    FinMientras
	
    // Mostrar la suma total
    Escribir "La suma de los 5 n�meros es: ", Suma
FinAlgoritmo
