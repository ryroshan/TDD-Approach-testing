import './style.css'
import Header from './components/header/index'
import Headline from './components/header/headline'

function App() {
  return (
    <div className="App">
      <Header />
      <Headline heading='Heading' desc='description'/>
    </div>
  );
}

export default App;
