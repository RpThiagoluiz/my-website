import { HomePage } from './modules/Home';
import { ThemeProvider } from './provider/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
