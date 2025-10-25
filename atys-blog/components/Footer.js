
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12 py-6 text-center text-sm text-atysGray-500">
      <div className="container mx-auto px-6">
        © {new Date().getFullYear()} ATYS Tecnologia e Inovação. Todos os direitos reservados.
      </div>
    </footer>
  )
}
