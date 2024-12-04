APP CREADA PARA LA PRUEBA FRONT DE ACCENTURE

-REPOSITORIO DE LA APP FRONTEND EN LA RAMA DEVELOP: https://github.com/andrews1998nm/AccentureFrontToDoApp/tree/develop

-PARA REALIZAR LA GENERACION DEL ARCHIVO APK SE REQUIERE INSTALAR CORDOVA.

-PARA INICIAR EL COMPONENTE DESDE UNA IDE SE DEBE ANTES EJECUTAR UN "NPM I" PARA INSTALAR TODAS LAS DEPENDENCIAS Y LUEGO EJECUTAR UN "INONIC SERVE" (PARA ESTO SE DEBE HABER ANTES INSTALADO EL IONIC CLI).

-ES PROBABLE QUE PARA QUE EL COMPONENTE PERMITA EJECUTAR EN EL 

-UTILIZANDO LOS SERVICIOS FIREBASE CON REMOTE CONFIG EL SISTEMA PUEDE HABILITAR LA FUNCIONALIDAD DE UNA BARRA DE BUSQUEDA QUE PERMITE BUSCAR TAREAS POR COINCIDENCIAS EN EL TITULO Y DESCRIPCION. 
(Y AL DESAHABILITARLA VUELVE LA CONSULTA ACTUAL DE TAREAS POR CATEGORIAS SELECCIONADAS). LO CUAL SE EVIDENCIA MEJOR EN EL VIDEO COMPARTIDO.

-EL SISTEMA PERMITE CREAR TAREAS CON UN TITULO Y UNA DESCRIPCION ADICIONALMENTE SE CREAN EN ESTADO "NO COMPLETADAS", EL SISTEMA TAMBIEN PERMITE CREAR CATEGORIAS. Y ESTAS CATEGORIAS PUEDEN SER DIRECTAMENTE ASIGNADAS A UNA TAREA PARA
LUEGO FILTRAR LAS TAREAS POR LAS CATEGORIAS SELECCIONADAS. AL ELIMINAR UNA CATEGORIAS LAS TAREAS QUE TENGAN ASIGNADA LA CATEGORIAS BORRADA QUEDARA SIN CATEGORIA Y SE LE PODRA ASIGNAR UNA NUEVA.

-SE RESALTA QUE DEBIDO A QUE PARA GENERAR UN ARCHIVO .IPA SE REQUIERE DE AL MENOS UN DISPOSITIVO CON SISTEMA OPERATIVO IOS O MAC UNICAMENTE SE COMPARTE EL .APK.

-PARA REALIZAR LA INSTALACION UNICAMENTE SE DEBE PASAR EL ARCHIVO APK AL DISPOSITVO EN EL CUAL SE DESEA INSTALAR LA APP. (PREFERIBLEMENTE DISPOSITIVOS CON UNA VERSION DE ANDROID MAS RECIENTE).

--PREGUNTAS

1.¿Cuáles fueron los principales desafíos que enfrentaste al implementar
las nuevas funcionalidades?
R/Una de las principales dificultades fue la integración de Remote Config de Firebase. Aunque ya había trabajado con Firebase, esta herramienta era nueva para mí. Tuve que profundizar en su documentación para entender cómo funciona y cómo se usan en tiempo real. Es importante entender cómo funciona la app para cambiar o desactivar características específicas. Además, algunas características de Ionic tenían problemas y me obligaron a adaptar ciertas soluciones al framework. Este proceso me ayudó a mejorar mi habilidad para investigar y resolver problemas.

2.¿Qué técnicas de optimización de rendimiento aplicaste y por qué?
R/Optimizé el rendimiento evitando llamadas innecesarias a los servicios. Para conseguirlo, utilicé técnicas de gestión de datos locales y almacenamiento en caché. Al tratarse de datos que no necesitan actualizaciones frecuentes, prioricé almacenar y manipular las variables localmente, reduciendo la dependencia de subscripciones o solicitudes a servicios externos. Esto mejoró la velocidad de carga de los componentes y ahorró más recursos para el usuario.

3.¿Cómo aseguraste la calidad y mantenibilidad del código?
Para garantizar la calidad del código, seguí principios de diseño como SOLID, estructurando el proyecto en servicios y componentes altamente cohesionados y de responsabilidad única. Esto facilitó que las funcionalidades fueran modulares y reutilizables, reduciendo la necesidad de realizar cambios en el código existente y permitiendo adiciones futuras de forma más agil. Me aseguré de documentar el código y utilizar convenciones claras, lo que contribuye a que otros desarrolladores puedan comprender y trabajar fácilmente en el proyecto a largo plazo.




