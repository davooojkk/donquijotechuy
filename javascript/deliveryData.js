export const deliveryData = {

    PIZZAS: {
        tipo: "subcategorias",

        subcategorias: {
            "Tradicionales": {
                items: [
                    { nombre: "Muzzarella", medioMetro: 500 },
                    { nombre: "Muzzarella con Jamón", medioMetro: 600 },
                    { nombre: "Muzzarella con Panceta", medioMetro: 600 },
                    { nombre: "Muzzarella con Aceitunas", medioMetro: 600 },
                    { nombre: "Muzzarella con Palmitos", medioMetro: 600 },
                    { nombre: "Muzzarella con Morrón", medioMetro: 600 },
                    { nombre: "Muzzarella con Cebolla", medioMetro: 600 },
                    { nombre: "Muzzarella con Ajo", medioMetro: 600 },
                    { nombre: "Muzzarella con Calabreza", medioMetro: 600 },
                    { nombre: "Muzzarella con Longaniza", medioMetro: 600 },
                    { nombre: "Muzzarella con Atún", medioMetro: 600 },
                    { nombre: "Muzzarella con Sardina", medioMetro: 600 },
                    { nombre: "Muzzarella a la Provenzal", medioMetro: 600 },
                    { nombre: "Del Monte", medioMetro: 600 },
                    { nombre: "Primavera", medioMetro: 600 },
                    { nombre: "Marea", medioMetro: 600 },
                    { nombre: "Napolitana", medioMetro: 600 },
                ]
            },
            "Especiales": {
                items: [
                    { nombre: "Muzzarella 4 Quesos", medioMetro: 680 },
                    { nombre: "Muzzarella con Roqueford", medioMetro: 680 },
                    { nombre: "Norteña", medioMetro: 680 },
                    { nombre: "Pollo Catupiry", medioMetro: 680 },
                    { nombre: "Portuguesa", medioMetro: 680 },
                    { nombre: "Rucula y Tomate", medioMetro: 680 },
                    { nombre: "Gauchita", medioMetro: 680 },
                    { nombre: "Vegetariana", medioMetro: 680 },
                    { nombre: "Muzzarella con Champignon", medioMetro: 680 },
                    { nombre: "Granjera", medioMetro: 680 },
                ]
            },
            "Super Especiales": {
                items: [
                    { nombre: "Muzzarella con Camarón", medioMetro: 750 },
                    { nombre: "Muzzarella Don Quijote", medioMetro: 680 },
                ]
            }
        }
    },
    PARRILLA: {
        tipo: "subcategorias",

        subcategorias: {
            "Individual": {
                items: [
                    { nombre: "Asado con Guarnición", precio: 500 },
                    { nombre: "Entrecot con Guarnición", precio: 600 },
                    { nombre: "Entrecot con 'Champi'", precio: 650 },
                    { nombre: "Entrecot con Pimienta", precio: 650 },
                    { nombre: "Entrecot con Mostaza", precio: 650 },
                    { nombre: "Entrecot para Uno: Rusa, Mixta, arroz, Jamón, Huevo, Muzzarella y papas", precio: 700 },
                    { nombre: "Entrecot a la Pizza", precio: 650 },
                ]
            },
            "Para Compartir": {
                items: [
                    { nombre: "Entrecot para Dos: Rusa, Mixta, arroz, Jamón, Huevo, Muzzarella y papas", precio: 1300 },
                    { nombre: "Brasero para Dos: Asado, Entrecot, Chorizo, Salchicha, Morrón al ajillo, Chinchulin, Riñon, papa, cebolla, morrongillo", precio: 1800 },
                    { nombre: "Brasero para Cuatro: Asado, Entrecot, Chorizo, Salchicha, Morrón al ajillo, Chinchulin, Riñon, papa, cebolla, morrongillo", precio: 2700 },
                ]
            }
        }
    },
    MARISCOS: {
        tipo: "simple",
        items: [
            { nombre: "Camarón con Arroz", precio: 650 },
            { nombre: "Miniatura de Pescado", precio: 400 },
            { nombre: "Mejillones con arroz", precio: 550 },
            { nombre: "Milanesa de Pescado", precio: 480 },
        ]
    },
    SANDWICH: {
        tipo: "simple",
        items: [
            { nombre: "Sandwich Frío", precio: 180 },
            { nombre: "Sandwich Caliente", precio: 200 },
            { nombre: "Sandwich Napolitano", precio: 280 },
            { nombre: "Sandwich Olimpico", precio: 300 },
            { nombre: "Sandwich con Muzzarella", precio: 250 },
            { nombre: "Sandwich Don Quijote", precio: 350 },
        ]
    },
    PANCHOS: {
        tipo: "simple",
        items: [
            { nombre: "Pancho", precio: 150 },
            { nombre: "Pancho con Muzzarella", precio: 170 },
            { nombre: "Pancho con Panceta", precio: 170 },
            { nombre: "Pancho Porteño", precio: 170 },
            { nombre: "Pancho Completo", precio: 200 },

        ]
    },
    BAURU: {
        tipo: "simple",
        items: [
            { nombre: "Bauru Carne o Pollo", precio: 250 },
            { nombre: "Bauru Pancho", precio: 280 },
            { nombre: "Bauru Don Quijote", precio: 330 },
            { nombre: "Bauru para DOS con fritas", precio: 650 },
            { nombre: "Bauru Calabresa", precio: 280 },
            { nombre: "Bauru Corazón de Pollo", precio: 300 },
        ]
    },
    PASTAS: {
        tipo: "subcategorias",
        subcategorias: {
            "Pastas": {
                items: [
                    { nombre: "Sorrentinos", precio: 520 },
                    { nombre: "Raviolones", precio: 500 },
                    { nombre: "Espaguetti", precio: 300 },
                ]
            },
            "Salsas": {
                items: [
                    { nombre: "Bolognesa" },
                    { nombre: "Cuatro Quesos" },
                    { nombre: "Caruso" },
                    { nombre: "Fileto" },
                    { nombre: "Rosa" },
                    { nombre: "Tuco de Pollo" },
                ]
            }
        },
    },
    MINUTAS: {
        tipo: "subcategorias",
        "subcategorias": {
            "Hamburguesas": {
                items: [
                    { nombre: "Hamburguesa al Pan", precio: 350 },
                    { nombre: "Hamburguesa Completa", precio: 420 },
                    { nombre: "Hamburguesa Kids", precio: 280 },
                ]
            },
            "Milanesas": {
                items: [
                    { nombre: "Napolitana con Guarnición", precio: 450 },
                    { nombre: "Napolitana para Dos con Guarnición", precio: 880 },
                    { nombre: "Milanesa (carne o pollo) con Guarnición", precio: 380 },
                    { nombre: "Milanesa al Pan con Fritas", precio: 400 },
                    { nombre: "Milanesa al Pan Completa", precio: 450 },
                ]
            },
            "Chivitos": {
                items: [
                    { nombre: "Chivito al pan", precio: 350 },
                    { nombre: "Chivito Canadiense", precio: 480 },
                    { nombre: "Chivito Para Uno (Rusa, Mixta, Queso, Jamón, Panceta, Huevo, Muzzarella y fritas)", precio: 480 },
                    { nombre: "Chivito Para Dos (Rusa, Mixta, Queso, Jamón, Panceta, Huevo, Muzzarella y fritas)", precio: 900 },
                ]
            },
            "Tortillas": {
                items: [
                    { nombre: "Tortilla con Cebolla", precio: 300 },
                    { nombre: "Tortilla Española", precio: 350 },
                    { nombre: "Tortilla Don Quijote", precio: 420 },
                ]
            },
            "Otros": {
                items: [
                    { nombre: "Nuggets con Papas Fritas", precio: 350 },
                    { nombre: "Gramajo", precio: 400 },
                ]
            },
        }
    },
    GUARNICIONES: {
        tipo: "simple",
        items: [
            { nombre: "Fritas", precio: 200 },
            { nombre: "Fritas Champi", precio: 250 },
            { nombre: "Fritas Cuatro Quesos", precio: 250 },
            { nombre: "Fritas Cheddar", precio: 280 },
            { nombre: "Fritas Don Quijote", precio: 350 },
            { nombre: "Papas Noisette", precio: 250 },
            { nombre: "Fritas con Cheddar y Panceta", precio: 250 },
        ]
    },
    ENSALADAS: {
        tipo: "simple",
        items: [
            { nombre: "Don Quijote", precio: 350 },
            { nombre: "Ensalada Cesar", precio: 400 },
            { nombre: "Remolacha y Zanahoria", precio: 230 },
            { nombre: "Ensalada Primavera", precio: 400 },
            { nombre: "Rucula y Tomate", precio: 240 },
            { nombre: "Palmito, Zanahoria y Remolacha", precio: 280 },


        ]
    },
    BEBIDAS: {
        tipo: "simple",
        items: [
            { nombre: "Cerveza Litro", precio: 250 },
            { nombre: "Zillertal Litro", precio: 280 },
            { nombre: "Stella Artois Litro", precio: 280 },
            { nombre: "Coca Cola 2L", precio: 120 },
            { nombre: "Refresco Linea Pepsi 600ml", precio: 80 },
            { nombre: "Pomelo - Paso de Los Toros 1.5L", precio: 150 },
            { nombre: "Agua Salus", precio: 60 },
            { nombre: "Salus Saborizada", precio: 70 },
        ]
    },
    POSTRES: {
        tipo: "simple",
        items: [
            { nombre: "Torta 3X3", precio: 180 },
            { nombre: "Flan", precio: 180 },
            { nombre: "Flan con Dulce", precio: 200 },
            { nombre: "Torta Ramona", precio: 180 },
            { nombre: "Principe Humberto", precio: 200 },




        ]
    },
}