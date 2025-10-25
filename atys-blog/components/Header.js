
import Link from 'next/link'
export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/"><a className="flex items-center gap-3">
            <img src="/logo.png" alt="ATYS" className="h-12 w-auto"/>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-atysBlue">ATYS</div>
              <div className="text-sm text-atysBlue">Soluções digitais e eficientes ao seu alcance</div>
            </div>
          </a></Link>
        </div>
        <nav className="space-x-4 text-sm">
          <Link href="/"><a>Home</a></Link>
          <Link href="/sobre"><a>Sobre</a></Link>
          <Link href="/blog"><a>Notícias</a></Link>
          <Link href="/equipe"><a>Equipe</a></Link>
          <Link href="/materiais"><a>Materiais</a></Link>
          <Link href="/simulacoes"><a>Simulações</a></Link>
          <Link href="/contato"><a>Contato</a></Link>
        </nav>
      </div>
    </header>
  )
}
