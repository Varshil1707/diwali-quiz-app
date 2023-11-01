import Fireworks from '@fireworks-js/react';
import './App.css';
import Quiz from './Component/Quiz';

function App() {

  return (
    <div className='App'>
      <div className='hello' >
        <Fireworks className='fireworks' options={{ mouse: { click: true, max: 5 } }} />
        <Quiz />
      </div>
    </div>
  );
}

export default App;
