import './App.css';
import Header from './Header/Header'
import Content from './Content/Content'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Content/>
      </div>
    </BrowserRouter>
  );
}

export default App;
