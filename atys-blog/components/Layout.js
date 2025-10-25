
import Header from './Header'
import Footer from './Footer'
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-8">{children}</main>
      <Footer />
    </>
  )
}
