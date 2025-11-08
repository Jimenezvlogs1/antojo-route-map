import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: 'Campos incompletos',
        description: 'Por favor completa todos los campos',
        variant: 'destructive',
      });
      return;
    }

    // Send to WhatsApp
    const phone = '573217651856'; // Replace with actual phone
    const message = encodeURIComponent(
      `Nuevo mensaje de contacto:\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');

    // Reset form
    setFormData({ name: '', phone: '', message: '' });
    
    toast({
      title: '¡Mensaje enviado!',
      description: 'Te responderemos pronto por WhatsApp',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-4">
            <span className="text-primary">CONTÁCTANOS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer un pedido? Escríbenos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-fade-up">
              <h3 className="font-display text-2xl uppercase mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Ubicación</h4>
                    <a
                      href="https://maps.app.goo.gl/qabdqwHqfm5HNrMJ7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                      aria-label="Abrir ubicación en Google Maps"
                    >
                      CRA 9 bis # 1e48<br />
                      Alfonso López, Pereira
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Teléfono</h4>
                    <a
                      href={`https://wa.me/573217651856?text=${encodeURIComponent('¡Hola! Quiero hacer un pedido.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Escribir por WhatsApp"
                    >
                      +57 321 7651856
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Horarios</h4>
                    <p className="text-muted-foreground">
                      Miércoles a Lunes:<br />
                      7:00 PM – 1:00 AM<br />
                      Fin de semana (Festivos):<br />
                      7:00 PM – 2:00 AM<br />
                      Martes: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Mapa de ubicación</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Nombre *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium mb-2">
                  Teléfono *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+57 300 123 4567"
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje o pedido aquí..."
                  className="min-h-32"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-hover font-bold uppercase tracking-wide h-12"
              >
                Enviar mensaje por WhatsApp
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Al enviar este formulario, serás redirigido a WhatsApp para completar tu mensaje
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
