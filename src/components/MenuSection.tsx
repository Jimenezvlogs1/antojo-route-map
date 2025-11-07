import { useState } from 'react';
import { menuCategories, menuItems } from '@/data/menuData';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('perros');

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-4">
            NUESTRO <span className="text-primary">MENÚ</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra carta completa de comida callejera tradicional
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className={`font-bold uppercase ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground hover:bg-hover'
                  : 'border-2 border-border hover:border-primary hover:text-primary'
              }`}
            >
              {category.icon} {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <ProductCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Nota:</strong> Todos nuestros productos se preparan frescos al momento. 
            Los precios y disponibilidad pueden variar. Consulta por WhatsApp para más información.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
