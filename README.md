APP CREADA PARA LA PRUEBA FRONT DE ACCENTURE

-REPOSITORIO DE LA APP FRONTEND EN LA RAMA DEVELOP: https://github.com/andrews1998nm/AccentureFrontToDoApp/tree/develop

-PARA REALIZAR LA GENERACION DEL ARCHIVO APK SE REQUIERE INSTALAR CORDOVA.

-PARA INICIAR EL COMPONENTE DESDE UNA IDE SE DEBE ANTES EJECUTAR UN "NPM I" PARA INSTALAR TODAS LAS DEPENDENCIAS Y LUEGO EJECUTAR UN "INONIC SERVE" (PARA ESTO SE DEBE HABER ANTES INSTALADO EL IONIC CLI).

-UTILIZANDO LOS SERVICIOS FIREBASE CON REMOTE CONFIG EL SISTEMA PUEDE HABILITAR LA FUNCIONALIDAD DE UNA BARRA DE BUSQUEDA QUE PERMITE BUSCAR TAREAS POR COINCIDENCIAS EN EL TITULO Y DESCRIPCION. 
(Y AL DESAHABILITARLA VUELVE LA CONSULTA ACTUAL DE TAREAS POR CATEGORIAS SELECCIONADAS). LO CUAL SE EVIDENCIA MEJOR EN EL VIDEO COMPARTIDO.

-EL SISTEMA PERMITE CREAR TAREAS CON UN TITULO Y UNA DESCRIPCION ADICIONALMENTE SE CREAN EN ESTADO "NO COMPLETADAS", EL SISTEMA TAMBIEN PERMITE CREAR CATEGORIAS. Y ESTAS CATEGORIAS PUEDEN SER DIRECTAMENTE ASIGNADAS A UNA TAREA PARA
LUEGO FILTRAR LAS TAREAS POR LAS CATEGORIAS SELECCIONADAS. AL ELIMINAR UNA CATEGORIAS LAS TAREAS QUE TENGAN ASIGNADA LA CATEGORIAS BORRADA QUEDARA SIN CATEGORIA Y SE LE PODRA ASIGNAR UNA NUEVA.

-SE RESALTA QUE DEBIDO A QUE PARA GENERAR UN ARCHIVO .IPA SE REQUIERE DE AL MENOS UN DISPOSITIVO CON SISTEMA OPERATIVO IOS O MAC UNICAMENTE SE COMPARTE EL .APK.

-PARA REALIZAR LA INSTALACION UNICAMENTE SE DEBE PASAR EL ARCHIVO APK AL DISPOSITVO EN EL CUAL SE DESEA INSTALAR LA APP. (PREFERIBLEMENTE DISPOSITIVOS CON UNA VERSION DE ANDROID MAS RECIENTE).

--PREGUNTAS

1.¿Cuáles fueron los principales desafíos que enfrentaste al implementar
las nuevas funcionalidades?
R/Tuve que leer documentacion para implementar la funcionalidad de REMOTE CONFIG y realizar la configuracion inicial para poder configurar la herramienta y que el cambio de la variable limitara o desbloqueara la funcionalidades.
Ya habia trabajado con Firebase, pero no no habia utilizado la herramienta REMOTE CONFIG.
Algunas de las funcionalidades de Ionic no funcionaban correctamente por lo que tuve que adaptarme al framework.

2.¿Qué técnicas de optimización de rendimiento aplicaste y por qué?
R/ Jugando con los datos de las variables para evitar hacer llamados innecesarios a los servicios y que pudieran ralentizar la funcionalidad del componente. los datos al ser locales no requieren de un llamado constante hacia los servicios o una subscripcion, pues practicamente son individuales para cada dispotivo, como una app offline.

3.¿Cómo aseguraste la calidad y mantenibilidad del código?
Se implementaron practicas SOLID en la medida de lo posible tratando de respetar cada servicio y componente tratando de crear un codigo que perdure con el tiempo y que no requiera de cambios sino de adiciones al codigo ya desarrollado.




