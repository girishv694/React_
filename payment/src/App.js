
import './App.css';
import LogoDate from './components/LogoDate';


function App() {
  return (
    <div className="App">
      <LogoDate date="12/12/2021" url="http://www.deansgarage.com/wp-content/uploads/Amazon-A-logo.png" classs="main"/>
      <br/>
      <LogoDate date="12/12/2021" url="http://www.deansgarage.com/wp-content/uploads/Amazon-A-logo.png" classs="main"/>
      <br/>
      <LogoDate date="12/12/2021" url="http://www.deansgarage.com/wp-content/uploads/Amazon-A-logo.png" classs="back"/>
      
    </div>
  );
}

export default App;
