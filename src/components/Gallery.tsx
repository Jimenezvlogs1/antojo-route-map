const Gallery = () => {
  const images = [
    { id: 1, alt: 'Perro caliente especial', category: 'Perros' },
    { id: 2, alt: 'Salchipapa mega', category: 'Salchipapas' },
    { id: 3, alt: 'Hamburguesa doble', category: 'Hamburguesas' },
    { id: 4, alt: 'Desgranado mixto', category: 'Desgranados' },
    { id: 5, alt: 'Patacón especial', category: 'Patacones' },
    { id: 6, alt: 'Ambiente del local', category: 'Ambiente' },
    { id: 7, alt: 'Cliente satisfecho', category: 'Clientes' },
    { id: 8, alt: 'Preparación en vivo', category: 'Cocina' },
  ];

  return (
    <section id="galeria" className="py-20 bg-secondary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-4">
            <span className="text-primary">GALERÍA</span> DEL GORDO
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Mira nuestros platos, ambiente y clientes felices
          </p>
        </div>

        {/* Gallery Grid - Circular Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20">
                <img
                  src="/placeholder.svg"
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <span className="text-white font-bold text-sm uppercase text-center">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/80 mb-4">
            ¡Etiquétanos en tus fotos y aparece en nuestra galería!
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#"
              className="text-primary hover:text-hover transition-colors font-bold"
              aria-label="Instagram"
            >
              📸 @dondeelgordo
            </a>
            <a
              href="#"
              className="text-primary hover:text-hover transition-colors font-bold"
              aria-label="Facebook"
            >
              📘 DONDE EL GORDO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
