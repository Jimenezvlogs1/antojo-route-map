import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { combos } from '@/data/menuData';
import { Flame } from 'lucide-react';

const CombosGrid = () => {
  const handleComboClick = (comboName: string) => {
    const phone = '573001234567'; // Replace with actual phone
    const message = encodeURIComponent(
      `¡Hola! Quiero pedir el ${comboName}. ¿Para recoger o domicilio?`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="combos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4 font-bold uppercase text-sm">
            <Flame size={18} />
            Ofertas Especiales
          </div>
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-4">
            COMBOS DEL <span className="text-primary">GORDO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Armamos los mejores combos para que disfrutes más por menos. ¡Pide ahora!
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {combos.map((combo, index) => (
            <Card
              key={combo.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-up border-2 hover:border-primary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={combo.image || '/placeholder.svg'}
                  alt={combo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Price Badge */}
                {combo.price && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-display text-xl shadow-lg">
                    {combo.price}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl uppercase mb-2 group-hover:text-primary transition-colors">
                  {combo.name}
                </h3>
                <p className="text-muted-foreground mb-3">{combo.description}</p>
                <p className="text-sm font-medium mb-4 text-foreground/70">
                  📦 {combo.items}
                </p>
                
                <Button
                  onClick={() => handleComboClick(combo.name)}
                  className="w-full bg-primary text-primary-foreground hover:bg-hover font-bold uppercase tracking-wide"
                >
                  Pide tu combo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No ves lo que buscas? Escríbenos y armamos tu combo personalizado
          </p>
          <Button
            onClick={() => {
              const phone = '573001234567';
              const message = encodeURIComponent('Quiero armar un combo personalizado');
              window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
            }}
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase"
          >
            Personaliza tu combo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CombosGrid;
