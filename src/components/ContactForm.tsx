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
    const phone = '573001234567'; // Replace with actual phone
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
                    <p className="text-muted-foreground">
                      Calle Principal #123, Centro<br />
                      Ciudad, País
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Teléfono</h4>
                    <a
                      href="tel:+573001234567"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +57 300 123 4567
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
                      Lunes a Domingo<br />
                      10:00 AM - 11:00 PM
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
