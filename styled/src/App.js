import Form from './Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="About">
    <Form name="Site name"/>
    </div>
    <div className="sub">
    <Form name = "About us"/>
    <Form name = "Prices"/>
    <Form name = "Start page"/>
    <Form name = "Offer"/>
    <Form name = "Contact"/>
    </div>
    </div>
  );
}

export default App;
