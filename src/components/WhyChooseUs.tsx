import { Flame, Heart, Clock, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Flame className="w-12 h-12 text-accent" />,
      title: 'Sabor Auténtico',
      description: 'Recetas tradicionales callejeras con el toque perfecto que nos caracteriza',
    },
    {
      icon: <Heart className="w-12 h-12 text-accent" />,
      title: 'Porciones Generosas',
      description: 'Servimos platos abundantes porque sabemos que vienes con hambre',
    },
    {
      icon: <Clock className="w-12 h-12 text-accent" />,
      title: 'Preparación Fresca',
      description: 'Todo se prepara al momento con ingredientes frescos de primera calidad',
    },
    {
      icon: <Award className="w-12 h-12 text-accent" />,
      title: 'Calidad Garantizada',
      description: 'Más de 10 años sirviendo la mejor comida callejera de la ciudad',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-4">
            ¿POR QUÉ <span className="text-primary">ELEGIRNOS?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No somos solo comida callejera, somos una experiencia de sabor
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-fade-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-display text-xl uppercase mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-8 rounded-2xl text-center border-2 border-primary/30">
            <p className="font-display text-2xl md:text-3xl uppercase mb-4">
              🔥 INGREDIENTES FRESCOS, SABOR EXPLOSIVO 🔥
            </p>
            <p className="text-muted-foreground">
              Cada ingrediente es seleccionado cuidadosamente para garantizar el mejor sabor en cada bocado.
              No usamos productos congelados ni procesados - todo es fresco y preparado con amor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
