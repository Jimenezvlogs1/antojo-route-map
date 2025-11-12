export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image?: string;
  price?: string;
}

export const menuCategories = [
  { id: 'hamburguesas', name: 'HAMBURGUESAS', icon: '🍔' },
  { id: 'perros', name: 'PERROS CALIENTES', icon: '🌭' },
  { id: 'salchipapas', name: 'SALCHIPAPAS', icon: '🍟' },
  { id: 'desgranados', name: 'DESGRANADOS', icon: '🍚' },
  { id: 'arepas', name: 'AREPAS', icon: '🫓' },
  { id: 'patacones', name: 'PATACONES Y OTROS', icon: '🍽️' },
];

export const menuItems: MenuItem[] = [
  // PERROS CALIENTES
  { id: 'p1', name: 'PERRO SENCILLO', description: 'Salchicha zenú, queso, ripio, salsas, huevo.', category: 'perros', price: '$13.000' },
  { id: 'p2', name: 'PERRO DOBLE', description: '2 salchichas zenú, tocineta, queso, ripio, salsas, huevo.', category: 'perros', price: '$16.000' },
  { id: 'p3', name: 'PERRO TRIPLE', description: '3 salchichas zenú, tocineta, queso, ripio, salsas, huevo.', category: 'perros', price: '$21.000' },
  { id: 'p4', name: 'PERRO DOBLE QUESO', description: 'Salchicha zenú, tocineta, queso cuajada y mozzarella, ripio, salsas, huevo.', category: 'perros', price: '$17.000' },
  { id: 'p5', name: 'PERRO RANCHERO', description: 'Salchichas ranchera, tocineta, queso, ripio, salsas, huevo.', category: 'perros', price: '$18.000' },
  { id: 'p6', name: 'PERRO RANCHERO DESMECHADO', description: 'Salchichas ranchera, carne y pollo desmechado, tocineta, ripio, salsas, huevo.', category: 'perros', price: '$20.000' },
  { id: 'p7', name: 'PERRO DESMECHADO', description: 'Salchicha zenú, carne y pollo desmechado, tocineta, ripio, salsas, queso, huevo.', category: 'perros', price: '$19.000' },
  { id: 'p8', name: 'PERRO DESGRANADO', description: 'Salchicha zenú, carne y pollo desmechado, tocineta, maicitos, queso, salsas, huevo.', category: 'perros', price: '$23.000' },
  { id: 'p9', name: 'PERRO BÚRGUER', description: 'Salchicha zenú, carne de hamburguesa picada, tocineta, queso cuajada, mozzarella, ripio, salsas, huevo.', category: 'perros', price: '$25.000' },
  { id: 'p10', name: 'PERRO HAWAIANO', description: 'Salchicha zenú, tocineta, piña, jamón, queso, ripio, salsas, huevo.', category: 'perros', price: '$18.000' },
  { id: 'p11', name: 'PERRO CON MAICITOS', description: 'Salchicha zenú, tocineta, queso, maicitos, ripio, salsas, huevo.', category: 'perros', price: '$18.000' },
  { id: 'p12', name: 'PERRO SUIZO', description: 'Suiza zenú, tocineta, queso, ripio, salsas, huevo.', category: 'perros', price: '$18.000' },
  { id: 'p13', name: 'PERRO PIZZA', description: 'Salchicha zenú, tocineta, piña, pepperoni, queso gratinado, ripio, salsas, huevo.', category: 'perros', price: '$18.000' },
  { id: 'p14', name: 'PERRA', description: 'Tocineta en trozos, queso, ripio, salsas, huevo.', category: 'perros', price: '$15.000' },
  { id: 'p15', name: 'PERRA ESPECIAL', description: 'Tocineta en trozos, pollo desmechado, queso, ripio, salsas, huevo.', category: 'perros', price: '$20.000' },

  // SALCHIPAPAS
  { id: 's1', name: 'SALCHIPAPA SENCILLA', description: '400g papa, salchicha tradicional y ranchera, tocineta, salsas, huevo.', category: 'salchipapas', price: '$15.000' },
  { id: 's2', name: 'SALCHIPAPA ESPECIAL', description: '500g papa, salchicha tradicional y ranchera, pollo en trozos, tocineta, maicitos, salsas, huevo.', category: 'salchipapas', price: '$24.000' },
  { id: 's3', name: 'SALCHIPAPA MEGA', description: '700g papa, salchicha ranchera y tradicional, filete de pollo y cerdo, tocineta, butifarra, salsas, huevo.', category: 'salchipapas', price: '$50.000' },
  { id: 's4', name: 'SALCHIDESMECHADO', description: '500g papa, salchicha tradicional y ranchera, pollo y carne desmechada, tocineta, maicitos, salsas, huevo.', category: 'salchipapas', price: '$30.000' },
  { id: 's5', name: 'PAPAS CHEDDAR', description: '400g papa, cheddar y mozzarella, tocineta, salsa de queso, huevo.', category: 'salchipapas', price: '$17.000' },
  { id: 's6', name: 'SALCHI GRATINADA', description: 'Salchicha zenú + ranchera, filete de pollo y cerdo, tocineta, mozzarella gratinada, maicitos, salsa.', category: 'salchipapas', price: '$27.000' },
  { id: 's7', name: 'TOCIPAPAS', description: 'Tocineta, chorizo, pollo desmechado, mozzarella gratinada, maicitos, salsa.', category: 'salchipapas', price: '$20.000' },

  // DESGRANADOS
  { id: 'd1', name: 'DESGRANADO DE POLLO', description: 'Pollo en trozos, tocineta, queso cuajada, maicitos, lechuga, ripio, salsas, huevo.', category: 'desgranados', price: '$20.000' },
  { id: 'd2', name: 'DESGRANADO DE CERDO', description: 'Cerdo en trozos, tocineta, queso cuajada, maicitos, lechuga, ripio, salsas, huevo.', category: 'desgranados', price: '$50.000' },
  { id: 'd3', name: 'DESGRANADO MIXTO', description: 'Pollo y cerdo en trozos, tocineta, queso cuajada, maicitos, lechuga, ripio, salsas, huevo.', category: 'desgranados', price: '$25.000' },
  { id: 'd4', name: 'DESGRANADO HAWAIANO', description: 'Pollo en trozos, tocineta, queso cuajada, maicitos, lechuga, piña calada, jamón, ripio, salsas, huevo.', category: 'desgranados', price: '$27.000' },
  { id: 'd5', name: 'DESGRANADO RANCHERO', description: 'Carne de res, salchicha ranchera, tocineta, queso cuajada, maicitos, lechuga, ripio, salsas, huevo.', category: 'desgranados', price: '$29.000' },
  { id: 'd6', name: 'MAZORCADA', description: 'Carne desmechada, trozos de pollo, tocineta, queso gratinado, maicitos, ripio de papa.', category: 'desgranados', price: '$26.000' },

  // HAMBURGUESAS
  { id: 'h1', name: 'HAMBURGUESA SENCILLA', description: 'Carne de hamburguesa, queso mozzarella, legumbres, ripio, salsas, huevo.', category: 'hamburguesas', price: '$16.000' },
  { id: 'h2', name: 'HAMBURGUESA ESPECIAL', description: 'Doble carne de hamburguesa, tocineta, queso, legumbres, ripio, salsas, huevo.', category: 'hamburguesas', price: '$20.000' },
  { id: 'h3', name: 'HAMBURGUESA DESMECHADA', description: 'Carne de hamburguesa, carne y pollo desmechado, tocineta, legumbres, ripio, salsas, huevo.', category: 'hamburguesas', price: '$50.000' },
  { id: 'h4', name: 'HAMBURGUESA MIXTA', description: 'Carne de hamburguesa, filete de pollo, huevo frito, tocineta, legumbres, ripio, salsas, huevo.', category: 'hamburguesas', price: '$24.000' },
  { id: 'h5', name: 'HAMBURGUESA CALLINA', description: 'Carne de hamburguesa, carne y pollo desmechado, tocineta, huevo frito, maicitos, legumbres, ripio, salsas, huevo.', category: 'hamburguesas', price: '$30.000' },
  { id: 'h6', name: 'HAMBURGUESA TRIPLE PISO', description: 'Triple carne de hamburguesa, carne y pollo desmechado, tocineta, chorizo, huevo frito, maicitos, legumbres, ripio, salsas.', category: 'hamburguesas', price: '$36.000' },
  { id: 'h7', name: 'HAMBURGUESA HAWAIANA', description: 'Carne de hamburguesa, tocineta, piña calada, legumbres, ripio, salsas, huevo.', category: 'hamburguesas', price: '$19.000' },
  { id: 'h8', name: 'HAMBURGUESA GRATINADA', description: '200 g de carne de res, queso gratinado, tocineta, legumbres, ripio, salsas, huevo.', category: 'hamburguesas', price: '$24.000' },
  { id: 'h9', name: 'HAMBURGUESA ARTESANAL TRADICIONAL', description: '150 g de carne artesanal, tocineta, queso, legumbres, salsas.', category: 'hamburguesas', price: '$20.000' },
  { id: 'h10', name: 'HAMBURGUESA ARTESANAL RANCHERA', description: '150 g de carne artesanal, queso, chorizo, tocineta, legumbres, salsas, huevo.', category: 'hamburguesas', price: '$22.000' },
  { id: 'h11', name: 'HAMBURGUESA ARTESANAL DESMECHADA', description: '150 g de carne artesanal, pollo y carne desmechada, tocineta, legumbres, salsas.', category: 'hamburguesas', price: '$21.000' },
  { id: 'h12', name: 'HAMBURGUESA ARTESANAL DEL GORDO', description: '150 g de carne artesanal, 100 g de filete de cerdo, tocineta, queso, chorizo, legumbres, salsas, huevo.', category: 'hamburguesas', price: '$25.000' },
  { id: 'h13', name: 'HAMBURGUESA TRIFÁSICA', description: '150 g de carne artesanal, carne y pollo desmechado, filete de cerdo, tocineta, queso, legumbres, salsas.', category: 'hamburguesas', price: '$32.000' },
  { id: 'h14', name: 'HAMBURGUESA TROPICAL', description: 'Carne de res Zenú, doble tocineta, doble queso, piña calada, pepinillos, legumbres, ripio, salsas.', category: 'hamburguesas', price: '$21.000' },
  { id: 'h15', name: 'HAMBURGUESA EXTREMA', description: '150 g de carne artesanal, tocineta, peperoni, piña calada, queso mozzarella, legumbres, ripio, salsas.', category: 'hamburguesas', price: '$21.000' },
  { id: 'h16', name: 'HAMBURGUESA CIGANT', description: 'Doble carne de res y carne y pollo desmechado, tocineta, chorizo, salsas, ripio.', category: 'hamburguesas', price: '$22.000' },
  { id: 'h17', name: 'HAMBURGUESA APANADA', description: 'Carne de res apanada, tocineta, queso, legumbres, salsas, ripio.', category: 'hamburguesas', price: '$50.000' },

  // PATACONES
  { id: 'pt1', name: 'PATACÓN DESMECHADO', description: 'Carne y pollo desmechado, tocineta, maicitos, salchicha ranchera, salsas.', category: 'patacones', price: 'N/A' },
  { id: 'pt2', name: 'PATACÓN BÚRGUER', description: 'Carne de hamburguesa, carne y pollo desmechado, tocineta, maicitos, lechuga, ripio, Salsas, huevo.', category: 'patacones', price: 'N/A' },
  { id: 'pt3', name: 'TORTILLITA', description: 'Carne y pollo desmechado, tocineta, maicitos, ripio, lechuga, salsas, huevo.', category: 'patacones', price: 'N/A' },
  { id: 'pt4', name: 'PICADA', description: '400g de papa, pollo y cerdo en trozos, chorizo, tocineta, arepa, salsas, huevo.', category: 'patacones', price: 'N/A' },
  { id: 'pt5', name: 'CARNE DE CERDO ASADA', description: '250g de cerdo asada, papas a la francesa, arepa con queso mozzarella, tomate, salsas.', category: 'patacones', price: 'N/A' },
  { id: 'pt6', name: 'PECHUGA ASADA', description: '250g de pechuga asada, papas a la francesa, arepa con queso mozzarella, tomate, salsa.', category: 'patacones', price: 'N/A' },

  // AREPAS
  { id: 'a1', name: 'AREPA BÚRGUER', description: 'Carne de hamburguesa, queso mozzarella, tomate, ripio, salsas, huevo.', category: 'arepas', price: '$14.000' },
  { id: 'a2', name: 'AREPA MIXTA', description: 'Carne y pollo desmechado, tocineta, salsas, huevo.', category: 'arepas', price: '$13.000' },
  { id: 'a3', name: 'AREPA MIXTA ESPECIAL', description: 'Carne y pollo desmechado, carne de hamburguesa, tocineta, ripio, salsas, huevo.', category: 'arepas', price: '$22.000' },
  { id: 'a4', name: 'AREPA MIXTA SÚPER ESPECIAL', description: 'Carne y pollo desmechado, tocineta, maicitos, salchicha ranchera, salsas, huevo.', category: 'arepas', price: '$20.000' },
  { id: 'a5', name: 'AREPA RANCHERA', description: 'Salchicha ranchera en trozos, tocineta, queso mozzarella, maicitos, ripio, salsas, huevo.', category: 'arepas', price: '$17.000' },
  { id: 'a6', name: 'AREPA CON MAICITOS', description: 'Carne de hamburguesa, tocineta, maicitos, queso cuajada, queso mozzarella, ripio, salsas, huevo.', category: 'arepas', price: '$13.000' },
  { id: 'a7', name: 'AREPA HAWAIANA', description: 'Carne de hamburguesa, piña calada en trozos, tocineta, queso mozzarella, ripio, salsas, huevo.', category: 'arepas', price: 'N/A' },
  { id: 'a8', name: 'AREPA SUIZA', description: 'Salchicha suiza, lonchas, tomate, huevo.', category: 'arepas', price: 'N/A' },
  { id: 'a9', name: 'TROCI AREPA', description: 'Filete de cerdo y pollo en trozos, tocineta, queso mozzarella, salsas, huevo.', category: 'arepas', price: 'N/A' },
  { id: 'a10', name: 'TOCI AREPA', description: 'Chorizo y tocineta en trozos, maicitos, queso mozzarella, salsas, huevo.', category: 'arepas', price: 'N/A' },
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
    price: '$19.000',
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
    description: 'Salchipapa especial con gaseosa grande',
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
