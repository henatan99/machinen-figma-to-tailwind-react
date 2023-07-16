import './App.css';
import Favorites from './components/Favorites';
import Header from './components/Header';
import TopSection from './components/TopSection';

function App() {
  return (
    <div className="bg-bg-main">
      <Header />
      <TopSection />
      <Favorites />
    </div>
  );
}

export default App;
