import Nabvar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Nabvar/>
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
