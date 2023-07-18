import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import M_button from './components/M_button';


function App() {
  return (
    <>
      <div className="xl:container">
      <div className="container mx-auto sh-2xl">
        <Header/>
      <M_button/>
      </div>
      </div>
      </>
  );
}

export default App;
