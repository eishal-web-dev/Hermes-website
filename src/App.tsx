import { useState } from 'react';
import { ArrowDown, ArrowRight, Menu, X } from 'lucide-react';

const LIVE = 'https://loveluxury.com/uk/';
const pieces = [
  { number: '01', name: 'Birkin 25', house: 'Hermès', image: '/media/birkin.webp', href: `${LIVE}shop/hermes/` },
  { number: '02', name: 'Nautilus', house: 'Patek Philippe', image: '/media/patek.webp', href: `${LIVE}shop/watches/` },
  { number: '03', name: 'Alhambra', house: 'Van Cleef & Arpels', image: '/media/alhambra.webp', href: `${LIVE}shop/jewellery/` },
];

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
    <img className="mono-hero__object" src="/media/birkin.webp" alt="Hermès Birkin 25"/>
    <div className="mono-hero__copy"><span>01 / THE ICON</span><h1>Objects of<br/>lasting desire.</h1><p>Exceptional handbags, watches and jewellery—authenticated, curated and presented without compromise.</p></div>
    <a className="mono-pill" href={`${LIVE}shop/`} target="_blank" rel="noreferrer">Enter collection <ArrowRight size={14}/></a>
    <a className="mono-scroll" href="#story"><ArrowDown size={14}/></a>
  </section>;
}

function Story() {
  return <section className="mono-story" id="story">
    <div className="mono-section-title"><span>01</span><h2>A private gallery<br/>for modern icons.</h2></div>
    <div className="mono-story__copy"><p>Love Luxury brings the world’s most coveted pieces into one considered collection. Every object is chosen for rarity, condition and provenance.</p><p>Visit us in Knightsbridge or discover the edit online. Our specialists are here to help you buy and sell with complete confidence.</p></div>
    <div className="mono-gallery"><div className="mono-gallery__frame"><img src="/media/alhambra.webp" alt="Van Cleef & Arpels Alhambra"/></div><div className="mono-gallery__frame mono-gallery__frame--main"><img src="/media/birkin.webp" alt="Hermès Birkin"/></div><div className="mono-gallery__frame"><img src="/media/patek.webp" alt="Patek Philippe Nautilus"/></div></div>
  </section>;
}

function Collection() {
  return <section className="mono-collection" id="collection">
    <div className="mono-section-title"><span>02</span><h2>The collection.</h2></div>
    <div className="mono-product-stage">
      <div className="mono-side-card"><img src="/media/patek.webp" alt="Patek Philippe"/><span>Previous</span></div>
      <div className="mono-featured"><span className="mono-featured__index">01</span><img src="/media/birkin.webp" alt="Hermès Birkin 25"/><div><small>HERMÈS</small><h3>Birkin 25</h3></div></div>
      <div className="mono-side-card"><img src="/media/alhambra.webp" alt="Van Cleef & Arpels"/><span>Next</span></div>
    </div>
    <div className="mono-list">{pieces.map(piece => <a key={piece.number} href={piece.href} target="_blank" rel="noreferrer"><span>{piece.number}</span><strong>{piece.house}</strong><em>{piece.name}</em><ArrowRight size={18}/></a>)}</div>
  </section>;
}

function Closing() {
  return <><section className="mono-closing"><span>SELL WITH LOVE LUXURY</span><h2>Your piece.<br/>Our expertise.</h2><p>Receive a private valuation from our specialists and sell with confidence.</p><a href={`${LIVE}sell/`} target="_blank" rel="noreferrer">Start a valuation <ArrowRight size={15}/></a></section><footer className="mono-footer"><strong>LOVE LUXURY</strong><span>KNIGHTSBRIDGE · LONDON</span><span>© 2026</span></footer></>;
}

export default function App() { return <main className="mono-site"><Header/><Hero/><Story/><Collection/><Closing/></main>; }
