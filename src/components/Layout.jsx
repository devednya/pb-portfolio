import Header from './Header'
import Footer from './Footer'
import CustomCursor from './CustomCursor'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <CustomCursor />
      <Header />
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  )
}
