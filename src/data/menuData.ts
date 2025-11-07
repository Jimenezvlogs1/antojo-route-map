export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image?: string;
}

export const menuCategories = [
  { id: 'perros', name: '🌭 PERROS CALIENTES', icon: '🌭' },
  { id: 'salchipapas', name: '🍟 SALCHIPAPAS', icon: '🍟' },
  { id: 'desgranados', name: '🍚 DESGRANADOS', icon: '🍚' },
  { id: 'hamburguesas', name: '🍔 HAMBURGUESAS', icon: '🍔' },
  { id: 'patacones', name: '🍽️ PATACONES Y OTROS', icon: '🍽️' },
  { id: 'arepas', name: '🫓 AREPAS', icon: '🫓' },
];

export const menuItems: MenuItem[] = [
  // PERROS CALIENTES
  { id: 'p1', name: 'PERRO SENCILLO', description: 'Salchicha zenú, queso, ripio, salsas, huevo.', category: 'perros' },
  { id: 'p2', name: 'PERRO DOBLE', description: '2 salchichas zenú, tocineta, queso, ripio, salsas, huevo.', category: 'perros' },
  { id: 'p3', name: 'PERRO TRIPLE', description: '3 salchichas zenú, tocineta, queso, ripio, salsas, huevo.', category: 'perros' },
  { id: 'p4', name: 'PERRO DOBLE QUESO', description: 'Salchicha zenú, tocineta, queso cuajada y mozzarella, ripio, salsas, huevo.', category: 'perros' },
  { id: 'p5', name: 'PERRO RANCHERO', description: 'Salchichas ranchera, tocineta, queso, ripio, salsas, huevo.', category: 'perros' },
  { id: 'p6', name: 'PERRO RANCHERO DESMECHADO', description: 'Salchichas ranchera, carne y pollo desmechado, tocineta, ripio, salsas, huevo.', category: 'perros' },
  { id: 'p7', name: 'PERRO DESMECHADO', description: 'Salchicha zenú, carne y pollo desmechado, tocineta, ripio, salsas, queso, huevo.', category: 'perros' },
  { id: 'p8', name: 'PERRO DESGRANADO', description: 'Salchicha zenú, carne y pollo desmechado, tocineta, maicitos, queso, salsas, huevo.', category: 'perros' },
  { id: 'p9', name: 'PERRO BÚRGUER', description: 'Salchicha zenú, carne de hamburguesa picada, tocineta, queso cuajada, mozzarella, ripio, salsas, huevo.', category: 'perros' },
  { id: 'p10', name: 'PERRO HAWAIANO', description: 'Salchicha zenú, tocineta, piña, jamón, queso, ripio, salsas, huevo.', category: 'perros' },
  { id: 'p11', name: 'PERRO CON MAICITOS', description: 'Salchicha zenú, tocineta, queso, maicitos, ripio, salsas, huevo.', category: 'perros' },
  { id: 'p12', name: 'PERRO SUIZO', description: 'Suiza zenú, tocineta, queso, ripio, salsas, huevo.', category: 'perros' },
  { id: 'p13', name: 'PERRO PIZZA', description: 'Salchicha zenú, tocineta, piña, pepperoni, queso gratinado, ripio, salsas, huevo.', category: 'perros' },
  { id: 'p14', name: 'PERRA', description: 'Tocineta en trozos, queso, ripio, salsas, huevo.', category: 'perros' },
  { id: 'p15', name: 'PERRA ESPECIAL', description: 'Tocineta en trozos, pollo desmechado, queso, ripio, salsas, huevo.', category: 'perros' },

  // SALCHIPAPAS
  { id: 's1', name: 'SALCHIPAPA SENCILLA', description: '400g papa, salchicha tradicional y ranchera, tocineta, salsas, huevo.', category: 'salchipapas' },
  { id: 's2', name: 'SALCHIPAPA ESPECIAL', description: '500g papa, salchicha tradicional y ranchera, pollo en trozos, tocineta, maicitos, salsas, huevo.', category: 'salchipapas' },
  { id: 's3', name: 'SALCHIPAPA MEGA', description: '700g papa, salchicha ranchera y tradicional, filete de pollo y cerdo, tocineta, butifarra, salsas, huevo.', category: 'salchipapas' },
  { id: 's4', name: 'SALCHIDESMECHADO', description: '500g papa, salchicha tradicional y ranchera, pollo y carne desmechada, tocineta, maicitos, salsas, huevo.', category: 'salchipapas' },
  { id: 's5', name: 'PAPAS CHEDDAR', description: '400g papa, cheddar y mozzarella, tocineta, salsa de queso, huevo.', category: 'salchipapas' },
  { id: 's6', name: 'SALCHI GRATINADA', description: 'Salchicha zenú + ranchera, filete de pollo y cerdo, tocineta, mozzarella gratinada, maicitos, salsa.', category: 'salchipapas' },
  { id: 's7', name: 'TOCIPAPAS', description: 'Tocineta, chorizo, pollo desmechado, mozzarella gratinada, maicitos, salsa.', category: 'salchipapas' },

  // DESGRANADOS
  { id: 'd1', name: 'DESGRANADO DE POLLO', description: 'Pollo trozos, tocineta, queso cuajada, maicitos, lechuga, ripio, salsas, huevo.', category: 'desgranados' },
  { id: 'd2', name: 'DESGRANADO DE CERDO', description: 'Cerdo trozos, tocineta, queso cuajada, maicitos, lechuga, ripio, salsas, huevo.', category: 'desgranados' },
  { id: 'd3', name: 'DESGRANADO MIXTO', description: 'Pollo y cerdo trozos, tocineta, queso cuajada, maicitos, lechuga, ripio, salsas, huevo.', category: 'desgranados' },
  { id: 'd4', name: 'DESGRANADO HAWAIANO', description: 'Pollo trozos, tocineta, queso cuajada, maicitos, lechuga, piña, jamón, ripio, salsas, huevo.', category: 'desgranados' },
  { id: 'd5', name: 'DESGRANADO RANCHERO', description: 'Res, salchicha ranchera, tocineta, queso cuajada, maicitos, lechuga, ripio, salsas, huevo.', category: 'desgranados' },
  { id: 'd6', name: 'MAZORCADA', description: 'Carne desmechada, pollo, tocineta, queso gratinado, maicitos, ripio de papa.', category: 'desgranados' },

  // HAMBURGUESAS
  { id: 'h1', name: 'HAMBURGUESA SENCILLA', description: 'Carne de res, queso, lechuga, tomate, cebolla, salsas.', category: 'hamburguesas' },
  { id: 'h2', name: 'HAMBURGUESA DOBLE', description: '2 carnes de res, queso doble, tocineta, lechuga, tomate, salsas.', category: 'hamburguesas' },
  { id: 'h3', name: 'HAMBURGUESA ESPECIAL', description: 'Carne de res, tocineta, queso, huevo, lechuga, tomate, cebolla, salsas.', category: 'hamburguesas' },
  { id: 'h4', name: 'HAMBURGUESA MIXTA', description: 'Carne de res y pollo, queso, tocineta, lechuga, tomate, salsas.', category: 'hamburguesas' },

  // PATACONES
  { id: 'pt1', name: 'PATACÓN DESMECHADO', description: 'Patacón crujiente, carne y pollo desmechado, queso, salsas.', category: 'patacones' },
  { id: 'pt2', name: 'PATACÓN BÚRGUER', description: 'Patacón crujiente, carne de hamburguesa, queso, tocineta, salsas.', category: 'patacones' },
  { id: 'pt3', name: 'TORTILLITA', description: 'Tortilla de maíz rellena con queso y carne.', category: 'patacones' },
  { id: 'pt4', name: 'PICADA', description: 'Surtido de carnes, chorizo, papa criolla, plátano, arepas.', category: 'patacones' },
  { id: 'pt5', name: 'CARNE DE CERDO ASADA', description: 'Carne de cerdo jugosa a la parrilla.', category: 'patacones' },
  { id: 'pt6', name: 'PECHUGA ASADA', description: 'Pechuga de pollo a la parrilla con ensalada.', category: 'patacones' },

  // AREPAS
  { id: 'a1', name: 'AREPA CON QUESO', description: 'Arepa tradicional con queso.', category: 'arepas' },
  { id: 'a2', name: 'AREPA CON HUEVO', description: 'Arepa frita con huevo.', category: 'arepas' },
  { id: 'a3', name: 'AREPA ESPECIAL', description: 'Arepa con carne desmechada, queso y salsas.', category: 'arepas' },
  { id: 'a4', name: 'AREPA MIXTA', description: 'Arepa con pollo y carne desmechada, queso.', category: 'arepas' },
];

