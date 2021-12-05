import './App.css';
import 'animate.css';
import kittenImg from './img/kitten-love.gif';

function App() {
  return (
    <div className="App">
      <p className="animate__animated animate__slideInRight animate__infinite">Anh chin nhũi, anh yêu em nhất ❤️❤️❤️️</p>
      <img src={kittenImg} alt="cat sorry" width="250" />
    </div>
  );
}

export default App;
