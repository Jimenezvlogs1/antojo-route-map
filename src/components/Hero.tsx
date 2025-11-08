import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phone = '573217651856';
    const message = encodeURIComponent('¡Hola! Quiero hacer un pedido');
    const urls = [
      `https://wa.me/${phone}?text=${message}`,
      `https://api.whatsapp.com/send?phone=${phone}&text=${message}`,
    ];

    for (const url of urls) {
      const win = window.open(url, '_blank');
      if (win && !win.closed) return;
    }
    window.location.href = urls[0];
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary opacity-10 transform skew-x-12"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white animate-fade-up">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-4 leading-tight">
              DONDE EL{' '}
              <span className="text-primary block">GORDO</span>
            </h1>

            <div className="inline-flex items-center gap-2 bg-transparent text-white px-5 py-2 rounded-full text-sm font-extrabold mt-2 mb-6 uppercase border-2 border-red-500">
              Comida Tradicional Callejera
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
              Sabor auténtico, porciones generosas y la mejor sazón callejera de la ciudad. 
              ¡Cada bocado es una experiencia!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToMenu}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-hover font-bold uppercase tracking-wide text-lg h-14 px-8"
              >
                Mira el menú
              </Button>
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold uppercase tracking-wide text-lg h-14 px-8 inline-flex items-center gap-2"
              >
                <FaWhatsapp size={20} className="mr-1" />
                Escríbenos a WhatsApp
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-3xl font-display text-primary">100+</div>
                <div className="text-sm text-black uppercase">Productos</div>
              </div>
              <div>
                <div className="text-3xl font-display text-primary">5★</div>
                <div className="text-sm text-black/70 uppercase">Calificación</div>
              </div>
              <div>
                <div className="text-3xl font-display text-primary">6/6</div>
                <div className="text-sm text-black/70 uppercase">Disponibles</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 mix-blend-overlay"></div>
              <img
                src="/placeholder.svg"
                alt="Perro caliente especial DONDE EL GORDO"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="font-display text-2xl text-black">PERRO ESPECIAL</h3>
                <p className="text-black/80">¡El favorito de nuestros clientes!</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg animate-pulse">
              <div className="text-center">
                <div className="text-2xl font-display">HOY</div>
                <div className="text-xs">OFERTAS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background">
        <svg viewBox="0 0 1440 120" className="absolute top-0 w-full h-full">
          <path
            fill="hsl(var(--secondary))"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
