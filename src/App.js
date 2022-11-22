import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddUrl from './components/AddUrlComponent';
import ViewAllUrls from './components/ViewUrlComponent';

function App() {
  return (
    <div className="App">
      <div className='AddUrl'>
      <AddUrl/>
      </div>
      <div className='ViewUrl'>
      <ViewAllUrls/>
      </div>
    </div>
  );
}

export default App;
