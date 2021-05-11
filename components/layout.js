import TopAppBar from './appbar'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <TopAppBar />
            <main className="viewport">{ children }</main>
            <Footer />
        </>
    )
}