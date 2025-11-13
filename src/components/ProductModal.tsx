import { useState } from 'react';
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
  const goToMenu = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onClose();
    setTimeout(() => {
      const el = document.querySelector('#menu');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.location.hash = '#menu';
    }, 60);
  };
  const [qty, setQty] = useState<number>(1);
  const [added, setAdded] = useState<boolean>(false);

  const handleOrderClick = () => {
    if (canAddToCart) {
      const addEvent = new CustomEvent('cart:add', {
        detail: {
          id: item.id,
          name: item.name,
          unitPriceDisplay: item.price as string,
          qty,
        },
      });
      window.dispatchEvent(addEvent);
    }
    window.dispatchEvent(new Event('cart:open'));
    onClose();
  };

  const canAddToCart = !!item.price && item.price !== 'N/A';
  const handleAddToCart = () => {
    if (!canAddToCart) return;
    const event = new CustomEvent('cart:add', {
      detail: {
        id: item.id,
        name: item.name,
        unitPriceDisplay: item.price as string,
        qty,
      },
    });
    window.dispatchEvent(event);
    setAdded(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-2xl p-0 md:rounded-lg max-h-[85vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative h-48 sm:h-56 md:h-72 lg:h-80 bg-muted">
          <img
            src={item.image || '/placeholder.svg'}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          {item.price && (
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-2 rounded-full font-display text-xl shadow-lg">
              {item.price}
            </div>
          )}
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

            {added ? (
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                <p className="text-sm text-foreground">
                  ⚡ <strong>Agregado al carrito:</strong> Tu artículo fue añadido correctamente. 
                  <a href="#menu" onClick={goToMenu} className="ml-1 text-rose-700 hover:text-rose-800 underline">¿Agregar algo más?</a>
                </p>
              </div>
            ) : (
              <div className="bg-primary/5 p-4 rounded-lg border-2 border-primary/20">
                <p className="text-sm">
                  ⚡ <strong>Preparación fresca:</strong> Todos nuestros productos se preparan 
                  al momento con ingredientes de primera calidad.
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium">Cantidad</label>
              <select
                className="border rounded px-2 py-1"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              <Button
                onClick={handleAddToCart}
                disabled={!canAddToCart}
                className="bg-primary text-primary-foreground hover:bg-hover font-bold uppercase tracking-wide"
              >
                Agregar al carrito
              </Button>
              {!canAddToCart && (
                <span className="text-xs text-muted-foreground">Precio N/A: no disponible para carrito.</span>
              )}
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleOrderClick}
                className="flex-1 bg-primary text-primary-foreground hover:bg-hover font-bold uppercase tracking-wide h-12"
              >
                PIDE AHORA
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
