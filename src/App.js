import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <Header />
      <main class="bg-gray-100 h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
