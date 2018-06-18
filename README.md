# Cifrado César
El cifrado César se utilizá para escribir mensajes de forma codificada, o "cifrada", de ahí se obtiene parte de su nombre, la segunda parte del nombre proviene del hecho de que el emperador Julio Cesar lo utilizába para enviar ordenes a sus generales en los campos de batalla. Su simpleza de utilización es lo que hace que sea la técnica más usada en el mundo para esconder mensajes.
En base a éste concepto la codificación se realiza de la siguiente forma:
Se establece un número al azar para decidir cuantas letras se moverá el texto.
Entonces teniendo un texto sin cifrar se le aplica el número previamente establecido y se cuentan hacia la derecha la cantidad asignada. Quedando cada letra del texto cambiada por la letra que le toca al moverse.
Como ejemplo se indica que:
- Alfabeto normal : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Decidimos un número que indica cuantos movimientos nos vamos a desplazar, elegiremos el número 4
- Quedando alfabeto codificiado como : E F G H I J K L M N O P Q R S T U V W X Y Z A B C D
- Puesto que en éste caso nos corremos 4 espacios hacia el lado A B C D E
                                                                ^ ^ ^ ^ ^
                                                                | | | | | 
                                                                0 1 2 3 4
- Por lo que el alfabeto codificado inicia con la letra E y continuamos escribiendo el alfabeto hasta incluir todas las letras.

Un ejemplo más concreto es al codificar una palabra:
- Una palabra si cifrar es H O L A
- Elegimos 4 como espacios a mover
- Vamos viendo letra por letra, partiendo por la H
- H I J K L 
- ^ ^ ^ ^ ^
- 0 1 2 3 4 Siendo la H replazada por una L
- Siguiente letra O
- O P Q R S
- ^ ^ ^ ^ ^
- 0 1 2 3 4 La O queda remplazada por una S
- Luego L
- L M N O P
- ^ ^ ^ ^ ^
- 0 1 2 3 4 La letra L pasa a ser P
- Y por último la A
- A B C D E
- ^ ^ ^ ^ ^
- 0 1 2 3 4 Quedano como E

- Esto lleva a convertir el mensajse desde un HOLA a => LSPE. Dependiendo de la cantidad de espacios que queremos movernos hacia el costado.

Y así es como tenemos nuestro mensaje cifrado gracias a éste tipo de codificación. No olvides que también podemos de codificar mensajes de la misma forma, solo debes saber cual fue el número de casillas que se movió para hacer la corrección.


  