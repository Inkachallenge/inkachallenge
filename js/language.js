// Objetos con los textos en los dos idiomas
const translations = {
  es: {
    "background":"images/index-bg-es.png",
    "background-mobile":"images/index-bg-m-es.png",
    "map":"Ubicación:",
    // Navbar
    "nav-about": "Historia",
    "nav-rules": "Reglamentos",
    "nav-accred": "Acreditaciones",
    "nav-invit": "Invitaciones",
    "nav-register": "Registro",
    "nav-contact": "Contáctanos",
    "nav-about-m": "Historia",
    "nav-rules-m": "Reglamentos",
    "nav-accred-m": "Acreditaciones",
    "nav-invit-m": "Invitaciones",
    "nav-register-m": "Registro",
    "nav-contact-m": "Contáctanos",
    //About.html
    "logo-ic":"images/icons/icon-ic4-es.png",
    "first-title": "INKACHALLENGE IV Edición CONEIMERA 2025",
    "text1": "<b>INKACHALLENGE</b> es una competencia de robótica desarrollada en la ciudad de Trujillo - Perú, organizada por el club de robótica <b>Robotronics UNT</b>. Desde su primera edición en 2018, reúne a universitarios, makers, profesionales y apasionados por la robótica, provenientes de universidades y equipos independientes de todo el país. Todos ellos compiten en diversas categorías de robótica móvil que desafían sus habilidades técnicas, su estrategia y su capacidad de trabajo en equipo, convirtiendo a este evento en una de las competencias más importantes del Perú.", 
    "text2": "Esta edición es un evento oficial de la Liga Nacional de Robótica de Competencia 2025 (Perú), y se desarrollará en colaboración con el Congreso Nacional y Exposición Internacional de Ingeniería Mecánica, Mecatrónica, Eléctrica, Electrónica y Ramas Afines (XXXI CONEIMERA), con el apoyo y respaldo de Let's Go Robot.",
    "venue": `
      <div id="venue" class="flex items-center gap-2">
        <img src="images/icons/location.png" alt="Ubicación" class="w-6 h-6">
        <span>
          Lugar: 
          <a href="https://maps.google.com/?q=Universidad+Nacional+de+Trujillo" target="_blank" class="text-yellow-400 hover:underline hover:text-orange-400 transition">
            Universidad Nacional de Trujillo (UNT), Perú
          </a>
        </span>
      </div>
    `,
    "date": "Fecha: 6, 7 y 8 de agosto de 2025",
    "second-title": "Ediciones Previas",
    "zero-ic": "SITEM 2017",
    "zero-desc": "En 2017, poco después de su éxito en Rumania, <b>Robotronics UNT</b> tomó la iniciativa de organizar un evento de robótica de alto nivel en Perú. La versión piloto de este concurso se desarrolló en la <b>Semana de Integración Tecnológica Mecatrónica (SITEM)</b>, organizada anualmente por la escuela de Ingeniería Mecatrónica de la Universidad Nacional de Trujillo. Este concurso contó con diversos equipos participantes y con esta experiencia de organizadores, se dio pie a la creación de un evento oficial, para el siguiente año.",
    "first-ic": "InkaChallenge I",
    "first-desc": "Con esta primera edición oficial, el evento cobra vida bajo el nombre de InkaChallenge, y con la participación de diversos equipos nacionales, el evento resultó todo un éxito, marcando el inicio de una tradición para el club. Por primera vez en Perú, se otorgó acreditaciones a eventos de talla internacional como lo son Robochallenge Rumania y Robot Games Zero Latitud, en Ecuador.",
    "second-ic": "InkaChallenge II",
    "second-desc": "La segunda edición logró más de 120 robots en competencia, provenientes de 12 equipos de distintas ciudades de Perú, tales como Trujillo, Lima, Arequipa, Cajamarca, Piura e Ica. Esta edición consolidó a InkaChallenge como un evento de referencia en la robótica del país. A los ganadores de las categorías respectivas se les otorgó acreditaciones para participar en Robochallenge Rumania y, por primera vez, para Robotchallenge China.",
    "third-ic": "InkaChallenge III",
    "third-desc": "La tercera edición de Inkachallenge contó con 160 robots, provenientes de diversos equipos, y esta edición destacó por su amplia participación y la incorporación de nuevas categorías, como es el caso de <b> Seguidor de línea Enhanced</b>. A los ganadores de las categorías respectivas se les otorgó acreditaciones para participar en Robotchallenge China, Robochallenge Rumania y Robot Games Zero Latitud.",
    //Reglamentos
    "btn-velocista": "Seguidor de Línea Velocista",
    "btn-enhanced": "Seguidor de Línea Enhanced",
    "btn-turbo": "Seguidor de Línea Turbo",
    "btn-robotracer": "Seguidor de Línea Nat-Car",
    "btn-miniauto": "Minisumo Autónomo",
    "btn-minirc": "Minisumo Bluetooth/RC",
    "btn-microsumo": "Microsumo Autónomo",
    "btn-micromouse": "Robot Micromouse",
    "btn-soccer": "Robot Soccer",
    "btn-combate": "Combate de Robots",
    "btn-kungfu": "Robot Kung-Fu",
    "btn-walking": "Robot Walking-Race",

    "content-velocista":`
  <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
    <!-- Contenedor principal: Imagen + Descripción en fila (PC) -->
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <!-- Imagen (izquierda) -->
      <div class="md:w-[320px] flex-shrink-0">
        <img 
          src="images/linefollower.png" 
          alt="Seguidor de línea velocista" 
          class="rounded-xl shadow-lg w-full h-auto"
        >
      </div>

      <!-- Descripción (derecha en PC) -->
      <div class="flex-1">
        <p class="text-justify mb-4 text-base md:text-lg">
          Los seguidores de línea velocistas están diseñados para recorrer
              el circuito a máxima velocidad, siguiendo con precisión una línea negra de <b>19 mm de ancho</b> 
              sobre un fondo blanco. Estos robots están optimizados para realizar giros rápidos y maniobras precisas, 
              lo que les permite completar el recorrido en el menor tiempo posible.
        </p>
      </div>
    </div>

    <!-- Bloque adicional (SIEMPRE debajo de la imagen, mismo ancho que ella en PC) -->
    <div class="mt-6 w-full  md:ml-0">
      <!-- Niveles de participación -->
      <div class="mb-4">
        <p class="text-base md:text-lg font-semibold">📶 Niveles de participación:</p>
        <ul class="list-disc pl-6 text-base md:text-lg space-y-1">
          <li>Amateur</li>
          <li>Senior</li>
          <li>Master</li>
        </ul>
      </div>

      <!-- Texto "Conoce más" -->
      <p class="text-base md:text-lg mb-2">
        Conoce más en el reglamento Oficial IV InkaChallege Edición Coneimera 
        para la categoría <b>Seguidor de Línea velocista</b>:
      </p>
    </div>

    <div class="mt-6">
    <!-- Versión PC: PDF embebido (solo visible en desktop) -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Seguidor de Linea Velocista - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Versión Móvil: Botón de descarga (solo visible en móvil) -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1e1PpEROTTyPnwfikiDZZDzzhEsOjxLtA/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <!-- Icono de PDF + Texto -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
      Ver Reglamento Completo (PDF)
      </a>
    </div>
  </div>
  </div>`,
    "content-enhanced":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Contenedor principal: Imagen + Descripción -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Imagen izquierda -->
    <div class="md:w-[320px] flex-shrink-0">
      <img 
        src="images/enhanced.jpg" 
        alt="Seguidor de línea enhanced" 
        class="rounded-xl shadow-lg w-full h-auto"
      >
    </div>

    <!-- Descripción derecha -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        Esta categoría se basa en el seguidor de línea velocista, pero incorpora obstáculos físicos que aumentan significativamente la complejidad.
        Los robots deben recorrer el circuito a alta velocidad mientras enfrentan <b>un balancín</b>, 
        <b>un bloque</b> y <b>una discontinuidad</b> en la pista (no necesariamente en ese orden).
      </p>
    </div>
  </div>

  <!-- Sección de obstáculos -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg font-semibold mb-3">⚠️ Obstáculos:</p>
    
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Lista de obstáculos -->
      <ul class="list-disc pl-6 text-base md:text-lg space-y-2 flex-1">
        <li><b>Balancín:</b> Se coloca un balancín de al menos 50 cm, un eje montado a un máximo de 12 cm sobre el suelo. La línea negra continúa en el balancín.</li>
        <li><b>Bloque:</b> El robot debe rodear el bloque de aprox. 25 cm x 12 cm x 6.5 cm</li>
        <li><b>Discontinuidad:</b> Se presenta sobre el recorrido, con una longitud de 10 cm.</li>
      </ul>

      <!-- Imagen del balancín -->
      <div class="lg:w-[300px] flex-shrink-0 mt-4 lg:mt-0">
        <img 
          src="images/seesaw.png" 
          alt="Balancín" 
          class="rounded-xl shadow-lg w-full h-auto"
        >
        <p class="text-sm text-gray-600 italic mt-2 text-center">Representación del balancín</p>
      </div>
    </div>
  </div>

  <!-- Sección del reglamento -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg mb-4">
      Reglamento Oficial IV InkaChallenge Edición Coneimera para la categoría 
      <b>Seguidor de Línea Enhanced</b>:
    </p>
  </div>

  <!-- Visualizador PDF -->
  <div class="mt-4">
    <!-- Versión PC: PDF embebido -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Seguidor de Linea Enhanced - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Versión Móvil: Botón de descarga -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1MPlvaQjowgfLdPX3ioTmQIFSYa6ASDrZ/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        Ver Reglamento Completo (PDF)
      </a>
    </div>
  </div>
</div>`,
    "content-turbo":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Contenedor principal: Imagen + Descripción -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Imagen izquierda -->
    <div class="md:w-[250px] flex-shrink-0">
      <img 
        src="images/turbo.jpg" 
        alt="Seguidor de línea turbo" 
        class="rounded-xl shadow-lg w-full h-auto"
      >
    </div>

    <!-- Descripción derecha -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        <b>Seguidor de Línea Turbo</b> es la nueva categoría del <b>Inkachallenge IV</b>, presentada por primera
           vez en Perú. Se trata de un robot móvil autónomo, diseñado para seguir un recorrido continuo trazado por
            una línea negra sin intersecciones, en el menor tiempo posible. <br><br>
          Esta variante de los seguidores de línea introduce como principal desafío un <b>bucle vertical de 1.50 metros
             de diámetro</b>, donde la línea del circuito continúa a lo largo de toda la estructura, exigiendo precisión
              y un alto nivel de control en el desplazamiento del robot.
      </p>
    </div>
  </div>

  <!-- Sección de obstáculos -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg font-semibold mb-3">Datos adicionales:</p>
    
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Lista de obstáculos -->
      <ul class="list-disc pl-6 text-base md:text-lg space-y-2 flex-1">
        <li>El bucle se encuentra en una de las rectas del recorrido.</li>
          <li>La línea del circuito es de 19mm de ancho al igual que los demás seguidores.</li>
          <li>El bucle tiene un ancho máximo total de 40cm.</li>
      </ul>

      <!-- Imagen del loop -->
      <div class="lg:w-[270px] flex-shrink-0 mt-4 lg:mt-0">
        <img 
          src="images/loop.png" 
          alt="Bucle" 
          class="rounded-xl shadow-lg w-full h-auto"
        >
        <p class="text-sm text-gray-600 italic mt-2 text-center">Representación del bucle</p>
      </div>
    </div>
  </div>

  <!-- Sección del reglamento -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg mb-4">
      Reglamento Oficial IV InkaChallenge Edición Coneimera para la categoría 
      <b>Seguidor de Línea Turbo</b>:
    </p>
  </div>

  <!-- Visualizador PDF -->
  <div class="mt-4">
    <!-- Versión PC: PDF embebido -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Seguidor de Linea Turbo - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Versión Móvil: Botón de descarga -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1qgT4fIvqkQt5aZZ-hYymEunJ6QX629nx/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        Ver Reglamento Completo (PDF)
      </a>
    </div>
  </div>
</div>`,
    "content-robotracer":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Contenedor principal: Imagen + Descripción -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Imagen izquierda -->
    <div class="md:w-[250px] flex-shrink-0">
      <img 
        src="images/robotracer.png" 
        alt="Seguidor de línea Nat-Car/Robotracer" 
        class="rounded-xl shadow-lg w-full h-auto"
      >
    </div>

    <!-- Descripción derecha -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        Seguidor de Línea Nat-car, también conocido como RobotRacer, es una categoría de 
          competencia robótica originaria de Japón.<br>
           Los robots en esta categoría deben recorrer el circuito en el menor tiempo posible, el cual incluye curvaturas
            e intersecciones (también llamados cruces).<br> En cada curvatura se encuentran 2 marcadores, uno al incio y otro
             al final, cada uno a 4cm del borde de la línea.
      </p>
    </div>
  </div>

  <!-- info -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg font-semibold mb-3">Datos adicionales:</p>
    
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Lista de obstáculos -->
      <ul class="list-disc pl-6 text-base md:text-lg space-y-2 flex-1">
        <li>Las curvaturas incluyen marcadores como los que se muestran en la imagen.</li>
          <li>El robot debe incluir un buzzer.</li>
          <li>El robot debe hacer sonar el buzzer al inicio , al final y en cada curva al reconocer los marcadores, 
            pero no cuando está en un cruce.</li>
            <li>Las zona de incio y meta se encuetra delimintada por dos marcadores a una separación de 100cm.</li>
      </ul>

      <!-- Imagen -->
      <div class="lg:w-[270px] flex-shrink-0 mt-4 lg:mt-0">
        <img 
          src="images/robotracer-rules-es.png" 
          alt="Representación de los marcadores en el recorrido." 
          class="rounded-xl shadow-lg w-full h-auto"
        >
        <p class="text-sm text-gray-600 italic mt-2 text-center">Representación de los marcadores en el recorrido.</p>
      </div>
    </div>
  </div>

  <!-- Sección del reglamento -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg mb-4">
      Reglamento Oficial IV InkaChallenge Edición Coneimera para la categoría 
      <b>Seguidor de Línea Nat-car</b>:
    </p>
  </div>

  <!-- Visualizador PDF -->
  <div class="mt-4">
    <!-- Versión PC: PDF embebido -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Seguidor de Linea Natcar - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Versión Móvil: Botón de descarga -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/18JKykogNKvv6U2VqzXJMlS_nc1L2yI4M/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        Ver Reglamento Completo (PDF)
      </a>
    </div>
  </div>
</div>`,
    "content-miniauto":`
   <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
    <!-- Contenedor principal: Imagen + Descripción en fila (PC) -->
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <!-- Imagen (izquierda) -->
      <div class="md:w-[320px] flex-shrink-0">
        <img 
          src="images/minisumo.jpg" 
          alt="Minisumo" 
          class="rounded-xl shadow-lg w-full h-auto"
        >
      </div>

      <!-- Descripción (derecha en PC) -->
      <div class="flex-1">
        <p class="text-justify mb-4 text-base md:text-lg">
          Minisumo autónomo es una categoría originada en Japón, 
          inspirada en el sumo tradicional. Estos robots funcionan sin control remoto, utilizando sensores
          para detectar a su oponente y estrategias de evasión para no salir del dojo. Su principal objetivo:
          empujar al rival fuera del dojo de forma completamente autónoma, en partidas de 3 asaltos.<br><br>
          Estos robots como máximo pueden pesar 500g, y deben poder caber en un cuadrado de 10cm de lado.
        </p>
      </div>
    </div>

    <!-- Bloque adicional (SIEMPRE debajo de la imagen, mismo ancho que ella en PC) -->
    <div class="mt-6 w-full md:ml-0">
      <!-- Niveles de participación -->
      <div class="mb-4">
        <p class="text-base md:text-lg font-semibold">📶 Niveles de participación:</p>
        <ul class="list-disc pl-6 text-base md:text-lg space-y-1">
          <li>Amateur</li>
          <li>Senior</li>
          <li>Master</li>
        </ul>
      </div>

      <!-- Texto "Conoce más" -->
      <p class="text-base md:text-lg mb-2">
        Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría <b>Minisumo Autónomo</b>:
      </p>
    </div>

    <div class="mt-6">
    <!-- Versión PC: PDF embebido (solo visible en desktop) -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/MiniSumo Autónomo - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Versión Móvil: Botón de descarga (solo visible en móvil) -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/114B3-KH3x0g6M4fRs4lGtRLURVvp3cxV/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <!-- Icono de PDF + Texto -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
      Ver Reglamento Completo (PDF)
      </a>
    </div>
  </div>
</div>`,
    "content-minirc":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
    <!-- Contenedor principal: Imagen + Descripción en fila (PC) -->
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <!-- Imagen (izquierda) -->
      <div class="md:w-[320px] flex-shrink-0">
        <img 
          src="images/minirc.jpg" 
          alt="Minisumo RC" 
          class="rounded-xl shadow-lg w-full h-auto"
        >
      </div>

      <!-- Descripción (derecha en PC) -->
      <div class="flex-1">
        <p class="text-justify mb-4 text-base md:text-lg">
          El Minisumo RC es una categoría de competencia en la que los robots, 
          controlados de manera inalámbrica, deben detectar y empujar a su oponente fuera del dojo. A diferencia 
          del Minisumo autónomo, el robot es operado por un piloto, quien debe usar su destreza para controlar 
          el movimiento en tiempo real, y no puede hacer uso de sensores ni rutinas pre-programadas, asegurando
          que la habilidad del piloto sea el factor decisivo en la pelea.<br><br>
          Estos robots como máximo pueden pesar 500g, y deben poder caber en un cuadrado de 10cm de lado.
        </p>
      </div>
    </div>

    <!-- Bloque adicional (SIEMPRE debajo de la imagen, mismo ancho que ella en PC) -->
    <div class="mt-6 w-full md:ml-0">
      <!-- Niveles de participación -->
      <div class="mb-4">
        <p class="text-base md:text-lg font-semibold">📶 Niveles de participación:</p>
        <ul class="list-disc pl-6 text-base md:text-lg space-y-1">
          <li>Amateur</li>
          <li>Senior</li>
          <li>Master</li>
        </ul>
      </div>

      <!-- Texto "Conoce más" -->
      <p class="text-base md:text-lg mb-2">
        Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría <b>Minisumo Bluetooth/RC</b>:
      </p>
    </div>

    <div class="mt-6">
    <!-- Versión PC: PDF embebido (solo visible en desktop) -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/MiniSumo Bluetooth-RC - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Versión Móvil: Botón de descarga (solo visible en móvil) -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1W6FrRos0_F1o8HY64Uc8HvhpuzT79x20/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <!-- Icono de PDF + Texto -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
      Ver Reglamento Completo (PDF)
      </a>
    </div>
  </div>
</div>
    `,
    "content-microsumo":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
    <!-- Contenedor principal: Imagen + Descripción en fila (PC) -->
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <!-- Imagen (izquierda) -->
      <div class="md:w-[320px] flex-shrink-0">
        <img 
          src="images/microsumo.png" 
          alt="Microsumo" 
          class="rounded-xl shadow-lg w-full h-auto"
        >
      </div>

      <!-- Descripción (derecha en PC) -->
      <div class="flex-1">
        <p class="text-justify mb-4 text-base md:text-lg">
          Esta es una categoría de competencia en la que 
          robots pequeños deben detectar y empujar a su oponente fuera del dojo 
          de manera totalmente autónoma. 
          Estos robots utilizan sensores para localizar al rival, y su diseño compacto les permite 
          realizar movimientos rápidos y precisos.<br><br>
          Pueden tener un peso máximo de 100g y pueden caber en un cuadrado de 5cm de lado.
        </p>
      </div>
    </div>

    <!-- Texto del reglamento (sin sección de niveles) -->
    <div class="mt-6 w-full md:ml-0">
      <p class="text-base md:text-lg mb-2">
        Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría <b>Microsumo Autónomo</b>:
      </p>
    </div>

    <div class="mt-6">
      <!-- Versión PC: PDF embebido -->
      <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
        <embed 
          src="regulations/MicroSumo Autónomo - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
          width="100%" 
          height="500"
          type="application/pdf"
          class="border rounded-lg shadow-sm"
        >
      </div>

      <!-- Versión Móvil: Botón de descarga -->
      <div class="md:hidden text-center">
        <a 
          href="https://drive.google.com/file/d/1zW3mVrlgV96xooQi6quGt9v49dRaoS4E/view?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Ver Reglamento Completo (PDF)
        </a>
      </div>
    </div>
</div>
    `,
    "content-micromouse":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
    <!-- Contenedor principal: Imagen + Descripción en fila (PC) -->
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <!-- Imagen (izquierda) -->
      <div class="md:w-[320px] flex-shrink-0">
        <img 
          src="images/micromouse.jpg" 
          alt="Micromouse" 
          class="rounded-xl shadow-lg w-full h-auto"
        >
      </div>

      <!-- Descripción (derecha en PC) -->
      <div class="flex-1">
        <p class="text-justify mb-4 text-base md:text-lg">
          Micromouse, también conocida como Maze, es la categoría más 
          antigua en competencias de robótica autónoma. En ella, el robot debe explorar y encontrar el 
          camino más rápido hacia el centro de un laberinto, sin ayuda externa.<br><br> En InkaChallenge, el laberinto
          está formado por celdas de hasta 20 cm de lado, y la meta es un cuadro de 4 celdas sin paredes internas,
          con una única entrada.
        </p>
      </div>
    </div>

    <!-- Texto del reglamento (sin sección de niveles) -->
    <div class="mt-6 w-full md:ml-0">
      <p class="text-base md:text-lg mb-2">
        Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría <b>Micromouse</b>:
      </p>
    </div>

    <div class="mt-6">
      <!-- Versión PC: PDF embebido -->
      <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
        <embed 
          src="regulations/Robot MicroMouse - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
          width="100%" 
          height="500"
          type="application/pdf"
          class="border rounded-lg shadow-sm"
        >
      </div>

      <!-- Versión Móvil: Botón de descarga -->
      <div class="md:hidden text-center">
        <a 
          href="https://drive.google.com/file/d/15AbdA5rl8WNmCYlW3Hn46zgECDITZGub/view?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Ver Reglamento Completo (PDF)
        </a>
      </div>
    </div>
</div>
    `,
    "content-kungfu":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
    <!-- Contenedor principal: Imagen + Descripción en fila (PC) -->
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <!-- Imagen (izquierda) -->
      <div class="md:w-[320px] flex-shrink-0">
        <img 
          src="images/kung-fu.jpg" 
          alt="Robot Kung Fu" 
          class="rounded-xl shadow-lg w-full h-auto"
        >
      </div>

      <!-- Descripción (derecha en PC) -->
      <div class="flex-1">
        <p class="text-justify mb-4 text-base md:text-lg">
          Robot Kung-Fu es una competencia de destreza donde robots humanoides
          se enfrentan en combates no destructivos, simulando movimientos humanos mediante extremidades superiores e 
          inferiores.<br><br>
          En InkaChallenge, existen dos categorías: Otto (convalidado en la Liga Senior) y Humanoide 
          (convalidado en la Liga Master).
        </p>
      </div>
    </div>

    <!-- Texto del reglamento -->
    <div class="mt-6 w-full md:ml-0">
      <p class="text-base md:text-lg mb-2">
        Para más información revisa el reglamento Oficial IV InkaChallege Edición Coneimera para la categoría <b>Robot Kung Fu</b>:
      </p>
    </div>

    <div class="mt-6">
      <!-- Versión PC: PDF embebido -->
      <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
        <embed 
          src="regulations/Robot Kung-Fu - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
          width="100%" 
          height="500"
          type="application/pdf"
          class="border rounded-lg shadow-sm"
        >
      </div>

      <!-- Versión Móvil: Botón de descarga -->
      <div class="md:hidden text-center">
        <a 
          href="https://drive.google.com/file/d/1mP-gmSkUOBbEJXoGqgjJFM5NmgXRSSut/view?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Ver Reglamento Completo (PDF)
        </a>
      </div>
    </div>
</div>
    `,
    "content-combate":`
     <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
    <!-- Contenedor principal: Imagen + Descripción -->
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <div class="md:w-[320px] flex-shrink-0">
        <img src="images/combat.jpg" alt="Robot de combate" class="rounded-xl shadow-lg w-full h-auto">
      </div>
      <div class="flex-1">
        <p class="text-justify mb-4 text-base md:text-lg">
          Un Robot de Combate es un robot móvil controlado de forma 
          inalámbrica, diseñado para luchar "cuerpo a cuerpo" contra un oponente similar. El objetivo 
          es causar el mayor daño posible y dejar inmovilizado al rival por más de diez segundos, utilizando
          armas mecánicas, neumáticas o hidráulicas. Además, se evalúa la agresividad y su
          desenvolvimiento en general durante la pelea.
        </p>
      </div>
    </div>

    <!-- Niveles de combate -->
    <div class="mt-6 w-full md:ml-0">
      <p class="text-base md:text-lg font-semibold">💥 Niveles y tipos de combate:</p>
      <ul class="list-disc pl-6 text-base md:text-lg space-y-1">
        <li><b>Amateur:</b> Incluye el combate 3D, en donde los robots están fabricados con técnicas de impresión 3D.</li>
        <li><b>Senior:</b> Abarca combate de 1lb y de 3lb, hay libertad en la fabricación.</li>
      </ul>
    </div>

    <!-- Texto reglamento -->
    <div class="mt-6">
      <p class="text-base md:text-lg mb-2">
        Conoce más en el reglamento Oficial IV InkaChallege Edición Coneimera para la categoría <b>Robot de combate</b>:
      </p>
    </div>

    <!-- PDF -->
    <div class="mt-6">
      <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
        <embed 
          src="regulations/Combate de Robots - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
          width="100%" 
          height="500"
          type="application/pdf"
          class="border rounded-lg shadow-sm">
      </div>
      <div class="md:hidden text-center">
        <a 
          href="https://drive.google.com/file/d/1wa4rxqMcA9SstOrKPE7cDdDOfGX0otib/view?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Ver Reglamento Completo (PDF)
        </a>
      </div>
    </div>
</div>
    `,
    "content-walking":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <div class="md:w-[320px] flex-shrink-0">
        <img src="images/walking.png" alt="Walking-Race" class="rounded-xl shadow-lg w-full h-auto">
      </div>
      <div class="flex-1">
        <p class="text-justify mb-4 text-base md:text-lg">
          Robot Walking Race es una competencia donde robots bípedos 
          deben recorrer una distancia recta en el menor tiempo posible, usando solo sus piernas y sin 
          apoyo adicional. El movimiento debe ser realizado exclusivamente por sus extremidades,
          sin ningún otro mecanismo.<br><br>
          Existen dos categorías: Otto (convalidado en la Liga Senior) y Humanoide (convalidado en 
          la Liga Master), seleccionando a los competidores según el nivel de estudios del piloto 
          y el tipo de robot utilizado.
        </p>
      </div>
    </div>

    <div class="mt-6 w-full md:ml-0">
      <p class="text-base md:text-lg mb-2">
        Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría <b>Walking-Race</b>:
      </p>
    </div>

    <div class="mt-6">
      <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
        <embed 
          src="regulations/Robot Walking-Race - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
          width="100%" 
          height="500"
          type="application/pdf"
          class="border rounded-lg shadow-sm">
      </div>
      <div class="md:hidden text-center">
        <a 
          href="https://drive.google.com/file/d/1RM_U1D3RdFUSit7XuImM7suN0Ocg1GoY/view?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Ver Reglamento Completo (PDF)
        </a>
      </div>
    </div>
</div>
    `,
    "content-soccer":`
   <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <div class="md:w-[320px] flex-shrink-0">
        <img src="images/soccer.png" alt="Robot soccer" class="rounded-xl shadow-lg w-full h-auto">
      </div>
      <div class="flex-1">
        <p class="text-justify mb-4 text-base md:text-lg">
          Robot Soccer Bluetooth/RC es una competencia donde robots 
          móviles son capaces de jugar un partido de soccer, en equipos de tres contra tres, controlados por sus pilotos
          a través de comunicación inalámbrica.<br><br>
          La clave de esta categoría está en la destreza del piloto, ya que los robots no deben contar con
          sensores ni rutinas preprogramadas para moverse. Todo el control debe ser manual y en tiempo real,
          lo que convierte cada partido en una mezcla de estrategia, reflejos y coordinación.
        </p>
      </div>
    </div>

    <!-- Sección especial con imagen de cancha -->
    <div class="flex flex-col md:flex-row justify-between items-start mt-6 gap-4">
      <div class="flex-1">
        <p class="text-base md:text-lg font-semibold mb-2">Datos adicionales:</p>
        <ul class="list-disc pl-6 text-base md:text-lg space-y-1">
          <li>La cancha de soccer se distribuye como en la imagen.</li>
          <li>Cada equipo inicia con los robots dentro del área de arco.</li>
          <li>Cada partido cuenta con 2 tiempos de 2 minutos.</li>
          <li>Los niveles de participación son amateur y senior.</li>
        </ul>
      </div>
      <div class="md:w-[270px] flex-shrink-0 mt-4 md:mt-0">
        <img src="images/soccer-field.png" alt="Cancha de soccer" class="rounded-xl shadow-lg w-full h-auto">
        <p class="text-sm text-gray-600 italic mt-2 text-center md:text-left">Medidas de la cancha de soccer.</p>
      </div>
    </div>

    <div class="mt-6 w-full md:ml-0">
      <p class="text-base md:text-lg mb-2">
        Reglamento Oficial IV InkaChallege Edición Coneimera para la categoría <b>Robot soccer</b>:
      </p>
    </div>

    <div class="mt-6">
      <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
        <embed 
          src="regulations/Robot Soccer - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
          width="100%" 
          height="500"
          type="application/pdf"
          class="border rounded-lg shadow-sm">
      </div>
      <div class="md:hidden text-center">
        <a 
          href="https://drive.google.com/file/d/1AYsuJeOx1V7qxDrF64o3Llcnji5Ac05N/view?usp=drive_link" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Ver Reglamento Completo (PDF)
        </a>
      </div>
    </div>
</div>
    `,
    //contactanos
    "contact-title":"¿Tienes alguna consulta?",
    "contact-desc":"No dudes en escribirnos al correo electrónico para cualquier duda o pregunta.",
    "contact-redes":"También puedes seguir nuestras redes sociales para conocer más novedades sobre Inkachallenge IV - Edición CONEIMERA, ¡Nos vemos en Trujillo!",


    //invitaciones
    "invite-title":"📑 Solicitar invitaciones",
    "invite-desc":`Si tu equipo necesita invitaciones, puedes enviar los siguientes datos al correo <a href="mailto:robotronics@unitru.edu.pe" class="text-blue-400 underline hover:text-blue-200">
    robotronics@unitru.edu.pe
  </a>:`,
    "invite-list":`
      <li>Nombre de la institución</li>
      <li>Nombre del equipo</li>
      <li>Nombre del líder del equipo</li>
      <li>Integrantes de equipo que van a participar</li>
    `,
    "invite-numbers":"También puedes comunicarte a los siguientes números de teléfono por WhatsApp:",

  },
  en: {
    "background":"images/index-bg-en.png",
    "background-mobile":"images/index-bg-m-en.png",
    "map":"Location:",
    // Navbar
    // Navbar
    "nav-about": "History",
    "nav-rules": "Regulations",
    "nav-accred": "Accreditations",
    "nav-invit": "Invitations",
    "nav-register": "Register",
    "nav-contact": "Contact us",
    "nav-about-m": "History",
    "nav-rules-m": "Regulations",
    "nav-accred-m": "Accreditations",
    "nav-invit-m": "Invitations",
    "nav-register-m": "Register",
    "nav-contact-m": "Contact us",
    //About.html
    "logo-ic":"images/icons/icon-ic4-en.png",
    "first-title": "INKACHALLENGE IV CONEIMERA 2025 Edition",
    "text1": "<b>INKACHALLENGE</b> is a robotics competition held in the city of Trujillo - Peru, organised by the robotics club <b>Robotronics UNT</b>. Since its first edition in 2018, it brings together university students, makers, professionals and passionate about robotics, from universities and independent teams from all over the country. All of them compete in various challenges of mobile robotics that challenge their technical skills, strategy and teamwork, making this event one of the most important competitions in Peru.", 
    "text2": "This edition is an official event of the National Robotics Competition League 2025 (Peru), and will be developed in collaboration with the National Congress and International Exhibition of Mechanical, Mechatronic, Electrical, Electronic Engineering and Related Branches (XXXI CONEIMERA), with the support and backing of Let's Go Robot.",
    "venue": `
      <div id="venue" class="flex items-center gap-2">
        <img src="images/icons/location.png" alt="Ubicación" class="w-6 h-6">
        <span>
          Location: 
          <a href="https://maps.google.com/?q=Universidad+Nacional+de+Trujillo" target="_blank" class="text-yellow-400 hover:underline hover:text-orange-400 transition">
            National University of Trujillo (UNT), Perú
          </a>
        </span>
      </div>
    `,
    "date": "Date: August 6th to 8th, 2025",
    "second-title": "Previous Editions",
    "zero-ic": "SITEM 2017",
    "zero-desc": "In 2017, shortly after its success in Romania, <b>Robotronics UNT</b> took the initiative to organise a high-level robotics event in Peru. The pilot version of this competition took place at the <b>Mechatronics Technology Integration Week (SITEM: Semana de Integración Tecnológica)</b>, organised annually by the school of Mechatronics Engineering of the National University of Trujillo. This competition had several participating teams and with this experience of the organisers, the idea of creating an official event for the following year was born.",
    "first-ic": "InkaChallenge I",
    "first-desc": "With this first official edition, the event came to life under the name of InkaChallenge, and with the participation of various national teams, the event was a complete success, marking the beginning of a tradition for the club. For the first time in Peru, accreditations were granted to international events such as Robochallenge Romania and Robot Games Zero Latitude, in Ecuador.",
    "second-ic": "InkaChallenge II",
    "second-desc": "The second edition had more than 120 robots in competition, from 12 teams from different cities in Peru, such as Trujillo, Lima, Arequipa, Cajamarca, Piura and Ica. This edition consolidated InkaChallenge as a reference robotics event in the country. The winners of the respective challenges were awarded accreditations to participate in Robochallenge Romania and, for the first time, Robotchallenge China.",
    "third-ic": "InkaChallenge III",
    "third-desc":"The third edition of Inkachallenge was attended by 160 robots from various teams, and this edition stood out for its wide participation and the incorporation of new categories, such as <b>Line Follower Enhanced</b>. The winners of the respective categories were awarded accreditations to participate in Robotchallenge China, Robochallenge Romania and Robot Games Zero Latitude.",
    //Rules
    "btn-velocista": "Linefollower Classic",
    "btn-enhanced": "Linefollower Enhanced",
    "btn-turbo": "Linefollower Turbo",
    "btn-robotracer": "Robotracer",
    "btn-miniauto": "Autonomous Minisumo",
    "btn-minirc": "RC/Bluetooth Minisumo",
    "btn-microsumo": "Microsumo",
    "btn-micromouse": "Micromouse",
    "btn-soccer": "Soccer",
    "btn-combate": "Robot combat",
    "btn-kungfu": "Robot Kung-Fu",
    "btn-walking": "Walking-Race",
    "content-velocista":`
      <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
    <!-- Main container: Image + Description in row (PC) -->
    <div class="flex flex-col md:flex-row md:items-start gap-6">
      <!-- Image (left) -->
      <div class="md:w-[320px] flex-shrink-0">
        <img 
          src="images/linefollower.png" 
          alt="Line follower robot" 
          class="rounded-xl shadow-lg w-full h-auto"
        >
      </div>

      <!-- Description (right on PC) -->
      <div class="flex-1">
        <p class="text-justify mb-4 text-base md:text-lg">
          Line follower robots are designed to run around the track at maximum speed, precisely 
          following a <b>19 mm wide</b> black line on a white background. These robots are optimised for fast turns and precise manoeuvres,
          allowing them to complete the course in the shortest possible time.
        </p>
      </div>
    </div>

    <!-- Additional block (ALWAYS below image, same width as image on PC) -->
    <div class="mt-6 w-full md:ml-0">
      <!-- Competition levels -->
      <div class="mb-4">
        <p class="text-base md:text-lg font-semibold">📶 Competition levels:</p>
        <ul class="list-disc pl-6 text-base md:text-lg space-y-1">
          <li>Beginner</li>
          <li>Senior</li>
          <li>Master</li>
        </ul>
      </div>

      <!-- "Learn more" text -->
      <p class="text-base md:text-lg mb-2">
        Find out more in the Official IV InkaChallege Coneimera Edition regulations for the challenge <b>Line Follower Classic</b>:
      </p>
    </div>

    <div class="mt-6">
    <!-- PC version: Embedded PDF (only visible on desktop) -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Seguidor de Linea Velocista - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Mobile version: Download button (only visible on mobile) -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1e1PpEROTTyPnwfikiDZZDzzhEsOjxLtA/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <!-- PDF icon + Text -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
      View Full Regulations (PDF)
      </a>
    </div>
  </div>
</div>
    `,
    "content-enhanced":`
   <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Main container: Image + Description -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Left image -->
    <div class="md:w-[320px] flex-shrink-0">
      <img 
        src="images/enhanced.jpg" 
        alt="Line follower enhanced" 
        class="rounded-xl shadow-lg w-full h-auto"
      >
    </div>

    <!-- Right description -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        This challenge is based on the classic linefollower, but incorporates physical obstacles that significantly increase the complexity.
        Robots must traverse the track at high speed while facing <b>a seesaw</b>, <b>a block</b> and <b>an interruption</b> in the track (not necessarily in that order).
      </p>
    </div>
  </div>

  <!-- Obstacles section -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg font-semibold mb-3">⚠️ Obstacles:</p>
    
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Obstacles list -->
      <ul class="list-disc pl-6 text-base md:text-lg space-y-2 flex-1">
        <li><b>Seesaw:</b> A seesaw is placed on a straight line. Its length is at least 50 cm, and its axis is mounted up to 12 cm above the ground. The black line continues on the seesaw.</li>
        <li><b>Block:</b> The robot must go around the block of approx. 25 cm x 12 cm x 6.5 cm</li>
        <li><b>Interruption:</b> It is presented on the course, with a length of 10 cm.</li>
      </ul>

      <!-- Seesaw image -->
      <div class="lg:w-[300px] flex-shrink-0 mt-4 lg:mt-0">
        <img 
          src="images/seesaw.png" 
          alt="Seesaw" 
          class="rounded-xl shadow-lg w-full h-auto"
        >
        <p class="text-sm text-gray-600 italic mt-2 text-center">Seesaw representation</p>
      </div>
    </div>
  </div>

  <!-- Regulations section -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg mb-4">
      Official Rules IV InkaChallenge Coneimera Edition for the challenge 
      <b>Line Follower Enhanced</b>:
    </p>
  </div>

  <!-- PDF viewer -->
  <div class="mt-4">
    <!-- PC version: Embedded PDF -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Seguidor de Linea Enhanced - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Mobile version: Download button -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1MPlvaQjowgfLdPX3ioTmQIFSYa6ASDrZ/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        View Full Regulations (PDF)
      </a>
    </div>
  </div>
</div>
    `,
    "content-turbo":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Contenedor principal: Imagen + Descripción -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Imagen izquierda -->
    <div class="md:w-[250px] flex-shrink-0">
      <img 
        src="images/turbo.jpg" 
        alt="Linefollower Turbo" 
        class="rounded-xl shadow-lg w-full h-auto"
      >
    </div>

    <!-- Descripción derecha -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        <b>Linefollower Turbo</b> is the new challenge of <b>Inkachallenge IV</b>, presented for the first time
        in Peru. It is an autonomous mobile robot, designed to follow a continuous route drawn by
        a black line without intersections, in the shortest possible time. <br><br>
        This variant of the line followers introduces as its main challenge a <b>vertical loop with a diameter of 1.50 metres</b>,
        where the line of the circuit continues along the entire structure, demanding precision
        and a high level of control in the movement of the robot.
      </p>
    </div>
  </div>

  <!-- Sección de obstáculos -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg font-semibold mb-3">Additional information:</p>
    
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Lista de obstáculos -->
      <ul class="list-disc pl-6 text-base md:text-lg space-y-2 flex-1">
        <li>The loop is located on one of the straight lines of the course.</li>
        <li>The loop line is 19mm wide as well as the other lines.</li>
        <li>The loop has a maximum total width of 40cm.</li>
      </ul>

      <!-- Imagen del loop -->
      <div class="lg:w-[270px] flex-shrink-0 mt-4 lg:mt-0">
        <img 
          src="images/loop.png" 
          alt="Loop" 
          class="rounded-xl shadow-lg w-full h-auto"
        >
        <p class="text-sm text-gray-600 italic mt-2 text-center">Representation of the loop.</p>
      </div>
    </div>
  </div>

  <!-- Sección del reglamento -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg mb-4">
      Official IV InkaChallege Coneimera Edition Regulations for the challenge <b>Linefollower Turbo</b>:
    </p>
  </div>

  <!-- Visualizador PDF -->
  <div class="mt-4">
    <!-- Versión PC: PDF embebido -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Seguidor de Linea Turbo - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Versión Móvil: Botón de descarga -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1qgT4fIvqkQt5aZZ-hYymEunJ6QX629nx/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        View Full Regulations (PDF)
      </a>
    </div>
  </div>
</div>

    `,
    "content-robotracer":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Main container: Image + Description -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Left image -->
    <div class="md:w-[250px] flex-shrink-0">
      <img 
        src="images/robotracer.png" 
        alt="Robotracer" 
        class="rounded-xl shadow-lg w-full h-auto"
      >
    </div>

    <!-- Right description -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        RobotRacer is a robotics competition challenge originating from Japan.<br>
        Robots in this challenge must complete the circuit in the shortest possible time, which includes curves
        and intersections (also called crossings).<br> At each curve there are two markers, one at the beginning and one at the end, 
        each positioned 4cm from the edge of the line.
      </p>
    </div>
  </div>

  <!-- Additional info -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg font-semibold mb-3">Additional information:</p>
    
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- List -->
      <ul class="list-disc pl-6 text-base md:text-lg space-y-2 flex-1">
        <li>The curves include markers as shown in the image.</li>
        <li>The robot must include a buzzer.</li>
        <li>The robot must sound the buzzer at the start, at the finish, and at each curve when it recognizes the markers,
          but not when it is at a crossing.</li>
        <li>The start and finish zones are marked by two markers separated by 100cm.</li>
      </ul>

      <!-- Right image -->
      <div class="lg:w-[270px] flex-shrink-0 mt-4 lg:mt-0">
        <img 
          src="images/robotracer-rules-en.png" 
          alt="Representation of markers on the course." 
          class="rounded-xl shadow-lg w-full h-auto"
        >
        <p class="text-sm text-gray-600 italic mt-2 text-center">Representation of markers on the course.</p>
      </div>
    </div>
  </div>

  <!-- Rulebook section -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg mb-4">
      Official Rules – IV InkaChallenge Coneimera Edition for the challenge 
      <b>Nat-car/Robotracer Line Follower</b>:
    </p>
  </div>

  <!-- PDF viewer -->
  <div class="mt-4">
    <!-- Desktop: Embedded PDF -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Seguidor de Linea NatCar - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Mobile: Download button -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/18JKykogNKvv6U2VqzXJMlS_nc1L2yI4M/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        View Full Rulebook (PDF)
      </a>
    </div>
  </div>
</div>

    `,
    "content-miniauto":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Main container: Image + Description in row (PC) -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Image (left) -->
    <div class="md:w-[320px] flex-shrink-0">
      <img 
        src="images/minisumo.jpg" 
        alt="Autonomous Minisumo" 
        class="rounded-xl shadow-lg w-full h-auto"
      >
    </div>

    <!-- Description (right on PC) -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        Autonomous Minisumo is a category originating in Japan, 
        inspired by traditional sumo. These robots work without remote control, using sensors
        and evasion strategies to detect their opponent and avoid leaving the dojo. Their main objective:
        to push the opponent out of the dojo completely autonomously, in 3-round matches.<br><br>
        These robots may weigh up to 500g and must fit inside a 10cm by 10cm square.
      </p>
    </div>
  </div>

  <!-- Additional block (ALWAYS below the image, same width as it on PC) -->
  <div class="mt-6 w-full md:ml-0">
    <!-- Competition levels -->
    <div class="mb-4">
      <p class="text-base md:text-lg font-semibold">📶 Competition levels:</p>
      <ul class="list-disc pl-6 text-base md:text-lg space-y-1">
        <li>Beginner</li>
        <li>Senior</li>
        <li>Master</li>
      </ul>
    </div>

    <!-- "Learn more" text -->
    <p class="text-base md:text-lg mb-2">
      Official Rules – IV InkaChallenge Coneimera Edition for the category <b>Autonomous Minisumo</b>:
    </p>
  </div>

  <div class="mt-6">
    <!-- Desktop version: Embedded PDF (visible only on desktop) -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/MiniSumo Autónomo - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Mobile version: Download button (visible only on mobile) -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/114B3-KH3x0g6M4fRs4lGtRLURVvp3cxV/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <!-- PDF icon + Text -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        View Full Rulebook (PDF)
      </a>
    </div>
  </div>
</div>

    `,
    "content-minirc":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Main container: Image + Description in row (PC) -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Image (left) -->
    <div class="md:w-[320px] flex-shrink-0">
      <img 
        src="images/minirc.jpg" 
        alt="Minisumo RC" 
        class="rounded-xl shadow-lg w-full h-auto"
      >
    </div>

    <!-- Description (right on PC) -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        Bluetooth/RC Minisumo is a competition category in which robots, wirelessly controlled, must detect and push their opponent out of the ring. Unlike the autonomous Minisumo, this robot is operated by a human pilot, who must skillfully control its movement in real time. The use of sensors or pre-programmed routines is not allowed, ensuring that the pilot's ability is the key factor in each match.<br><br> These robots must weigh no more than 500g and fit within a 10cm x 10cm square.</p>
    </div>
  </div>

  <!-- Additional block (ALWAYS below image, same width on PC) -->
  <div class="mt-6 w-full md:ml-0">
    <!-- Participation levels -->
    <div class="mb-4">
      <p class="text-base md:text-lg font-semibold">📶 Participation levels:</p>
      <ul class="list-disc pl-6 text-base md:text-lg space-y-1">
        <li>Amateur</li>
        <li>Senior</li>
        <li>Master</li>
      </ul>
    </div>

    <!-- 'Learn more' text -->
    <p class="text-base md:text-lg mb-2">
      Official Rules for the IV InkaChallenge - Coneimera Edition, <b>Bluetooth/RC Minisumo</b> category:
    </p>
  </div>

  <div class="mt-6">
    <!-- Desktop version: embedded PDF -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/MiniSumo Bluetooth-RC - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Mobile version: download button -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1W6FrRos0_F1o8HY64Uc8HvhpuzT79x20/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        View Full Rules (PDF)
      </a>
    </div>
  </div>
</div>

    `,
    "content-microsumo":`
   <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Main container: Image + Description in row (PC) -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Image (left) -->
    <div class="md:w-[320px] flex-shrink-0">
      <img 
        src="images/microsumo.png" 
        alt="Microsumo" 
        class="rounded-xl shadow-lg w-full h-auto"
      >
    </div>

    <!-- Description (right on PC) -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        This is a competition category in which small robots must detect and push 
        their opponent out of the dojo in a fully autonomous manner. These robots use sensors 
        to locate the opponent, and their compact design allows them to make quick 
        and precise movements.<br><br>
        They can have a maximum weight of 100g and must fit within a square of 5cm per side.
      </p>
    </div>
  </div>

  <!-- Regulation text -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg mb-2">
      Official Rules for the IV InkaChallenge - Coneimera Edition, <b>Microsumo</b> category:
    </p>
  </div>

  <div class="mt-6">
    <!-- Desktop version: embedded PDF -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/MicroSumo Autónomo - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Mobile version: download button -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1zW3mVrlgV96xooQi6quGt9v49dRaoS4E/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        View Full Rules (PDF)
      </a>
    </div>
  </div>
</div>

    `,
    "content-micromouse":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Main container: Image + Description in row (Desktop) -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Image (left) -->
    <div class="md:w-[320px] flex-shrink-0">
      <img 
        src="images/micromouse.jpg" 
        alt="Micromouse" 
        class="rounded-xl shadow-lg w-full h-auto"
      >
    </div>

    <!-- Description (right on Desktop) -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        Micromouse, also known as Maze, is the oldest category 
        in autonomous robotics competitions. In this challenge, the robot must explore and find the 
        fastest route to the center of a maze without any external assistance.<br><br>
        At InkaChallenge, the maze is composed of cells up to 20 cm per side, and the goal is a 4-cell square with no internal walls and a single entrance.
      </p>
    </div>
  </div>

  <!-- Rulebook text (no levels section) -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg mb-2">
      Official Rules IV InkaChallege Coneimera Edition for the <b>Micromouse</b> challenge:
    </p>
  </div>

  <div class="mt-6">
    <!-- Desktop version: Embedded PDF -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Robot MicroMouse - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Mobile version: Download button -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/15AbdA5rl8WNmCYlW3Hn46zgECDITZGub/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        View Full Rulebook (PDF)
      </a>
    </div>
  </div>
</div>

    `,
    "content-kungfu":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Contenedor principal: Imagen + Descripción en fila (PC) -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Imagen (izquierda) -->
    <div class="md:w-[320px] flex-shrink-0">
      <img 
        src="images/kung-fu.jpg" 
        alt="Robot Kung Fu" 
        class="rounded-xl shadow-lg w-full h-auto"
      >
    </div>

    <!-- Descripción (derecha en PC) -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        Robot Kung Fu is a skill competition where humanoid robots face off in non-destructive combat, 
        simulating human movements using upper and lower limbs. <br><br>
        In InkaChallenge, there are two levels: Otto (validated in the Senior League) and Humanoid 
        (validated in the Master League).
      </p>
    </div>
  </div>

  <!-- Texto del reglamento -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg mb-2">
      For more information, check the Official IV InkaChallege Coneimera Edition regulations for the <b>Kung Fu Robot</b> challenge:
    </p>
  </div>

  <div class="mt-6">
    <!-- Versión PC: PDF embebido -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Robot Kung-Fu - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Versión Móvil: Botón de descarga -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1mP-gmSkUOBbEJXoGqgjJFM5NmgXRSSut/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        View Full Rulebook (PDF)
      </a>
    </div>
  </div>
</div>

    `,
    "content-combate":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Main container: Image + Description -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <div class="md:w-[320px] flex-shrink-0">
      <img src="images/combat.jpg" alt="Combat Robot" class="rounded-xl shadow-lg w-full h-auto">
    </div>
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        A Combat Robot is a wirelessly controlled mobile robot designed to engage in close combat against a similar opponent. 
        The goal is to inflict as much damage as possible and immobilize the opponent for more than ten seconds using mechanical, 
        pneumatic, or hydraulic weapons. Additionally, the robot's aggressiveness and overall performance during the fight are evaluated.
      </p>
    </div>
  </div>

  <!-- Combat levels -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg font-semibold">💥 Levels and types of combat:</p>
    <ul class="list-disc pl-6 text-base md:text-lg space-y-1">
      <li><b>Beginner:</b> Includes 3D Combat, where the robots are made using 3D printing techniques.</li>
      <li><b>Senior:</b> Includes 1 lb and 3 lb combat classes, with more freedom in the choice of materials and components.</li>
    </ul>
  </div>

  <!-- Rulebook text -->
  <div class="mt-6">
    <p class="text-base md:text-lg mb-2">
      Learn more in the Official IV InkaChallege Coneimera Edition Rules for the <b>Combat Robot</b> challenge:
    </p>
  </div>

  <!-- PDF viewer and mobile button -->
  <div class="mt-6">
    <!-- Desktop version: Embedded PDF -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Combate de Robots - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm">
    </div>

    <!-- Mobile version: Download button -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1wa4rxqMcA9SstOrKPE7cDdDOfGX0otib/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        View Full Rulebook (PDF)
      </a>
    </div>
  </div>
</div>

    `,
    "content-walking":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <!-- Contenedor principal: Imagen + Descripción en fila (PC) -->
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Imagen (izquierda) -->
    <div class="md:w-[320px] flex-shrink-0">
      <img 
        src="images/walking.png" 
        alt="Walking-Race" 
        class="rounded-xl shadow-lg w-full h-auto"
      >
    </div>

    <!-- Descripción (derecha en PC) -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        Robot Walking Race is a competition where bipedal robots must travel a straight distance in the shortest possible time, 
        using only their legs and without additional support. The movement must be performed exclusively by their limbs, without any other mechanism. <br><br>
        There are two levels: Otto (for the Senior level) and Humanoid (for the Master level), depending on the pilot's educational level and the type of robot used.
      </p>
    </div>
  </div>

  <!-- Texto del reglamento -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg mb-2">
      Official IV InkaChallege Coneimera Edition Rules for <b>Walking-Race</b> challenge:
    </p>
  </div>

  <div class="mt-6">
    <!-- Versión PC: PDF embebido -->
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Robot Walking-Race - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>

    <!-- Versión Móvil: Botón de descarga -->
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1RM_U1D3RdFUSit7XuImM7suN0Ocg1GoY/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        View Full Rulebook (PDF)
      </a>
    </div>
  </div>
</div>

    `,

    "content-soccer":`
    <div class="modal-content bg-white rounded-lg p-6 mx-4 max-w-4xl mx-auto">
  <div class="flex flex-col md:flex-row md:items-start gap-6">
    <!-- Imagen (izquierda) -->
    <div class="md:w-[320px] flex-shrink-0">
      <img src="images/soccer.png" alt="Robot soccer" class="rounded-xl shadow-lg w-full h-auto">
    </div>

    <!-- Descripción (derecha en PC) -->
    <div class="flex-1">
      <p class="text-justify mb-4 text-base md:text-lg">
        Bluetooth/RC Robot Soccer is a competition where mobile robots are capable of playing a soccer game in three-on-three teams, controlled by their pilots via wireless communication. <br><br>
        The key to this category lies in the pilot's skill, as the robots do not require sensors or preprogrammed routines to move. All control must be manual and in real time, making each match a mix of strategy, reflexes, and coordination.
      </p>
    </div>
  </div>

  <!-- Sección especial con imagen de cancha -->
  <div class="flex flex-col md:flex-row justify-between items-start mt-6 gap-4">
    <div class="flex-1">
      <p class="text-base md:text-lg font-semibold mb-2">Additional information:</p>
      <ul class="list-disc pl-6 text-base md:text-lg space-y-1">
        <li>The soccer field is laid out as shown in the image.</li>
        <li>Each team starts with the robots inside the goal area.</li>
        <li>Each match has two 2-minute halves.</li>
        <li>Participation levels are amateur and senior.</li>
      </ul>
    </div>

    <div class="md:w-[270px] flex-shrink-0 mt-4 md:mt-0">
      <img src="images/soccer-field.png" alt="Soccer field layout" class="rounded-xl shadow-lg w-full h-auto">
      <p class="text-sm text-gray-600 italic mt-2 text-center md:text-left">Soccer field measurements.</p>
    </div>
  </div>

  <!-- Reglamento -->
  <div class="mt-6 w-full md:ml-0">
    <p class="text-base md:text-lg mb-2">
      Official IV InkaChallege Coneimera Edition Rules for the <b>Robot Soccer</b> challenge:
    </p>
  </div>

  <div class="mt-6">
    <div class="hidden md:block overflow-auto" style="max-height: 50vh;">
      <embed 
        src="regulations/Robot Soccer - Reglamento Oficial IV InkaChallege Edición Coneimera.pdf" 
        width="100%" 
        height="500"
        type="application/pdf"
        class="border rounded-lg shadow-sm"
      >
    </div>
    <div class="md:hidden text-center">
      <a 
        href="https://drive.google.com/file/d/1AYsuJeOx1V7qxDrF64o3Llcnji5Ac05N/view?usp=drive_link" 
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center px-6 py-3 bg-[#17234c] text-white rounded-lg hover:bg-[#fab41a] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        View Full Rulebook (PDF)
      </a>
    </div>
  </div>
</div>

    `,
    //contact us
    "contact-title":"Do you have any questions?",
    "contact-desc":"Don't hesitate to email us with any questions or concerns.",
    "contact-redes":"You can also follow our social media channels for more news about InkaChallenge IV - CONEIMERA Edition. See you in Trujillo!",
          //invitations
    "invite-title":"📑 Request invitations",
    "invite-desc":`If your team needs invitations, you can send the following information to the e-mail <a href="mailto:robotronic@unitru.edu.pe" class="text-blue-400 underline hover:text-blue-200">
    robotronics@unitru.edu.pe :`,
    "invite-list":`
      <li>Institution name</li>
      <li>Team name</li>
      <li>Team leader name</li>
      <li>Team members names</li>
    `,
    "invite-numbers":"You can also contact us via WhatsApp at the following phone numbers:",


  }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
  const langContent = translations[lang];
  for (const key in langContent) {
    const element = document.getElementById(key);
    if (element && (key.startsWith('logo') || key === 'background' || key === 'background-mobile')) {
      element.src = langContent[key];  // Para imágenes
    } else if (element) {
      element.innerHTML = langContent[key];  // Para textos
    }
  }

// Actualización específica para fondos responsivos
  const mobileBackground = document.getElementById('background-mobile');
  const desktopBackground = document.getElementById('background');
  
  if (mobileBackground && langContent['background-mobile']) {
    mobileBackground.src = langContent['background-mobile'];
  }
  if (desktopBackground && langContent['background']) {
    desktopBackground.src = langContent['background'];
  }

  // Cambiar iconos de idioma si existen
  const esBtn = document.getElementById("btn-es");
  const enBtn = document.getElementById("btn-en");
  if (esBtn && enBtn) {
    esBtn.src = (lang === "es") ? "images/icons/es-on.png" : "images/icons/es-off.png";
    enBtn.src = (lang === "en") ? "images/icons/en-on.png" : "images/icons/en-off.png";
  }



  // Actualizar atributo lang y guardar preferencia
  document.documentElement.lang = lang;
  localStorage.setItem("preferredLanguage", lang);
}

// Carga inicial
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem("preferredLanguage") || 
                   (navigator.language.startsWith('es') ? 'es' : 'en');
  changeLanguage(savedLang);
});