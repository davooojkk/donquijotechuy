export const cartaData = {

  PIZZAS: {
    tipo: "subcategorias",
    subcategorias: {
        "Simples": {
        items: [
      { nombre: "Muzzarella", medioMetro: 650, porcion: 380 },
      { nombre: "Muzzarella con Jamón", medioMetro: 770, porcion: 440 },
      { nombre: "Muzzarella con Panceta", medioMetro: 770, porcion: 440 },
      { nombre: "Muzzarella con Aceitunas", medioMetro: 770, porcion: 440 },
      { nombre: "Muzzarella con Palmitos", medioMetro: 770, porcion: 440 },
      { nombre: "Muzzarella con Morrón", medioMetro: 770, porcion: 440 },
      { nombre: "Muzzarella con Cebolla", medioMetro: 770, porcion: 440 },
      { nombre: "Muzzarella con Ajo", medioMetro: 770, porcion: 440 },
      { nombre: "Muzzarella con Calabreza", medioMetro: 770, porcion: 440 },
      { nombre: "Muzzarella con Longaniza", medioMetro: 770, porcion: 440 },
      { nombre: "Muzzarella con Atún", medioMetro: 770, porcion: 440 },
      { nombre: "Muzzarella con Morrón", medioMetro: 770, porcion: 440 },
      { nombre: "Muzzarella con Sardina", medioMetro: 770, porcion: 440 },
      { nombre: "Muzzarella a la Provenzal", medioMetro: 770, porcion: 440 },
      { nombre: "Del Monte", medioMetro: 770, porcion: 440 },
      { nombre: "Primavera", medioMetro: 770, porcion: 440 },
      { nombre: "Marea", medioMetro: 770, porcion: 440 },
      { nombre: "Napolitana", medioMetro: 770, porcion: 440 },
        ]
      },

      "Especiales": {
        items: [
          { nombre: "Muzzarella Don Quijote", medioMetro: 910, porcion: 540 },
          { nombre: "Muzzarella Cuatro Quesos", medioMetro: 870, porcion: 500 },
          { nombre: "Muzzarella Roqueford", medioMetro: 870, porcion: 500 },
          { nombre: "Norteña", medioMetro: 870, porcion: 500 },
          { nombre: "Pollo Catupiry", medioMetro: 870, porcion: 500 },
          { nombre: "Portuguesa", medioMetro: 870, porcion: 500 },
          { nombre: "Rucula y Tomate", medioMetro: 870, porcion: 500 },
          { nombre: "Gauchita (Panceta + Queso Catupiry)", medioMetro: 870, porcion: 500 },
          { nombre: "Muzzarella con Camarón", medioMetro: 870, porcion: 500 },
          { nombre: "Vegetariana (Rucula + Tomate + Palmito + Morrón)", medioMetro: 870, porcion: 500 },
          { nombre: "Muzzarella con Champignon", medioMetro: 870, porcion: 500 },
          { nombre: "Granjera (Panceta + Cebolla + Huevo Cocido)", medioMetro: 870, porcion: 500 },
        ]
      },
    },
  },

  PARRILLA: {
    tipo: "subcategorias",
    subcategorias: {
      "Servicios": {
        items: [
          { nombre: "Servicio de Mesa", precio: 60 },

        ]
      },
      "Carnes": {
        items: [
          { nombre: "Asado de Tira", precio: 730 },
          { nombre: "Entrecot Mariposa", precio: 830 },
          { nombre: "Vacío", precio: 790 },
          { nombre: "Pollo a las brasas (porción)", precio: 440 },
          { nombre: "Pamplona con guarnición", precio: 570 },
        ]
      },

      "Achuras": {
        items: [
          { nombre: "Chorizo Parrillero", precio: 260 },
          { nombre: "Salchicha Parrillera Cativelli", precio: 330 },
          { nombre: "Morcilla Cativelli", precio: 260 },
          { nombre: "Chinchulín", precio: 320 },
          { nombre: "Riñón Natural (de ternera)", precio: 320 },
        ]
      },

      "Acompañamiento": {
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

        ]
      },

      "Para Compartir": {
        items: [
          { nombre: 'Brasero "Don Quijote" (para 2 personas)', precio: 2250 },
          { nombre: 'Brasero "Don Quijote" (para 4 personas)', precio: 3250 },
        ]
      }
    }
  },

  GUARNICIONES: {
    tipo: "simple",
    items: [
      { nombre: "Arroz Blanco", precio: 160 },
      { nombre: "Puré de Papas", precio: 280 },
      { nombre: "Papas Fritas", precio: 260 },
      { nombre: "Papas Fritas a la Crema Champignon", precio: 360 },
      { nombre: "Papas Cuñas", precio: 330 },
      { nombre: "Papas Fritas a los Cuatro Quesos", precio: 360 },
      { nombre: "Papas Noissettes", precio: 360 },
      { nombre: "Nuggets de pollo", precio: 360 },
    ]
  },

  PASTAS: {
    tipo: "subcategorias",
    subcategorias: {

      "Pastas": {
        items: [
          { nombre: "Sorrentinos de Jamón y Queso", precio: 650 },
          { nombre: "Raviolones de Verduras", precio: 620 },
          { nombre: "Espagueti", precio: 510 },
        ]
      },

      "Salsas": {
        items: [
          { nombre: "Cuatro Quesos" },
          { nombre: "Boloñesa" },
          { nombre: "Salsa Rosa" },
          { nombre: "Caruso" },
          { nombre: "Salsa Fileto" },
        ]
      }
    }
  },

  MINUTAS: {
  tipo: "simple",
  items: [
    { nombre: "Media Luna", precio: 180 },
    { nombre: "Sandwich Frío", precio: 260 },
    { nombre: "Sandwich Caliente", precio: 290 },
    { nombre: "Sandwich con Muzzarella", precio: 340 },
    { nombre: "Sandwich Napolitano", precio: 370 },
    { nombre: "Sandwich Olímpico", precio: 410 },

    { nombre: "Pancho Común", precio: 200 },
    { nombre: "Pancho con Panceta", precio: 230 },
    { nombre: "Pancho con Muzzarella", precio: 230 },
    { nombre: "Pancho Completo Panceta y Muzzarella", precio: 270 },

    { nombre: "Milanesa de Ternera con Fritas", precio: 540 },
    { nombre: "Milanesa Napolitana con fritas", precio: 660 },
    { nombre: "Milanesa Napolitana para 2 con fritas", precio: 1200 },
    { nombre: "Milanesa de Pollo con fritas", precio: 540 },
    { nombre: "Milanesa Americana", precio: 720 },

    { nombre: "Entrecot a la crema con Champignon con Papas Cuña", precio: 750 },
    { nombre: "Entrecot a la Mostaza con Papas Cuña", precio: 750 },
    { nombre: "Entrecot a la 4 Pimienta con Papas Cuña", precio: 750 },

    { nombre: "Entrecot Don Quijote para 1 persona", precio: 830 },
    { nombre: "Entrecot Don Quijote para 2 personas", precio: 1600 },

    { nombre: "Chivito al Plato (carne o pollo)", precio: 660 },
    { nombre: "Chivito al Plato para 2 personas", precio: 1200 },
    { nombre: "Chivito Canadiense (al pan)", precio: 660 },

    { nombre: "Pollo a la Crema de Mostaza con cuñas", precio: 540 },
    { nombre: "Pollo a la Crema de Limón con Papas Cuña", precio: 540 },
    { nombre: "Suprema a la Plancha con guarnición", precio: 460 },

    { nombre: "Hamburguesa 'Don Quijote' al Plato", precio: 550 },
    { nombre: "Hamburguesa al Plato con Fritas", precio: 420 },
    { nombre: "Hamburguesa casera al pan con fritas completa", precio: 550 },

    { nombre: "Tortilla de papa con Cebolla", precio: 450 },
    { nombre: "Tortilla Española", precio: 520 },
    { nombre: "Revuelto Gramajo", precio: 520 },
    { nombre: "Omelet Jamón y Queso", precio: 410 },
    { nombre: "Huevos fritos", precio: 50 }
  ]
},

  MARISCOSYPESCADOS: {
    tipo: "subcategorias",
    subcategorias: {
      "Servicios": {
        items: [
          { nombre: "Servicio de Mesa", precio: 60 },

        ]
      },
      "Pescados": {
        items: [
          { nombre: "Cazón a la Plancha (con papas cuñas)", precio: 650 },
          { nombre: "Cazón a la Crema Roquefort", precio: 720 },
          { nombre: "Milanesa de Pescado (con papas cuña)", precio: 650 },
          { nombre: "Salmón a la Manteca y Alcaparras", precio: 860 },
          { nombre: "Salmón a la crema de Limón", precio: 860 },
          { nombre: "Lenguado a la Plancha", precio: 660 },
          { nombre: "Lenguado al Roquefort", precio: 790 },
          { nombre: "Miniatura de Cazón", precio: 550 },
        ]
      },

      "Mariscos": {
        items: [
          { nombre: "Camarón con Arroz", precio: 820 },
          { nombre: "Camarón al Ajillo", precio: 700 },
          { nombre: "Mejillón con Arroz", precio: 720 },
          { nombre: "Risotto de Camarón", precio: 890 },
          { nombre: "Rabas", precio: 560 },
          { nombre: "Mejillones a la Provenzal", precio: 700 },
        ]
      }
    }
  },

  ENSALADAS: {
    tipo: "simple",
    items: [
      { nombre: "'Don Quijote'", precio: 490 },
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
      { nombre: "Ensalada Verde (Miel y Mostaza)", precio: 430 },
      { nombre: "Ensalada de Camarón", precio: 620 },
    ]
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
    ]
  },

  POSTRES: {
    tipo: "subcategorias",
    subcategorias: {

      "Caseros": {
        items: [
          { nombre: "Flan de Leche o Coco naturales", precio: 210 },
          { nombre: 'Flan con Dulce de Leche "Conaprole"', precio: 230 },
          { nombre: "Príncipe Humberto", precio: 250 },
          { nombre: "Torta 3x3 (Helada)", precio: 250 },
          { nombre: "Torta Romana (Helada)", precio: 250 },
        ]
      },

      "Helados Crufi": {
        items: [
          { nombre: "Crufi Max 0% Azúcar dietético", precio: 150 },
          { nombre: "Casatas Triples", precio: 170 },
          { nombre: "Casatas Mixta Chicas", precio: 150 },
          { nombre: "Barritas Crufi Max", precio: 150 },
          { nombre: "Copas Heladas", precio: 160 },
          { nombre: "Palitos de Agua", precio: 70 },
          { nombre: "Sandwiches", precio: 170 },
          { nombre: "Sandwiches dietético", precio: 170 },
          { nombre: "Cono helado", precio: 170 },
        ]
      }
    }
  },

  VINOS: {
  tipo: "subcategorias",
  subcategorias: {

    "Bodega Don Pascual": {
      items: [
        { nombre: 'Don Pascual Cabernet Sauvignon', precio: 670 },
        { nombre: 'Don Pascual Tannat', precio: 670 },
        { nombre: 'Don Pascual Chardonnay', precio: 670 },
        { nombre: 'Don Pascual Cabernet Reserve', precio: 770 },
        { nombre: 'Don Pascual Tannat Reserve', precio: 770 },
        { nombre: 'Don Pascual Brut Blanc de Blancs', precio: 670 },
        { nombre: 'Don Pascual Brut de Noir', precio: 670 },
        { nombre: 'Don Pascual Chardonnay Viogner', precio: 770 },
        { nombre: 'Don Pascual Clásicos (Chicos, Tintos)', precio: 440 },
        { nombre: 'Medio y Medio Roldos', precio: 560 }
      ]
    },

    "Vinos H. Stagnari": {
      items: [
        { nombre: 'Cabernet Premier', precio: 720 },
        { nombre: 'Tannat Premier', precio: 720 },
        { nombre: 'Tannat Viejo', precio: 1200 }
      ]
    },

    "Vinos Bianchi (Argentina)": {
      items: [
        { nombre: 'Lacrado "Don Valentín"', precio: 690 }
      ]
    },

    "Bodega Norton (Argentina)": {
      items: [
        { nombre: 'Norton Malbec', precio: 720 }
      ]
    },

    "Concha y Toro (Chile)": {
      items: [
        { nombre: 'Reservado Carmenere', precio: 720 },
        { nombre: 'Reservado Cabernet Sauvignon', precio: 720 },
        { nombre: 'Casillero del Diablo (Cabernet / Carmenere)', precio: 780 }
      ]
    },

    "Champagne": {
      items: [
        { nombre: 'Freixenet Carta Nevada', precio: 820 },
        { nombre: 'Cordón Negro', precio: 820 }
      ]
    },

    "Vino de la Casa Santa Teresa": {
      items: [
        { nombre: 'Jarra medio litro', precio: 320 },
        { nombre: 'Copa de vino', precio: 180 }
      ]
    }

  }
},

  BEBIDAS: {
  tipo: "subcategorias",
  subcategorias: {

    "Refrescos": {
      items: [
        { nombre: "Refrescos línea Pepsi Cola 500ml", precio: 140 },
        { nombre: "Agua mineral Salus 1L (con o sin gas)", precio: 140 },
        { nombre: "Agua saborizada Salus 600ml", precio: 140 },
        { nombre: "Jugo de naranja natural", precio: 200 }
      ]
    },

    "Cervezas": {
      items: [
        { nombre: "Cerveza Pilsen o Patricia 1L", precio: 350 },
        { nombre: "Cerveza Zillertal o Stella Artois 1L", precio: 380 },
        { nombre: "Cervezas chicas 330ml", precio: 170 },
        { nombre: "Stella Artois sin alcohol", precio: 220 }
      ]
    },

    "Tragos y Licores": {
      items: [
        { nombre: "Whisky importados", precio: 180 },
        { nombre: "Whisky etiqueta negra", precio: 220 },
        { nombre: "Martini Bianco o Rojo", precio: 130 },
        { nombre: "Fernet con Coca Cola", precio: 250 },
        { nombre: "Gin Tonic", precio: 250 },
        { nombre: "Vodka", precio: 130 }
      ]
    }

  }
},

  MENUKIDS: {
    tipo: "simple",
    items: [
      { nombre: "Espagueti Kids con salsa", precio: 350 },
      { nombre: "Hamburguesa Kids con fritas", precio: 380 },
      { nombre: "Hamburguesa al plato", precio: 420 },
      { nombre: "Milanesa con fritas", precio: 440 }
    ]
},

};
