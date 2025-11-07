const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Menú', href: '#menu' },
    { name: 'Combos', href: '#combos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📸' },
    { name: 'WhatsApp', href: 'https://wa.me/573001234567', icon: '💬' },
  ];

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl mb-4">
              DONDE EL <span className="text-primary">GORDO</span>
            </h3>
            <p className="text-white/70 mb-4">
              Comida tradicional callejera con sabor auténtico y porciones generosas desde hace más de 10 años.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl uppercase mb-4 text-primary">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl uppercase mb-4 text-primary">
              Contacto
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <strong className="text-white">Dirección:</strong><br />
                Calle Principal #123<br />
                Centro, Ciudad
              </li>
              <li>
                <strong className="text-white">Teléfono:</strong><br />
                <a href="tel:+573001234567" className="hover:text-primary transition-colors">
                  +57 300 123 4567
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xl uppercase mb-4 text-primary">
              Horarios
            </h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <strong className="text-white">Lunes - Viernes:</strong><br />
                10:00 AM - 11:00 PM
              </li>
              <li>
                <strong className="text-white">Sábado - Domingo:</strong><br />
                10:00 AM - 12:00 AM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>
            © {currentYear} DONDE EL GORDO. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-sm">
            Hecho con 🔥 y mucho sabor
          </p>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: 'DONDE EL GORDO',
            description: 'Comida tradicional callejera',
            image: 'https://example.com/logo.png',
            servesCuisine: 'Comida Callejera Colombiana',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Calle Principal #123',
              addressLocality: 'Ciudad',
              addressCountry: 'CO',
            },
            telephone: '+573001234567',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '10:00',
                closes: '23:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '10:00',
                closes: '00:00',
              },
            ],
            menu: 'https://example.com/#menu',
          }),
        }}
      />
    </footer>
  );
};

export default Footer;
