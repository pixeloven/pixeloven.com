import Footer from 'ui/Footer'
import Navigation from 'ui/Navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navigation />
      {children}
      <Footer />
    </section>
  )
}
