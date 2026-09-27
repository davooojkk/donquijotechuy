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
          { nombre: "Del Monte (palmito, aceitunas)", medioMetro: 600 },
          { nombre: "Primavera (choclo, jamón)", medioMetro: 600 },
          { nombre: "Marea (atún, cebolla)", medioMetro: 600 },
          { nombre: "Napolitana (jamón, tomate)", medioMetro: 600 },
        ],
      },
      Especiales: {
        items: [
          { nombre: "Muzzarella 4 Quesos", medioMetro: 680 },
          { nombre: "Muzzarella con Roquefort", medioMetro: 680 },
          { nombre: "Norteña (panceta, jamón, huevo cocido)", medioMetro: 680 },
          { nombre: "Pollo Catupiry", medioMetro: 680 },
          {
            nombre: "Portuguesa (jamón, morrón, cebolla, aceitunas, huevo)",
            medioMetro: 680,
          },
          { nombre: "Rúcula y Tomate", medioMetro: 680 },
          { nombre: "Gauchita (panceta, queso catupiry)", medioMetro: 680 },
          {
            nombre: "Vegetariana (rúcula, tomate, palmito, morrón)",
            medioMetro: 680,
          },
          { nombre: "Muzzarella con Champiñones", medioMetro: 680 },
          { nombre: "Granjera (panceta, cebolla, huevo cocido)", medioMetro: 680 },
        ],
      },
      "Súper Especiales": {
        items: [
          { nombre: "Muzzarella con Camarón", medioMetro: 750 },
          {
            nombre:
              "Muzzarella Don Quijote (jamón, aceitunas, panceta, huevo frito, morrón rojo)",
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
          { nombre: "Asado con Guarnición", precio: 500 },
          { nombre: "Entrecot con Guarnición", precio: 600 },
          { nombre: "Entrecot con 'Champi'", precio: 650 },
          { nombre: "Entrecot con Pimienta", precio: 650 },
          { nombre: "Entrecot con Mostaza", precio: 650 },
          { nombre: "Muslo con Guarnición", precio: 400 },
          {
            nombre:
              "Entrecot para Uno: Rusa, Mixta, arroz, Jamón, Huevo, Muzzarella y papas",
            precio: 700,
          },
          { nombre: "Entrecot a la Pizza", precio: 650 },
        ],
      },
      "Para Compartir": {
        items: [
          {
            nombre:
              "Entrecot para Dos: Rusa, Mixta, arroz, Jamón, Huevo, Muzzarella y papas",
            precio: 1300,
          },
          {
            nombre:
              "Brasero para Dos: Asado, Entrecot, Chorizo, Salchicha, Morrón al ajillo, Chinchulín, Riñón, papa, cebolla, morcilla",
            precio: 1800,
          },
          {
            nombre:
              "Brasero para Cuatro: Asado, Entrecot, Chorizo, Salchicha, Morrón al ajillo, Chinchulín, Riñón, papa, cebolla, morcilla",
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
      { nombre: "Lenguado a la plancha con guarnición", precio: 550 },
      {
        nombre: "Salmón a la plancha (manteca y alcaparras o al limón)",
        precio: 750,
      },
      {
        nombre: "Cazón a la plancha con guarnición",
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
        nombre:
          "Baurú Don Quijote: Mayonesa, Ketchup, Mostaza, Lechuga, Tomate, Choclo, Arvejas, Jamón, Queso, Huevo, Carne, Pollo, Calabresa, Panceta.",
        precio: 330,
      },
      { nombre: "Baurú Calabresa", precio: 280 },
      { nombre: "Baurú Corazón de Pollo", precio: 300 },
      { nombre: "Porción de Fritas acompañante al Baurú", precio: 50 },
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
          { nombre: "Hamburguesa Completa (Con Fritas)", precio: 420 },
          { nombre: "Hamburguesa Kids (Con Fritas)", precio: 280 },
        ],
      },
      Milanesas: {
        items: [
          { nombre: "Napolitana con Guarnición", precio: 450 },
          { nombre: "Napolitana para Dos con Guarnición", precio: 880 },
          {
            nombre: "Milanesa (carne o pollo) con Guarnición",
            precio: 380,
          },
          { nombre: "Milanesa al Pan", precio: 380 },
          { nombre: "Milanesa al Pan Completa", precio: 400 },
          { nombre: "Milanesa al Pan Completa (Con Fritas)", precio: 450 },
        ],
      },
      Chivitos: {
        items: [
          { nombre: "Chivito al pan", precio: 350 },
          { nombre: "Chivito Canadiense", precio: 480 },
          {
            nombre:
              "Chivito Para Uno (Rusa, Mixta, Queso, Jamón, Panceta, Huevo, Muzzarella y fritas)",
            precio: 480,
          },
          {
            nombre:
              "Chivito Para Dos (Rusa, Mixta, Queso, Jamón, Panceta, Huevo, Muzzarella y fritas)",
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
          { nombre: "Nuggets con Papas Fritas", precio: 350 },
          { nombre: "Gramajo", precio: 400 },
          { nombre: "Pollo con Guarnición", precio: 400 },
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
      { nombre: "Ensalada mixta: Lechuga y tomate", precio: 180 },
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
