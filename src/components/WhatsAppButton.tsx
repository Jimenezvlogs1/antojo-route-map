import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleClick = () => {
    const phone = '573217651856';
    const message = encodeURIComponent('¡Hola! Quiero hacer un pedido.');
    const url = `https://wa.me/${phone}?text=${message}`;
    const win = window.open(url, '_blank');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = url;
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-8 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:scale-110 transition-all duration-500 animate-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={24} />
    </Button>
  );
};

export default WhatsAppButton;