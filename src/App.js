import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import M_Button from './components/M_Button';

function App() {
  return (
    <>
      <div className="xl:container">
      <div className="container mx-auto sh-2xl">
      <Header/>
      <M_Button/>
      </div>
      </div>
      </>
  );
}

export default App;
