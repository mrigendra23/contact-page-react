// import logo from './logo.svg';
import './App.css';
// import Buttons from './components/Button/Button';
import ContactHeader from './components/contactHeader/ContactHeader';
import Navigation from './components/navigation/Navigation';
import ContactForm from './components/ContactForm/ContactForm';
function App() {
  return (
    <div className="App">
    <Navigation/>
    <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
