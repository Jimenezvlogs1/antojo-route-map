import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const handleClick = () => {
    const phone = '573001234567'; // Replace with actual phone
    const message = encodeURIComponent('¡Hola! Quiero hacer un pedido en DONDE EL GORDO');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </Button>
  );
};

export default WhatsAppButton;
