import Layout from './layout/Layout';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
    return (
        <DarkModeProvider>
            <LanguageProvider>
                <Layout />
            </LanguageProvider>
        </DarkModeProvider>
    );
}

export default App;
