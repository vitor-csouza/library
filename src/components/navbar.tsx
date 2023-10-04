import Link from 'next/link';
import 'tailwindcss/tailwind.css';


export function Navbar() {
  return (
    <nav className="flex flex-row justify-between bg-cyan-800 w-screen py-2 px-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">Minha Livraria</a>
        </div>

        {/* Links da Navbar */}
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="/">Página Inicial</Link>
          </li>
          <li>
            <Link href="/books">Livros</Link>
          </li>
          <li>
            <Link href="/categories">Categorias</Link>
          </li>
        </ul>
      </nav>
  );
}
