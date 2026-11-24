import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './Layout.module.css';
import Homepage from '../sections/Homepage';
import AboutMe from '../sections/AboutMe';
import Projects from '../sections/Projects';
import ContactPage from '../sections/ContactPage';

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.main}>
                <section id='home'>
                    <Homepage />
                </section>

                <section id='about'>
                    <AboutMe />
                </section>

                <section id='projects'>
                    <Projects />
                </section>

                <section id='contact'>
                    <ContactPage />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Layout;
