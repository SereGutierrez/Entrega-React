import Historia from './components/Historia';

import data from './components/data.json';

function App() {
  return (
    <div className="App">
      <Historia arrayData={data}/>
    </div>
  );
}

export default App;
