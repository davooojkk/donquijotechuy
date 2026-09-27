export const cartaData = {
  PIZZAS: {
    tipo: "subcategorias",
    subcategorias: {
      Simples: {
        items: [
          { nombre: "Muzzarella", medioMetro: 650, porcion: 380 },
          { nombre: "Muzzarella con Jamón", medioMetro: 770, porcion: 440 },
          { nombre: "Muzzarella con Panceta", medioMetro: 770, porcion: 440 },
          { nombre: "Muzzarella con Aceitunas", medioMetro: 770, porcion: 440 },
          { nombre: "Muzzarella con Palmitos", medioMetro: 770, porcion: 440 },
          { nombre: "Muzzarella con Morrón", medioMetro: 770, porcion: 440 },
          { nombre: "Muzzarella con Cebolla", medioMetro: 770, porcion: 440 },
          { nombre: "Muzzarella con Ajo", medioMetro: 770, porcion: 440 },
          { nombre: "Muzzarella con Calabresa", medioMetro: 770, porcion: 440 },
          { nombre: "Muzzarella con Longaniza", medioMetro: 770, porcion: 440 },
          { nombre: "Muzzarella con Atún", medioMetro: 770, porcion: 440 },
          { nombre: "Muzzarella con Sardina", medioMetro: 770, porcion: 440 },
          { nombre: "Muzzarella a la Provenzal", medioMetro: 770, porcion: 440 },
          {
            nombre: "Del Monte",
            descripcion: "Palmito y aceitunas.",
            medioMetro: 770,
            porcion: 440,
          },
          {
            nombre: "Primavera",
            descripcion: "Choclo y jamón.",
            medioMetro: 770,
            porcion: 440,
          },
          {
            nombre: "Marea",
            descripcion: "Atún y cebolla.",
            medioMetro: 770,
            porcion: 440,
          },
          {
            nombre: "Napolitana",
            descripcion: "Jamón y tomate.",
            medioMetro: 770,
            porcion: 440,
          },
        ],
      },

      Especiales: {
        items: [
          {
            nombre: "Muzzarella Don Quijote",
            descripcion: "Jamón, aceitunas, panceta, huevo frito y morrón rojo.",
            medioMetro: 910,
            porcion: 540,
          },
          { nombre: "Muzzarella Cuatro Quesos", medioMetro: 870, porcion: 500 },
          { nombre: "Muzzarella Roquefort", medioMetro: 870, porcion: 500 },
          {
            nombre: "Norteña",
            descripcion: "Panceta, jamón y huevo cocido.",
            medioMetro: 870,
            porcion: 500,
          },
          { nombre: "Pollo Catupiry", medioMetro: 870, porcion: 500 },
          {
            nombre: "Portuguesa",
            descripcion: "Jamón, morrón, cebolla, aceitunas y huevo.",
            medioMetro: 870,
            porcion: 500,
          },
          { nombre: "Rúcula y Tomate", medioMetro: 870, porcion: 500 },
          {
            nombre: "Gauchita",
            descripcion: "Panceta y queso Catupiry.",
            medioMetro: 870,
            porcion: 500,
          },
          { nombre: "Muzzarella con Camarón", medioMetro: 870, porcion: 500 },
          {
            nombre: "Vegetariana",
            descripcion: "Rúcula, tomate, palmito y morrón.",
            medioMetro: 870,
            porcion: 500,
          },
          { nombre: "Muzzarella con Champiñones", medioMetro: 870, porcion: 500 },
          {
            nombre: "Granjera",
            descripcion: "Panceta, cebolla y huevo cocido.",
            medioMetro: 870,
            porcion: 500,
          },
        ],
      },
    },
  },

  PARRILLA: {
    tipo: "subcategorias",
    subcategorias: {
      Servicios: {
        items: [{ nombre: "Servicio de Mesa", precio: 60 }],
      },
      Carnes: {
        items: [
          { nombre: "Asado de Tira", precio: 730 },
          { nombre: "Entrecot Mariposa", precio: 830 },
          { nombre: "Vacío", precio: 790 },
          { nombre: "Pollo a las Brasas", descripcion: "Porción.", precio: 440 },
          {
            nombre: "Pamplona",
            descripcion: "Acompañada de guarnición.",
            precio: 570,
          },
        ],
      },

      Achuras: {
        items: [
          { nombre: "Chorizo Parrillero", precio: 260 },
          { nombre: "Salchicha Parrillera Cativelli", precio: 330 },
          { nombre: "Morcilla Cativelli", precio: 260 },
          { nombre: "Chinchulín", precio: 320 },
          { nombre: "Riñón Natural", descripcion: "De ternera.", precio: 320 },
        ],
      },

      Acompañamiento: {
        items: [
          { nombre: "Papa a la Crema Roquefort", precio: 360 },
          { nombre: "Papas a la Manteca", precio: 140 },
          { nombre: "Cebolla a las Brasas", precio: 140 },
          { nombre: "Boniato a las Brasas", precio: 150 },
          { nombre: "Boniato Glaseado", precio: 280 },
          { nombre: "Morrón al Ajillo", precio: 280 },
          { nombre: "Morrón con muzzarella", precio: 320 },
          { nombre: "Morrón relleno", precio: 480 },
          { nombre: "Queso Parrillero al Orégano", precio: 360 },
        ],
      },

      "Para Compartir": {
        items: [
          {
            nombre: 'Brasero "Don Quijote"',
            descripcion: "Para 2 personas.",
            precio: 2250,
          },
          {
            nombre: 'Brasero "Don Quijote"',
            descripcion: "Para 4 personas.",
            precio: 3250,
          },
        ],
      },
    },
  },

  GUARNICIONES: {
    tipo: "simple",
    items: [
      { nombre: "Arroz Blanco", precio: 160 },
      { nombre: "Puré de Papas", precio: 280 },
      { nombre: "Papas Fritas", precio: 260 },
      { nombre: "Papas Fritas a la Crema de Champiñones", precio: 360 },
      { nombre: "Papas Cuñas", precio: 330 },
      { nombre: "Papas Fritas a los Cuatro Quesos", precio: 360 },
      { nombre: "Papas Noisette", precio: 360 },
      { nombre: "Nuggets de pollo", precio: 360 },
    ],
  },

  PASTAS: {
    tipo: "subcategorias",
    subcategorias: {
      Pastas: {
        items: [
          {
            nombre: "Sorrentinos de Jamón y Queso",
            descripcion: "Incluye una salsa a elección.",
            precio: 650,
          },
          {
            nombre: "Raviolones de Verduras",
            descripcion: "Incluye una salsa a elección.",
            precio: 620,
          },
          {
            nombre: "Espagueti",
            descripcion: "Incluye una salsa a elección.",
            precio: 510,
          },
        ],
      },

      Salsas: {
        items: [
          { nombre: "Cuatro Quesos" },
          { nombre: "Boloñesa" },
          { nombre: "Salsa Rosa" },
          { nombre: "Caruso" },
          { nombre: "Salsa Fileto" },
        ],
      },
    },
  },

  MINUTAS: {
    tipo: "simple",
    items: [
      { nombre: "Medialuna", precio: 180 },
      { nombre: "Sándwich Frío", precio: 260 },
      { nombre: "Sándwich Caliente", precio: 290 },
      { nombre: "Sándwich con Muzzarella", precio: 340 },
      { nombre: "Sándwich Napolitano", precio: 370 },
      { nombre: "Sándwich Olímpico", precio: 410 },

      { nombre: "Pancho Común", precio: 200 },
      { nombre: "Pancho con Panceta", precio: 230 },
      { nombre: "Pancho con Muzzarella", precio: 230 },
      {
        nombre: "Pancho Completo",
        descripcion: "Panceta y muzzarella.",
        precio: 270,
      },

      {
        nombre: "Milanesa de Ternera",
        descripcion: "Acompañada de papas fritas.",
        precio: 540,
      },
      {
        nombre: "Milanesa Napolitana",
        descripcion: "Acompañada de papas fritas.",
        precio: 660,
      },
      {
        nombre: "Milanesa Napolitana",
        descripcion: "Para 2 personas. Acompañada de papas fritas.",
        precio: 1200,
      },
      {
        nombre: "Milanesa de Pollo",
        descripcion: "Acompañada de papas fritas.",
        precio: 540,
      },
      { nombre: "Milanesa Americana", precio: 720 },

      {
        nombre: "Entrecot a la Crema de Champiñones",
        descripcion: "Acompañado de papas cuña.",
        precio: 750,
      },
      {
        nombre: "Entrecot a la Mostaza",
        descripcion: "Acompañado de papas cuña.",
        precio: 750,
      },
      {
        nombre: "Entrecot a las 4 Pimientas",
        descripcion: "Acompañado de papas cuña.",
        precio: 750,
      },

      {
        nombre: "Entrecot Don Quijote",
        descripcion: "Para 1 persona.",
        precio: 830,
      },
      {
        nombre: "Entrecot Don Quijote",
        descripcion: "Para 2 personas.",
        precio: 1600,
      },

      {
        nombre: "Chivito al Plato",
        descripcion: "A elección: carne o pollo.",
        precio: 660,
      },
      {
        nombre: "Chivito al Plato",
        descripcion: "Para 2 personas.",
        precio: 1200,
      },
      { nombre: "Chivito Canadiense", descripcion: "Al pan.", precio: 660 },

      {
        nombre: "Pollo a la Crema de Mostaza",
        descripcion: "Acompañado de papas cuña.",
        precio: 540,
      },
      {
        nombre: "Pollo a la Crema de Limón",
        descripcion: "Acompañado de papas cuña.",
        precio: 540,
      },
      {
        nombre: "Suprema a la Plancha",
        descripcion: "Acompañada de guarnición.",
        precio: 460,
      },

      {
        nombre: "Hamburguesa 'Don Quijote'",
        descripcion: "Servida al plato.",
        precio: 550,
      },
      {
        nombre: "Hamburguesa al Plato",
        descripcion: "Acompañada de papas fritas.",
        precio: 420,
      },
      {
        nombre: "Hamburguesa Casera Completa",
        descripcion: "Al pan, acompañada de papas fritas.",
        precio: 550,
      },

      { nombre: "Tortilla de papa con Cebolla", precio: 450 },
      { nombre: "Tortilla Española", precio: 520 },
      { nombre: "Revuelto Gramajo", precio: 520 },
      { nombre: "Omelet Jamón y Queso", precio: 410 },
      { nombre: "Huevos fritos", precio: 50 },
    ],
  },

  MARISCOSYPESCADOS: {
    tipo: "subcategorias",
    subcategorias: {
      Servicios: {
        items: [{ nombre: "Servicio de Mesa", precio: 60 }],
      },
      Pescados: {
        items: [
          {
            nombre: "Cazón a la Plancha",
            descripcion: "Acompañado de papas cuña.",
            precio: 650,
          },
          { nombre: "Cazón a la Crema Roquefort", precio: 720 },
          {
            nombre: "Milanesa de Pescado",
            descripcion: "Acompañada de papas cuña.",
            precio: 650,
          },
          { nombre: "Salmón a la Manteca y Alcaparras", precio: 860 },
          { nombre: "Salmón a la crema de Limón", precio: 860 },
          { nombre: "Lenguado a la Plancha", precio: 660 },
          { nombre: "Lenguado al Roquefort", precio: 790 },
          { nombre: "Miniatura de Cazón", precio: 550 },
        ],
      },

      Mariscos: {
        items: [
          { nombre: "Camarón con Arroz", precio: 820 },
          { nombre: "Camarón al Ajillo", precio: 700 },
          { nombre: "Mejillón con Arroz", precio: 720 },
          { nombre: "Risotto de Camarón", precio: 890 },
          { nombre: "Rabas", precio: 560 },
          { nombre: "Mejillones a la Provenzal", precio: 700 },
        ],
      },
    },
  },

  ENSALADAS: {
    tipo: "simple",
    items: [
      {
        nombre: "'Don Quijote'",
        precio: 490,
        descripcion:
          "Lechuga, tomate, zanahoria, morrón, aceitunas, palmitos, huevos, cebolla y pepinos.",
      },
      { nombre: "Mixta", precio: 230 },
      { nombre: "Mixta con Cebolla", precio: 250 },
      { nombre: "Rusa", precio: 260 },
      { nombre: "Zanahoria Rallada", precio: 170 },
      { nombre: "Tomate al eje con orégano", precio: 140 },
      { nombre: "Rúcula sola", precio: 230 },
      { nombre: "Mixta de Rúcula con Tomate", precio: 310 },
      { nombre: "Remolacha y Zanahoria", precio: 310 },
      { nombre: "Palmito, zanahoria y remolacha", precio: 370 },
      { nombre: "César", precio: 520 },
      { nombre: "Primavera", precio: 520 },
      { nombre: "Vegetales Salteados", precio: 350 },
      {
        nombre: "Ensalada Verde",
        descripcion: "Con aderezo de miel y mostaza.",
        precio: 430,
      },
      {
        nombre: "Ensalada de Camarón",
        descripcion: "Lechuga, tomate cherry, rúcula, pepino, naranja y camarones.",
        precio: 620,
      },
    ],
  },

  CAFETERIA: {
    tipo: "simple",
    items: [
      { nombre: "Café Chico", precio: 90 },
      { nombre: "Café Vaso", precio: 100 },
      { nombre: "Café Grande", precio: 140 },
      { nombre: "Café con leche", precio: 140 },
      { nombre: "Cortado", precio: 140 },
      { nombre: "Capuchino", precio: 180 },
      { nombre: "Té Común", precio: 90 },
      { nombre: "Té de Hierbas", precio: 110 },
      { nombre: "Submarino", precio: 200 },
    ],
  },

  POSTRES: {
    tipo: "subcategorias",
    subcategorias: {
      Caseros: {
        items: [
          {
            nombre: "Flan Natural",
            descripcion: "De leche o coco.",
            precio: 210,
          },
          { nombre: 'Flan con Dulce de Leche "Conaprole"', precio: 230 },
          { nombre: "Príncipe Humberto", precio: 250 },
          { nombre: "Torta 3x3", descripcion: "Helada.", precio: 250 },
          { nombre: "Torta Romana", descripcion: "Helada.", precio: 250 },
        ],
      },

      "Helados Crufi": {
        items: [
          {
            nombre: "Crufi Max",
            descripcion: "Dietético, 0 % azúcar.",
            precio: 150,
          },
          { nombre: "Casatas Triples", precio: 170 },
          { nombre: "Casatas Mixta Chicas", precio: 150 },
          { nombre: "Barritas Crufi Max", precio: 150 },
          { nombre: "Copas Heladas", precio: 160 },
          { nombre: "Palitos de Agua", precio: 70 },
          { nombre: "Sándwiches", precio: 170 },
          { nombre: "Sándwich dietético", precio: 170 },
          { nombre: "Cono helado", precio: 170 },
        ],
      },
    },
  },

  VINOS: {
    tipo: "subcategorias",
    subcategorias: {
      "Bodega Don Pascual": {
        items: [
          { nombre: "Don Pascual Cabernet Sauvignon", precio: 670 },
          { nombre: "Don Pascual Tannat", precio: 670 },
          { nombre: "Don Pascual Chardonnay", precio: 670 },
          { nombre: "Don Pascual Cabernet Reserve", precio: 770 },
          { nombre: "Don Pascual Tannat Reserve", precio: 770 },
          { nombre: "Don Pascual Brut Blanc de Blancs", precio: 670 },
          { nombre: "Don Pascual Brut de Noir", precio: 670 },
          { nombre: "Don Pascual Chardonnay Viognier", precio: 770 },
          {
            nombre: "Don Pascual Clásicos",
            descripcion: "Botellas chicas, tintos.",
            precio: 440,
          },
          { nombre: "Medio y Medio Roldos", precio: 560 },
        ],
      },

      "Vinos H. Stagnari": {
        items: [
          { nombre: "Cabernet Premier", precio: 720 },
          { nombre: "Tannat Premier", precio: 720 },
          { nombre: "Tannat Viejo", precio: 1200 },
        ],
      },

      "Vinos Bianchi (Argentina)": {
        items: [{ nombre: 'Lacrado "Don Valentín"', precio: 690 }],
      },

      "Bodega Norton (Argentina)": {
        items: [{ nombre: "Norton Malbec", precio: 720 }],
      },

      "Concha y Toro (Chile)": {
        items: [
          { nombre: "Reservado Carmenere", precio: 720 },
          { nombre: "Reservado Cabernet Sauvignon", precio: 720 },
          {
            nombre: "Casillero del Diablo",
            descripcion: "Variedades Cabernet o Carmenere.",
            precio: 780,
          },
        ],
      },

      Champagne: {
        items: [
          { nombre: "Freixenet Carta Nevada", precio: 820 },
          { nombre: "Cordón Negro", precio: 820 },
        ],
      },

      "Vino de la Casa Santa Teresa": {
        items: [
          { nombre: "Jarra medio litro", precio: 320 },
          { nombre: "Copa de vino", precio: 180 },
        ],
      },
    },
  },

  BEBIDAS: {
    tipo: "subcategorias",
    subcategorias: {
      Refrescos: {
        items: [
          { nombre: "Refrescos línea Pepsi Cola 500ml", precio: 140 },
          {
            nombre: "Agua Mineral Salus 1 L",
            descripcion: "Con o sin gas.",
            precio: 140,
          },
          { nombre: "Agua saborizada Salus 600ml", precio: 140 },
          { nombre: "Jugo de naranja natural", precio: 200 },
        ],
      },

      Cervezas: {
        items: [
          { nombre: "Cerveza Pilsen o Patricia 1L", precio: 350 },
          {
            nombre: "Cerveza 1 L",
            descripcion: "Zillertal o Stella Artois.",
            precio: 380,
          },
          { nombre: "Cervezas chicas 330ml", precio: 170 },
          { nombre: "Stella Artois sin alcohol", precio: 220 },
        ],
      },

      "Tragos y Licores": {
        items: [
          { nombre: "Whiskies importados", precio: 180 },
          { nombre: "Whisky etiqueta negra", precio: 220 },
          { nombre: "Martini Bianco o Rojo", precio: 130 },
          { nombre: "Fernet con Coca Cola", precio: 250 },
          { nombre: "Gin Tonic", precio: 250 },
          { nombre: "Vodka", precio: 130 },
        ],
      },
    },
  },

  MENUKIDS: {
    tipo: "simple",
    items: [
      { nombre: "Espagueti Kids con salsa", precio: 350 },
      { nombre: "Hamburguesa Kids con fritas", precio: 380 },
      { nombre: "Hamburguesa al plato", precio: 420 },
      { nombre: "Milanesa con fritas", precio: 440 },
    ],
  },
};
