import { useState } from 'react';
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const LIVE = 'https://loveluxury.com/uk/';
const pieces = [
  { number: '01', name: 'Birkin 25', house: 'Hermès', image: '/media/birkin-hd.webp', href: `${LIVE}shop/hermes/` },
  { number: '02', name: 'Nautilus', house: 'Patek Philippe', image: '/media/patek.webp', href: `${LIVE}shop/watches/` },
  { number: '03', name: 'Alhambra', house: 'Van Cleef & Arpels', image: '/media/alhambra.webp', href: `${LIVE}shop/jewellery/` },
];

const reveal = {
  initial: { opacity: 0, y: 54 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

function VcaFrame({ image, label, className = '', shape = 'clover' }: { image: string; label: string; className?: string; shape?: 'clover' | 'circle' }) {
  return <motion.figure layout className={`vca-frame ${className} vca-frame--${shape}`} whileHover={{ scale: 1.025 }} transition={{ layout: { type: 'spring', stiffness: 115, damping: 22, mass: .9 }, duration: .55 }}>
    <svg viewBox="0 0 100 100" role="img" aria-label={label}>
      <image href={image} x="15" y="15" width="70" height="66" preserveAspectRatio="xMidYMid meet"/>
      {shape === 'circle' ? <><circle className="vca-frame__line vca-frame__line--outer" cx="50" cy="48" r="43"/><circle className="vca-frame__line vca-frame__line--inner" cx="50" cy="48" r="39"/></> : <><path className="vca-frame__line vca-frame__line--outer" d="M50 18 C40 -3 13 2 17 27 C-5 38 2 65 27 61 C35 86 65 86 73 61 C98 65 105 38 83 27 C87 2 60 -3 50 18 Z"/><path className="vca-frame__line vca-frame__line--inner" d="M50 22 C41 4 19 7 22 29 C3 38 8 60 29 56 C37 77 63 77 71 56 C92 60 97 38 78 29 C81 7 59 4 50 22 Z"/></>}
    </svg>
    <figcaption>{label}</figcaption>
  </motion.figure>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="mono-header">
      <button className="mono-menu" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={15}/> Menu</button>
      <a className="mono-logo" href="#top">LOVE LUXURY</a>
      <a className="mono-buy" href={`${LIVE}shop/`} target="_blank" rel="noreferrer">Shop <span>↗</span></a>
    </header>
    {open && <div className="mono-drawer">
      <button onClick={() => setOpen(false)} aria-label="Close menu"><X/></button>
      <nav><a href={`${LIVE}shop/handbags/`}>Handbags</a><a href={`${LIVE}shop/watches/`}>Watches</a><a href={`${LIVE}shop/jewellery/`}>Jewellery</a><a href={`${LIVE}sell/`}>Sell with us</a></nav>
      <small>48 Beauchamp Place · Knightsbridge · London</small>
    </div>}
  </>;
}

function Hero() {
  return <section className="mono-hero" id="top">
    <div className="mono-folds"/><div className="mono-hero__word">LOVE LUXURY</div>
    <p className="mono-kicker">THE PRIVATE GALLERY · LONDON</p>
    <div className="mono-hero__object-stage"><motion.img className="mono-hero__object" src="/media/birkin-hd.webp" alt="Hermès Birkin 25" initial={{ opacity: 0, y: 70, scale: .9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.35, delay: .2, ease: [0.16, 1, 0.3, 1] }} whileHover={{ scale: 1.025, y: -8 }}/></div>
    <div className="mono-hero__copy"><span>01 / THE ICON</span><h1>Objects of<br/>lasting desire.</h1><p>Exceptional handbags, watches and jewellery—authenticated, curated and presented without compromise.</p></div>
    <a className="mono-pill" href={`${LIVE}shop/`} target="_blank" rel="noreferrer">Enter collection <ArrowRight size={14}/></a>
    <a className="mono-scroll" href="#story"><ArrowDown size={14}/></a>
  </section>;
}

function Story() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const showcase = [
    { image: '/media/birkin-hd.webp', label: 'Hermès Birkin 25' },
    { image: '/media/patek.webp', label: 'Patek Philippe Nautilus' },
    { image: '/media/alhambra.webp', label: 'Van Cleef & Arpels Alhambra' },
  ];
  const previous = (active + showcase.length - 1) % showcase.length;
  const next = (active + 1) % showcase.length;
  const visible = [previous, active, next];
  const move = (step: number) => {
    setDirection(step);
    setActive(value => (value + step + showcase.length) % showcase.length);
  };

  return <section className="mono-story" id="story">
    <motion.div className="mono-section-title" {...reveal}><span>01</span><h2>A private gallery<br/>for modern icons.</h2></motion.div>
    <motion.div className="mono-story__copy" {...reveal}><p>Love Luxury brings the world’s most coveted pieces into one considered collection. Every object is chosen for rarity, condition and provenance.</p><p>Visit us in Knightsbridge or discover the edit online. Our specialists are here to help you buy and sell with complete confidence.</p></motion.div>
    <motion.div className="mono-gallery mono-gallery--carousel" {...reveal}>
      <button className="mono-gallery__arrow mono-gallery__arrow--left" onClick={() => move(-1)} aria-label="Previous piece"><ChevronLeft/></button>
      <div className={`mono-gallery__track is-moving-${direction > 0 ? 'right' : 'left'}`}>
        {visible.map((itemIndex, position) => <VcaFrame key={showcase[itemIndex].label} image={showcase[itemIndex].image} label={showcase[itemIndex].label} shape={position === 1 ? 'circle' : 'clover'} className={position === 1 ? 'vca-frame--hero' : 'vca-frame--preview'}/>)}
      </div>
      <button className="mono-gallery__arrow mono-gallery__arrow--right" onClick={() => move(1)} aria-label="Next piece"><ChevronRight/></button>
      <div className="mono-gallery__counter">{String(active + 1).padStart(2, '0')} <span>/ 03</span></div>
    </motion.div>
    <motion.div className="mono-story__catalog" {...reveal}>
      <div className="mono-story__catalog-head"><span>THE COLLECTION</span><small>SELECT A PIECE TO DISCOVER MORE</small></div>
      <div className="mono-list">{pieces.map((piece, index) => <a key={piece.number} href={piece.href} target="_blank" rel="noreferrer" onMouseEnter={() => { setDirection(index >= active ? 1 : -1); setActive(index); }}><span>{piece.number}</span><strong>{piece.house}</strong><em>{piece.name}</em><ArrowRight size={18}/></a>)}</div>
    </motion.div>
  </section>;
}

function Closing() {
  return <><section className="mono-closing">
    <motion.div className="mono-closing__copy" {...reveal}><span>SELL WITH LOVE LUXURY</span><h2>Your piece.<br/>Our expertise.</h2><p>Receive a private valuation from our specialists and sell with confidence.</p><a href={`${LIVE}sell/`} target="_blank" rel="noreferrer">Start a valuation <ArrowRight size={15}/></a></motion.div>
    <motion.div className="mono-closing__still-life" initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
      <div className="closing-orbit closing-orbit--one"/>
      <div className="closing-orbit closing-orbit--two"/>
      <motion.img className="closing-product closing-product--bag" src="/media/birkin-burgundy.webp" alt="Burgundy crocodile Birkin 30" whileHover={{ y: -9, scale: 1.025 }}/>
      <motion.img className="closing-product closing-product--watch" src="/media/patek.webp" alt="Patek Philippe Nautilus" whileHover={{ rotate: 4, scale: 1.06 }}/>
      <motion.img className="closing-product closing-product--jewel" src="/media/emerald-necklace.webp" alt="Emerald and diamond high-jewellery necklace" whileHover={{ rotate: -4, scale: 1.05 }}/>
    </motion.div>
  </section><footer className="mono-footer"><strong>LOVE LUXURY</strong><span>KNIGHTSBRIDGE · LONDON</span><span>© 2026</span></footer></>;
}

export default function App() { return <main className="mono-site"><Header/><Hero/><Story/><Closing/></main>; }
