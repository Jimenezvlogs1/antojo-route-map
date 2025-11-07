import { Card } from '@/components/ui/card';
import { testimonials } from '@/data/menuData';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-4">
            LO QUE DICEN <span className="text-primary">NUESTROS CLIENTES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miles de clientes satisfechos nos respaldan
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-up border-2 hover:border-primary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-display text-xl text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Cliente verificado</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Average Rating Display */}
        <div className="text-center mt-12 p-8 bg-primary/10 rounded-lg max-w-md mx-auto border-2 border-primary/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-display text-5xl text-primary">5.0</span>
            <Star size={32} className="fill-primary text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">
            Calificación promedio de más de 500 clientes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
