import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

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
    { name: 'Facebook', href: '#', icon: <FaFacebookF className="h-5 w-5" /> },
    { name: '@dond_eelgordo', href: 'https://www.instagram.com/dond_eelgordo/', icon: <FaInstagram className="h-5 w-5" /> },
    { name: 'WhatsApp', href: 'https://wa.me/573217651856', icon: <FaWhatsapp className="h-5 w-5" /> },
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
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="mt-3">
              <a
                href="https://www.instagram.com/dond_eelgordo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
                aria-label="Abrir Instagram @dond_eelgordo"
              >
                <FaInstagram className="h-5 w-5" />
                <span>@dond_eelgordo</span>
              </a>
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
                <a
                  href="https://maps.app.goo.gl/qabdqwHqfm5HNrMJ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary underline underline-offset-4"
                  aria-label="Abrir ubicación en Google Maps"
                >
                  CRA 9 bis # 1e48<br />
                  Alfonso López, Pereira
                </a>
              </li>
              <li>
                <strong className="text-white">Teléfono:</strong><br />
                <a
                  href={`https://wa.me/573217651856?text=${encodeURIComponent('¡Hola! Quiero hacer un pedido.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Escribir por WhatsApp"
                >
                  +57 321 7651856
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
                <strong className="text-white">Miércoles a Lunes:</strong><br />
                7:00 PM – 1:00 AM
              </li>
              <li>
                <strong className="text-white">Fin de semana (Festivos):</strong><br />
                7:00 PM – 2:00 AM
              </li>
              <li>
                <strong className="text-white">Martes:</strong><br />
                Cerrado
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
            Hecho con amor y mucho sabor
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
              streetAddress: 'CRA 9 bis # 1e48',
              addressLocality: 'Pereira',
              addressCountry: 'CO',
            },
            telephone: '+573217651856',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '19:00',
                closes: '01:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '19:00',
                closes: '02:00',
              },
            ],
            hasMap: 'https://maps.app.goo.gl/qabdqwHqfm5HNrMJ7',
            menu: 'https://example.com/#menu',
          }),
        }}
      />
    </footer>
  );
};

export default Footer;
