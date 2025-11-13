import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { parsePrice, formatPrice } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cart state
  type CartItem = { id: string; name: string; unitPriceDisplay: string; qty: number };
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState<'sitio' | 'domicilio' | 'recoger'>('sitio');
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');


  const itemsCount = cart.reduce((sum, it) => sum + it.qty, 0);
  const subtotal = cart.reduce((sum, it) => sum + parsePrice(it.unitPriceDisplay) * it.qty, 0);

  const addToCart = (payload: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === payload.id);
      if (existing) {
        return prev.map((p) => (p.id === payload.id ? { ...p, qty: Math.min(10, p.qty + payload.qty) } : p));
      }
      return [...prev, { ...payload, qty: Math.max(1, Math.min(10, payload.qty)) }];
    });
  };

  const updateQty = (id: string, qty: number) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  };
  const removeItem = (id: string) => setCart((prev) => prev.filter((p) => p.id !== id));

  useEffect(() => {
    const onAdd = (e: Event) => {
      const detail = (e as CustomEvent).detail as CartItem;
      addToCart(detail);
      // Aviso será permanente y se renderiza cuando hay items en el carrito
    };
    const onOpen = () => setCartOpen(true);
    window.addEventListener('cart:add' as any, onAdd);
    window.addEventListener('cart:open' as any, onOpen);
    return () => {
      window.removeEventListener('cart:add' as any, onAdd);
      window.removeEventListener('cart:open' as any, onOpen);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (cartOpen && cart.length === 0) {
      setCartOpen(false);
      setTimeout(() => {
        const el = document.querySelector('#menu');
        if (el) (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.location.hash = '#menu';
      }, 60);
    }
  }, [cart.length, cartOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Menú', href: '#menu' },
    { name: 'Combos', href: '#combos' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];


  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;
    const lines: string[] = [];
    lines.push('🧾 Pedido');
    cart.forEach((it) => {
      const unit = parsePrice(it.unitPriceDisplay);
      const partial = unit * it.qty;
      lines.push(`• ${it.name} x${it.qty} — ${formatPrice(partial)} (${formatPrice(unit)} c/u)`);
    });
    lines.push(`Subtotal: ${formatPrice(subtotal)}`);
    lines.push('');

    if (orderType === 'sitio') {
      lines.push('Modalidad: Para comer en sitio');
      lines.push(`Nombre: ${customerName || 'N/D'}`);
      lines.push(`Apellido: ${lastName || 'N/D'}`);
    } else if (orderType === 'recoger') {
      lines.push('Modalidad: Para recoger en sitio');
      lines.push(`Nombre de quien recoge: ${customerName || 'N/D'}`);
      lines.push(`Apellido de quien recoge: ${lastName || 'N/D'}`);
    } else {
      lines.push('Modalidad: Domicilio');
      lines.push(`Nombre: ${customerName || 'N/D'}`);
      lines.push(`Apellido: ${lastName || 'N/D'}`);
      lines.push(`Dirección: ${address || 'N/D'}`);
      lines.push(`Barrio: ${neighborhood || 'N/D'}`);
      lines.push(`Celular: ${phone || 'N/D'}`);
      lines.push('Nota: El valor del domicilio NO está incluido.');
    }

    const phoneNumber = '573217651856';
    const message = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setCartOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="text-2xl md:text-3xl font-display tracking-tight">
              <span className={`${isScrolled ? 'text-foreground' : 'text-white'}`}>DONDE EL</span>{' '}
              <span className="text-red-600">GORDO</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button + Cart */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => setCartOpen(true)}
              variant="outline"
              className="relative border-2 border-border text-black hover:bg-primary/60 hover:text-black font-bold uppercase"
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Carrito
              {itemsCount > 0 && (
                <span className="ml-2 inline-flex items-center justify-center text-xs font-bold bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                  {itemsCount}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium py-2`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Cart Dialog */}
      <Dialog open={cartOpen} onOpenChange={setCartOpen}>
        <DialogContent className="w-[95vw] max-w-lg p-0 md:rounded-lg">
          <DialogHeader>
            <DialogTitle className="px-6 pt-6">Tu carrito</DialogTitle>
          </DialogHeader>
          <div className="px-6 pb-6 space-y-4 max-h-[70vh] overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-sm text-muted-foreground">Aún no has agregado productos.</p>
            ) : (
              cart.map((it) => (
                <div key={it.id} className="flex items-center justify-between gap-3 border-b pb-3">
                  <div>
                    <p className="font-medium">{it.name}</p>
                    <p className="text-xs text-muted-foreground">{it.unitPriceDisplay} c/u</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      className="border rounded px-2 py-1"
                      value={it.qty}
                      onChange={(e) => updateQty(it.id, Number(e.target.value))}
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                    <Button variant="ghost" onClick={() => removeItem(it.id)} aria-label="Quitar">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="min-w-[90px] text-right font-semibold">
                      {formatPrice(parsePrice(it.unitPriceDisplay) * it.qty)}
                    </div>
                  </div>
                </div>
              ))
            )}

            <div className="flex items-center justify-between pt-2">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg">{formatPrice(subtotal)}</span>
            </div>

            <div className="space-y-3 pt-2">
              <p className="font-semibold">¿Cómo quieres recibir tu pedido?</p>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="orderType" checked={orderType==='sitio'} onChange={() => setOrderType('sitio')} />
                  Para comer en sitio
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="orderType" checked={orderType==='domicilio'} onChange={() => setOrderType('domicilio')} />
                  Domicilio
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="orderType" checked={orderType==='recoger'} onChange={() => setOrderType('recoger')} />
                  Para recoger en sitio
                </label>
              </div>

              {(orderType === 'sitio' || orderType === 'recoger') && (
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Nombre
                    <input className="w-full border rounded px-3 py-2" value={customerName} onChange={(e)=>setCustomerName(e.target.value)} />
                  </label>
                  <label className="text-sm">Apellido
                    <input className="w-full border rounded px-3 py-2" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                  </label>
                </div>
              )}
              {orderType === 'domicilio' && (
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Nombre
                    <input className="w-full border rounded px-3 py-2" value={customerName} onChange={(e)=>setCustomerName(e.target.value)} />
                  </label>
                  <label className="text-sm">Apellido
                    <input className="w-full border rounded px-3 py-2" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                  </label>
                  <label className="text-sm">Dirección
                    <input className="w-full border rounded px-3 py-2" value={address} onChange={(e)=>setAddress(e.target.value)} />
                  </label>
                  <label className="text-sm">Barrio
                    <input className="w-full border rounded px-3 py-2" value={neighborhood} onChange={(e)=>setNeighborhood(e.target.value)} />
                  </label>
                  <label className="text-sm">Celular
                    <input type="tel" minLength={10} placeholder="Mínimo 10 dígitos" className="w-full border rounded px-3 py-2" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                  </label>
                  <p className="text-xs text-muted-foreground">Nota: El valor del domicilio no está incluido.</p>
                </div>
              )}

              <Button
                onClick={handleCheckoutWhatsApp}
                disabled={
                  cart.length===0 || (
                    orderType!=='domicilio'
                      ? (customerName.trim()==='' || lastName.trim()==='')
                      : (
                          customerName.trim()==='' ||
                          lastName.trim()==='' ||
                          address.trim()==='' ||
                          neighborhood.trim()==='' ||
                          phone.trim().length < 10
                        )
                  )
                }
                className="w-full bg-primary text-primary-foreground hover:bg-hover font-bold uppercase tracking-wide"
              >
                Pedir por WhatsApp
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </header>
  );
};

export default Header;
