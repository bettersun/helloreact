import HelloOne from './HelloOne';
import HelloTwo from './HelloTwo';

import './App.css';

function App() {

  return (
    <div className="App">
      <div className={'column1'}>
        <HelloOne></HelloOne>
      </div>
      <div className={'column2'}>
        <HelloTwo></HelloTwo>
      </div>
    </div>
  );
}

export default App;