export interface ComboItem {
  id: string;
  name: string;
  description: string;
  items: string;
  price?: string;
  image?: string;
}

export const combos: ComboItem[] = [
  {
    id: 'c1',
    name: 'COMBO PERRO + GASEOSA',
    description: 'Perro caliente sencillo con papas fritas y gaseosa personal',
    items: 'Perro Sencillo + Papas + Gaseosa',
    price: '$15.000',
  },
  {
    id: 'c2',
    name: 'COMBO HAMBURGUESA + PAPAS',
    description: 'Hamburguesa especial con porción de papas fritas y gaseosa',
    items: 'Hamburguesa Especial + Papas + Gaseosa',
    price: '$18.000',
  },
  {
    id: 'c3',
    name: 'COMBO SALCHIPAPA ESPECIAL',
    description: 'Salchipapa especial 500g con gaseosa grande',
    items: 'Salchipapa Especial + Gaseosa Grande',
    price: '$20.000',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Carlos Méndez',
    rating: 5,
    comment: '¡Los mejores perros de la ciudad! Las porciones son generosas y el sabor es increíble. Recomiendo el Perro Desmechado.',
  },
  {
    id: 2,
    name: 'María González',
    rating: 5,
    comment: 'La salchipapa mega es brutal, alcanza perfectamente para compartir. Muy buena atención y rápido el servicio.',
  },
  {
    id: 3,
    name: 'Andrés López',
    rating: 5,
    comment: 'Sabor auténtico callejero, como debe ser. Los combos están a muy buen precio y la calidad es excelente.',
  },
];
