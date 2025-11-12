import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MenuItem } from '@/data/menuData';
import ProductModal from './ProductModal';

interface ProductCardProps {
  item: MenuItem;
  index: number;
}

const ProductCard = ({ item, index }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = () => {
    const phone = '573217651856'; // Replace with actual phone
    const message = encodeURIComponent(
      `¡Hola! Quiero PIDE: ${item.name}.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <>
      <Card
        className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-up border-2 hover:border-primary"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {/* Image */}
        <div
          className="relative h-48 overflow-hidden bg-muted"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={item.image || '/placeholder.svg'}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-1 right-1 bg-primary text-primary-foreground px-3 py-2 rounded-full font-display text-xl shadow-lg">
            {item.price ?? 'N/A'}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display text-lg uppercase mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            {item.description}
          </p>
          {/* Actions */}
          <div className="flex gap-2">
            <Button
              onClick={handleOrderClick}
              size="sm"
              className="flex-1 bg-primary text-primary-foreground hover:bg-hover font-bold uppercase text-xs"
            >
              PIDE
            </Button>
            <Button
              onClick={() => setIsModalOpen(true)}
              size="sm"
              variant="outline"
              className="border-2 border-border text-black hover:bg-primary/60 hover:text-black font-bold uppercase text-xs"
            >
              Ver detalles
            </Button>
          </div>
        </div>
      </Card>

      <ProductModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
