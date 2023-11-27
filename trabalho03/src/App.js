import './App.css';
import Imagem from './img/contador.jpeg'
import SimpleCounter from "./componente/SimpleCounter";

 
function App() {
  return (
    <div className="App">
 
      <SimpleCounter />
      <img className='imagem' src={Imagem} />


    </div>
  );
}
export default App;
