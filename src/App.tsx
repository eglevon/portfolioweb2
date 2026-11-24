import Layout from './layout/Layout';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
    return (
        <DarkModeProvider>
            <Layout />
        </DarkModeProvider>
    );
}

export default App;
