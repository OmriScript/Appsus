const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM
import { AppHeader } from './cmps/AppHeader.jsx'
import { Footer } from './cmps/Footer.jsx'
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { BookApp } from './pages/BookApp.jsx';
import { KeepApp } from './pages/KeepApp.jsx';
import { MailApp } from './pages/MailApp.jsx';


export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>
            <main>
                <Switch>
                    <Route component={MailApp} path="/mail" />
                    <Route component={KeepApp} path="/keep" />
                    <Route component={BookApp} path="/book" />
                    <Route component={About} path="/about/" />
                    <Route component={Home} path="/" />
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </Router>
    )
}


