const pageContent = {
  es: {
    concept: {
      title: 'Concepto',
      body: `El cerdito Miguel tiene un carrito donde vende tortas, pero sus
          clientes tienen gustos bastante peculiares. Con el paso del tiempo, su
          carrito se vuelve cada vez más popular: visita nuevas ciudades, llegan
          más y más clientes, y Miguel empieza a incorporar nuevas tortas e
          ingredientes. Ahora, Miguel tiene que atenderlos a todos rápidamente y
          mantenerlos contentos, mientras trata de no desperdiciar comida y
          maximizar sus ganancias.`,
    },
    devnews: {
      title: '🛠️ Noticias de Desarrollo',
      APR01_25: {
        date: '1 de abril de 2025',
        body: `Creación de la armonía para el tema principal del juego.`,
      },
      MAR30_25: {
        date: '30 de marzo de 2025',
        body: `Se añadieron los personajes camaleón, perrito y mamut.`,
      },
      MAR29_25: {
        date: '29 de marzo de 2025',
        body: `Se implemento el sistema de las ordenes de los clientes y el sistema de puntaje si la orden fue correcta (+1 punto) o incorrecta (-1). `,
      },
      MAR28_25: {
        date: '28 de marzo de 2025',
        body: `Se diseñó del pan para constuir la torta con los ingredientes.`,
      },
      MAR27_25: {
        date: '27 de marzo de 2025',
        body: `Se diseñó el sistema de seleccion de ingredientes para la torta.`,
      },
      MAR26_25: {
        date: '26 de marzo de 2025',
        body: `Se diseñó el primer cliente (el gato) y se implementó el sistema para hacer que los clientes aparezcan y desaparezcan del escenario.`,
      },
      MAR25_25: {
        date: '25 de marzo de 2025',
        body: `Se agregaron los carriles por los que llegan los clientes y el área donde se muestran y seleccionan los ingredientes para preparar las tortas.`,
      },
      MAR24_25: {
        date: '24 de marzo de 2025',
        body: `Diseño de Miguel, el personaje principal del juego, e integración inicial en el entorno del demo. Actualmente, Miguel puede ser controlado por el jugador y moverse de lado a lado dentro del escenario.`,
      },
      MAR23_25: {
        date: '23 de marzo de 2025',
        body: `Primer boceto de el control del videojuego: perillas, rodillo y botones dedicados a ingredientes especiales. Este concepto está inspirado en los controles clásicos de juegos arcade. `,
      },
      MAR22_25: {
        date: '22 de marzo de 2025',
        body: `Primer boceto visual del concepto del juego. Incluye ideas iniciales de personajes, sistema de puntaje y propuestas para las habilidades especiales de cada uno.`,
      },
    },
    controls: {
      title: 'Controles',
      body: `Usa la perilla izquierda para desplazarte por los ingredientes y el botón que está debajo para seleccionarlos. Una vez que armes la torta, usa la perilla derecha para moverte por la barra hasta llegar al carril correcto con el cliente adecuado. Luego, usa el rodillo grande que está encima de la perilla y deslízalo hacia arriba para entregar la torta (también puedes tirarla a la basura si lo deslizas hacia abajo). Además, puedes agregar salsas e ingredientes especiales presionando los botones que están encima del rodillo. `,
    },
    characters: {
      title: 'Personajes',
      miguel: {
        name: 'Miguel',
        description: `A Miguel le encanta cocinar y descubrir nuevas recetas. Está orgulloso de poder identificar qué le gusta a sus clientes para mantenerlos felices. Disfruta experimentar con ingredientes y sorprenderlos con combinaciones inesperadas y deliciosas. Si hay muchos clientes esperando, se estresa y empieza a moverse más rápido… se pone histérico.`,
      },
      clients: {
        title: 'Clientes',
        gato: {
          name: 'Gatitos',
          description: `Son impacientes. Gritan si tardas, y Miguel no puede escuchar a los demás. 🐱`,
        },
        perro: {
          name: 'Perritos',
          description: `Muy emocionados por probar tortas. Si se tarda mucho, cambian su orden. 🐾`,
        },
        camaleon: {
          name: 'Camaleones',
          description: `Son tímidos y se disfrazan de otros clientes, pero sus ojos los delatan. Si les das el ingrediente especial equivocado, rechazan la orden. 🦎`,
        },
        mamut: {
          name: 'Mamut',
          description: `Amables, pero con memoria perfecta. Piden órdenes grandes, pero si reciben la orden equivocada, no lo olvidan y restan más puntos. 🐘 `,
        },
      },
      obstacles: {
        title: 'Obstáculos',
        tlacuache: {
          name: 'Tlacuache',
          description: `Obstáculo que aparece en la barra y roba ingredientes. Si la torta tiene el ingrediente favorito del cliente, se espanta. `,
        },
      },
    },
    ingredients: {
      title: 'Ingredientes',
      base: {
        title: 'Base',
        jamon: 'Jamón',
        queso_amarillo: 'Queso amarillo',
        frijoles_negros: 'Frijoles Negros',
      },
      complementos: {
        title: 'Complementos',
        salsa_verde: 'Salsa Verde',
        salsa_roja: 'Salsa Roja',
        aguacate: 'Aguacate',
        crema: 'Crema',
        limon: 'Limón',
      },
    },
    team: {
      title: 'Equipo',
      members: {
        gema: {
          name: 'Gema Alvarez Perez',
          role: 'Director, Programador Principal, Artista Principal, Co-creador.',
        },
        toledano: {
          name: 'Toledano',
          role: 'Diseñador de Sonido y Compositor Musical.',
        },
        arturo: {
          name: 'Arturo de la Cruz',
          role: 'Diseñador de Hardware, Prototipado Electrónico e Interfaces.',
        },
        hideki: {
          name: 'Hideki Garcia Goo',
          role: 'Productor Creativo, Co-creador, Desarrollador Web, Diseñador Visual. ',
        },
      },
    },
  },
  en: {
    concept: {
      title: 'Concept',
      body: `Miguel the piglet runs a little cart where he sells tortas, but his customers have some pretty peculiar tastes. Over time, his cart becomes more and more popular: he visits new cities, sees more and more customers, and starts adding new tortas and ingredients. Now, Miguel has to serve everyone quickly and keep them happy, all while trying not to waste food and maximize his profits.`,
    },
    devnews: {
      title: '🛠️ Dev News',
      APR01_25: {
        date: 'April 1, 2025',
        body: `Harmony created for the game's main theme.`,
      },
      MAR30_25: {
        date: 'March 30, 2025',
        body: `Chameleon, puppy, and mammoth characters added.`,
      },
      MAR29_25: {
        date: 'March 29, 2025',
        body: `Customer order system implemented, along with the scoring system: +1 point for correct orders, -1 for mistakes.`,
      },
      MAR28_25: {
        date: 'March 28, 2025',
        body: `Designed the bread used to build tortas with ingredients.`,
      },
      MAR27_25: {
        date: 'March 27, 2025',
        body: `Designed the ingredient selection system for tortas.`,
      },
      MAR26_25: {
        date: 'March 26, 2025',
        body: `Designed the first customer (the cat) and implemented the system that makes customers appear and disappear on screen.`,
      },
      MAR25_25: {
        date: 'March 25, 2025',
        body: `Added the lanes where customers arrive and the area where ingredients are displayed and selected to make tortas.`,
      },
      MAR24_25: {
        date: 'March 24, 2025',
        body: `Designed Miguel, the main character, and integrated him into the demo environment. Miguel can currently be controlled by the player and moves side to side within the stage.`,
      },
      MAR23_25: {
        date: 'March 23, 2025',
        body: `First sketch of the game’s controls: knobs, a roller, and buttons for special ingredients. Inspired by classic arcade game setups.`,
      },
      MAR22_25: {
        date: 'March 22, 2025',
        body: `First visual sketch of the game concept. Includes initial ideas for characters, scoring system, and proposals for each character’s special abilities.`,
      },
    },
    controls: {
      title: 'Controls',
      body: `Use the left knob to scroll through ingredients and the button underneath to select them. Once you’ve built your torta, use the right knob to move along the counter to the correct lane with the right customer. Then, slide the big roller above the knob upwards to deliver the torta (or downwards to toss it in the trash). You can also add sauces and special ingredients by pressing the buttons above the roller.`,
    },
    characters: {
      title: 'Characters',
      miguel: {
        name: 'Miguel',
        description: `Miguel loves to cook and discover new recipes. He takes pride in identifying what his customers like to keep them happy. He enjoys experimenting with ingredients and surprising them with unexpected, delicious combinations. If too many customers are waiting, he gets stressed and starts moving faster… he gets frantic.`,
      },
      clients: {
        title: 'Customers',
        gato: {
          name: 'Kittens',
          description: `They're impatient. If you take too long, they start yelling—and Miguel can’t hear the others. 🐱`,
        },
        perro: {
          name: 'Puppies',
          description: `Very excited to try tortas. If you take too long, they change their order. 🐾`,
        },
        camaleon: {
          name: 'Chameleons',
          description: `They’re shy and disguise themselves as other customers—but their eyes give them away. If you give them the wrong special ingredient, they reject the order. 🦎`,
        },
        mamut: {
          name: 'Mammoth',
          description: `Kind, but with a perfect memory. They place large orders, but if you get it wrong, they don’t forget—and dock extra points. 🐘`,
        },
      },
      obstacles: {
        title: 'Obstacles',
        tlacuache: {
          name: 'Opossum',
          description: `An obstacle that appears on the counter and steals ingredients. If the torta has the customer’s favorite ingredient, it gets scared away.`,
        },
      },
    },
    ingredients: {
      title: 'Ingredients',
      base: {
        title: 'Base',
        jamon: 'Ham',
        queso_amarillo: 'Yellow Cheese',
        frijoles_negros: 'Black Beans',
      },
      complementos: {
        title: 'Toppings',
        salsa_verde: 'Green Salsa',
        salsa_roja: 'Red Salsa',
        aguacate: 'Avocado',
        crema: 'Sour Cream',
        limon: 'Lime',
      },
    },
    team: {
      title: 'Team',
      members: {
        gema: {
          name: 'Gema Alvarez Perez',
          role: 'Director, Lead Programmer, Lead Artist, Co-creator.',
        },
        toledano: {
          name: 'Toledano',
          role: 'Sound Designer and Music Composer.',
        },
        arturo: {
          name: 'Arturo de la Cruz',
          role: 'Hardware Designer, Electronic Prototyping and Interface Development.',
        },
        hideki: {
          name: 'Hideki Garcia Goo',
          role: 'Creative Producer, Co-creator, Web Developer, Visual Designer.',
        },
      },
    },
  },
};

export default pageContent;
