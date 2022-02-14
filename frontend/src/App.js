import "./App.modules.css";
import ClockContainer from "./components/ClockContainer/ClockContainer"
import FooterContainer from "./components/FooterContainer/FooterContainer";
import ViewContainer from "./components/ViewContainer/ViewContainer";
import img from "./images/landscape1.jpg"

function App() {
  return (
    <div className="App">
      <img src={img} alt="background-img" className="background-img"></img>
      <div className="clock-container">
        <ClockContainer />
      </div>
      <div className="view-container">
        <ViewContainer />
      </div>
      <div className="footer-container">
        <FooterContainer />
      </div>
    </div>
  );
}

export default App;
