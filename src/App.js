import Game from "./components/Game";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './image.png';

function App() {
  return (
    <div style={{backgroundImage:`url(${image})`,backgroundPosition: 'center',
    backgroundSize: 'cover',
    position:"fixed",
    minWidth:"100%",
    minHeight:"100%",
    }}>
    <div style={{marginLeft:"40%", marginTop:"2%"}}>
    <h2 className="display-4 strong"> Tic Tac Toe </h2>
    </div>
    <div style={{ margin: "3% 40%" }}>
      <Game />
    </div>
    </div>
  );
}

export default App;
