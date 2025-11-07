import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MenuItem } from '@/data/menuData';
import { X } from 'lucide-react';

interface ProductModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ item, isOpen, onClose }: ProductModalProps) => {
  const handleOrderClick = () => {
    const phone = '573001234567'; // Replace with actual phone
    const message = encodeURIComponent(
      `¡Hola! Quiero pedir: ${item.name}. ¿Para recoger o domicilio?`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative h-64 md:h-80 bg-muted">
          <img
            src={item.image || '/placeholder.svg'}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl uppercase mb-2">
              {item.name}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              {item.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Ingredientes:</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>

            <div className="bg-primary/5 p-4 rounded-lg border-2 border-primary/20">
              <p className="text-sm">
                ⚡ <strong>Preparación fresca:</strong> Todos nuestros productos se preparan 
                al momento con ingredientes de primera calidad.
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Button
              onClick={handleOrderClick}
              className="flex-1 bg-primary text-primary-foreground hover:bg-hover font-bold uppercase tracking-wide h-12"
            >
              Pedir ahora
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="border-2 border-border hover:border-primary hover:text-primary font-bold uppercase h-12"
            >
              Cerrar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
