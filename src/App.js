import './App.css';
import {Link} from "react-router-dom"
import Fade from "react-reveal/Fade"

function App() {
  return (
    <>
    <div className="row mx-0">
      <div className="col d-flex py-5 mt-3 mb-4 justify-content-center">
        <Fade top duration={1650}>
          <img className="logo" src="img/home-page-with-graph.png" alt="mario cart chart"/>
        </Fade>
      </div>
    </div>

    <div className="d-flex justify-content-center">
      <Fade duration={1650}>
        <Link to="/builder" title="Let's GO!">
          <img className="star" src="img/star-spinning.gif" alt="spinning star"/>
        </Link>
      </Fade>
    </div>
    </>
  );
}

export default App;