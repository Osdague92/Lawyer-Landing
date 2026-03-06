import { Scale } from 'lucide-react';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-2 text-navy">
          <Scale className="h-6 w-6 text-gold" />
          <span className="text-lg font-semibold">Abogada Laura Méndez</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a className="transition hover:text-navy" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Consulta
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
