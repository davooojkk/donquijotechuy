export const deliveryData = {
  PIZZAS: {
    tipo: "subcategorias",

    subcategorias: {
      Tradicionales: {
        items: [
          { nombre: "Muzzarella", medioMetro: 500 },
          { nombre: "Muzzarella con Jamón", medioMetro: 600 },
          { nombre: "Muzzarella con Panceta", medioMetro: 600 },
          { nombre: "Muzzarella con Aceitunas", medioMetro: 600 },
          { nombre: "Muzzarella con Palmitos", medioMetro: 600 },
          { nombre: "Muzzarella con Morrón", medioMetro: 600 },
          { nombre: "Muzzarella con Cebolla", medioMetro: 600 },
          { nombre: "Muzzarella con Ajo", medioMetro: 600 },
          { nombre: "Muzzarella con Calabresa", medioMetro: 600 },
          { nombre: "Muzzarella con Longaniza", medioMetro: 600 },
          { nombre: "Muzzarella con Atún", medioMetro: 600 },
          { nombre: "Muzzarella con Sardina", medioMetro: 600 },
          { nombre: "Muzzarella a la Provenzal", medioMetro: 600 },
          {
            nombre: "Del Monte",
            descripcion: "Palmito y aceitunas.",
            medioMetro: 600,
          },
          {
            nombre: "Primavera",
            descripcion: "Choclo y jamón.",
            medioMetro: 600,
          },
          {
            nombre: "Marea",
            descripcion: "Atún y cebolla.",
            medioMetro: 600,
          },
          {
            nombre: "Napolitana",
            descripcion: "Jamón y tomate.",
            medioMetro: 600,
          },
        ],
      },
      Especiales: {
        items: [
          { nombre: "Muzzarella 4 Quesos", medioMetro: 680 },
          { nombre: "Muzzarella con Roquefort", medioMetro: 680 },
          {
            nombre: "Norteña",
            descripcion: "Panceta, jamón y huevo cocido.",
            medioMetro: 680,
          },
          { nombre: "Pollo Catupiry", medioMetro: 680 },
          {
            nombre: "Portuguesa",
            descripcion: "Jamón, morrón, cebolla, aceitunas y huevo.",
            medioMetro: 680,
          },
          { nombre: "Rúcula y Tomate", medioMetro: 680 },
          {
            nombre: "Gauchita",
            descripcion: "Panceta y queso Catupiry.",
            medioMetro: 680,
          },
          {
            nombre: "Vegetariana",
            descripcion: "Rúcula, tomate, palmito y morrón.",
            medioMetro: 680,
          },
          { nombre: "Muzzarella con Champiñones", medioMetro: 680 },
          {
            nombre: "Granjera",
            descripcion: "Panceta, cebolla y huevo cocido.",
            medioMetro: 680,
          },
        ],
      },
      "Súper Especiales": {
        items: [
          { nombre: "Muzzarella con Camarón", medioMetro: 750 },
          {
            nombre: "Muzzarella Don Quijote",
            descripcion: "Jamón, aceitunas, panceta, huevo frito y morrón rojo.",
            medioMetro: 750,
          },
        ],
      },
    },
  },
  PARRILLA: {
    tipo: "subcategorias",

    subcategorias: {
      Individual: {
        items: [
          {
            nombre: "Asado",
            descripcion: "Acompañado de guarnición.",
            precio: 500,
          },
          {
            nombre: "Entrecot",
            descripcion: "Acompañado de guarnición.",
            precio: 600,
          },
          { nombre: "Entrecot con 'Champi'", precio: 650 },
          { nombre: "Entrecot con Pimienta", precio: 650 },
          { nombre: "Entrecot con Mostaza", precio: 650 },
          {
            nombre: "Muslo",
            descripcion: "Acompañado de guarnición.",
            precio: 400,
          },
          {
            nombre: "Entrecot para Uno",
            descripcion:
              "Incluye ensaladas rusa y mixta, arroz, jamón, huevo, muzzarella y papas.",
            precio: 700,
          },
          { nombre: "Entrecot a la Pizza", precio: 650 },
        ],
      },
      "Para Compartir": {
        items: [
          {
            nombre: "Entrecot para Dos",
            descripcion:
              "Incluye ensaladas rusa y mixta, arroz, jamón, huevo, muzzarella y papas.",
            precio: 1300,
          },
          {
            nombre: "Brasero para Dos",
            descripcion:
              "Asado, entrecot, chorizo, salchicha, morrón al ajillo, chinchulín, riñón, papa, cebolla y morcilla.",
            precio: 1800,
          },
          {
            nombre: "Brasero para Cuatro",
            descripcion:
              "Asado, entrecot, chorizo, salchicha, morrón al ajillo, chinchulín, riñón, papa, cebolla y morcilla.",
            precio: 2700,
          },
        ],
      },
    },
  },
  MARISCOS: {
    tipo: "simple",
    items: [
      { nombre: "Camarón con Arroz", precio: 650 },
      { nombre: "Miniatura de Pescado", precio: 400 },
      { nombre: "Mejillones con arroz", precio: 550 },
      { nombre: "Milanesa de Pescado", precio: 480 },
      {
        nombre: "Lenguado a la Plancha",
        descripcion: "Acompañado de guarnición.",
        precio: 550,
      },
      {
        nombre: "Salmón a la Plancha",
        descripcion: "Preparado con manteca y alcaparras o al limón.",
        precio: 750,
      },
      {
        nombre: "Cazón a la Plancha",
        descripcion: "Acompañado de guarnición.",
        precio: 500,
      },
    ],
  },
  SANDWICH: {
    tipo: "simple",
    items: [
      { nombre: "Sándwich Frío", precio: 180 },
      { nombre: "Sándwich Caliente", precio: 200 },
      { nombre: "Sándwich Napolitano", precio: 280 },
      { nombre: "Sándwich Olímpico", precio: 300 },
      { nombre: "Sándwich con Muzzarella", precio: 250 },
      { nombre: "Sándwich Don Quijote", precio: 350 },
    ],
  },
  PANCHOS: {
    tipo: "simple",
    items: [
      { nombre: "Pancho", precio: 150 },
      { nombre: "Pancho con Muzzarella", precio: 170 },
      { nombre: "Pancho con Panceta", precio: 170 },
      { nombre: "Pancho Porteño", precio: 170 },
      { nombre: "Pancho Completo", precio: 200 },
    ],
  },
  BAURU: {
    tipo: "simple",
    items: [
      { nombre: "Baurú Carne o Pollo", precio: 250 },
      { nombre: "Baurú Pancho", precio: 280 },
      {
        nombre: "Baurú Don Quijote",
        descripcion:
          "Mayonesa, kétchup, mostaza, lechuga, tomate, choclo, arvejas, jamón, queso, huevo, carne, pollo, calabresa y panceta.",
        precio: 330,
      },
      { nombre: "Baurú Calabresa", precio: 280 },
      { nombre: "Baurú Corazón de Pollo", precio: 300 },
      {
        nombre: "Porción de Fritas",
        descripcion: "Acompañamiento para el Baurú.",
        precio: 50,
      },
    ],
  },
  PASTAS: {
    tipo: "subcategorias",
    subcategorias: {
      Pastas: {
        items: [
          { nombre: "Sorrentinos", precio: 520 },
          { nombre: "Raviolones", precio: 500 },
          { nombre: "Espagueti", precio: 300 },
        ],
      },
      Salsas: {
        items: [
          { nombre: "Boloñesa" },
          { nombre: "Cuatro Quesos" },
          { nombre: "Caruso" },
          { nombre: "Fileto" },
          { nombre: "Rosa" },
        ],
      },
    },
  },
  MINUTAS: {
    tipo: "subcategorias",
    subcategorias: {
      Hamburguesas: {
        items: [
          { nombre: "Hamburguesa al Pan", precio: 350 },
          { nombre: "Hamburguesa Completa", precio: 370 },
          {
            nombre: "Hamburguesa Completa",
            descripcion: "Acompañada de papas fritas.",
            precio: 420,
          },
          {
            nombre: "Hamburguesa Kids",
            descripcion: "Acompañada de papas fritas.",
            precio: 280,
          },
        ],
      },
      Milanesas: {
        items: [
          {
            nombre: "Milanesa Napolitana",
            descripcion: "Acompañada de guarnición.",
            precio: 450,
          },
          {
            nombre: "Milanesa Napolitana",
            descripcion: "Para 2 personas. Acompañada de guarnición.",
            precio: 880,
          },
          {
            nombre: "Milanesa",
            descripcion: "A elección: carne o pollo. Acompañada de guarnición.",
            precio: 380,
          },
          { nombre: "Milanesa al Pan", precio: 380 },
          { nombre: "Milanesa al Pan Completa", precio: 400 },
          {
            nombre: "Milanesa al Pan Completa",
            descripcion: "Acompañada de papas fritas.",
            precio: 450,
          },
        ],
      },
      Chivitos: {
        items: [
          { nombre: "Chivito al pan", precio: 350 },
          { nombre: "Chivito Canadiense", precio: 480 },
          {
            nombre: "Chivito para Uno",
            descripcion:
              "Incluye ensaladas rusa y mixta, queso, jamón, panceta, huevo, muzzarella y papas fritas.",
            precio: 480,
          },
          {
            nombre: "Chivito para Dos",
            descripcion:
              "Incluye ensaladas rusa y mixta, queso, jamón, panceta, huevo, muzzarella y papas fritas.",
            precio: 900,
          },
        ],
      },
      Tortillas: {
        items: [
          { nombre: "Tortilla con Cebolla", precio: 300 },
          { nombre: "Tortilla Española", precio: 350 },
          { nombre: "Tortilla Don Quijote", precio: 420 },
        ],
      },
      Otros: {
        items: [
          {
            nombre: "Nuggets",
            descripcion: "Acompañados de papas fritas.",
            precio: 350,
          },
          { nombre: "Gramajo", precio: 400 },
          {
            nombre: "Pollo",
            descripcion: "Acompañado de guarnición.",
            precio: 400,
          },
        ],
      },
    },
  },
  GUARNICIONES: {
    tipo: "simple",
    items: [
      { nombre: "Fritas", precio: 200 },
      { nombre: "Fritas Champi", precio: 250 },
      { nombre: "Fritas Cuatro Quesos", precio: 250 },
      { nombre: "Fritas Cheddar", precio: 250 },
      { nombre: "Fritas Don Quijote", precio: 350 },
      { nombre: "Papas Noisette", precio: 250 },
      { nombre: "Fritas con Cheddar y Panceta", precio: 280 },
    ],
  },
  ENSALADAS: {
    tipo: "simple",
    items: [
      { nombre: "Don Quijote", precio: 350 },
      { nombre: "Ensalada César", precio: 400 },
      { nombre: "Remolacha y Zanahoria", precio: 230 },
      { nombre: "Ensalada Primavera", precio: 400 },
      { nombre: "Rúcula y Tomate", precio: 240 },
      { nombre: "Palmito, Zanahoria y Remolacha", precio: 280 },
      {
        nombre: "Ensalada Mixta",
        descripcion: "Lechuga y tomate.",
        precio: 180,
      },
      { nombre: "Ensalada Rusa", precio: 200 },
    ],
  },
  BEBIDAS: {
    tipo: "simple",
    items: [
      { nombre: "Cerveza Litro", precio: 250 },
      { nombre: "Zillertal Litro", precio: 280 },
      { nombre: "Stella Artois Litro", precio: 280 },
      { nombre: "Coca Cola 2L", precio: 120 },
      { nombre: "Refresco Línea Pepsi 600ml", precio: 80 },
      { nombre: "Agua Salus", precio: 60 },
      { nombre: "Salus Saborizada", precio: 70 },
    ],
  },
  POSTRES: {
    tipo: "simple",
    items: [
      { nombre: "Torta 3X3", precio: 230 },
      { nombre: "Flan", precio: 180 },
      { nombre: "Flan con Dulce", precio: 200 },
      { nombre: "Torta Ramona", precio: 230 },
      { nombre: "Príncipe Humberto", precio: 230 },
    ],
  },
};
