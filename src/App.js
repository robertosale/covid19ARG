import React, { Component } from "react";
import "./App.css";
import BottomStats from "./components/BottomStats";
import pais from "./svgs/pais";
import ReactGA from "react-ga";
import { firebaseApp } from "./firebase";
import ContainerProvincias from "./components/ContainerProvincias";


const userRef = firebaseApp.database().ref().child('user');


class App extends Component {
  state = {
    height: window.innerHeight,

    stats : [{
              Activos:0,
              Confirmados:0,
              Distrito: "",
              Fallecidos: 0
    }]

  };

  


  updateHeight = () => {
    this.setState({ height: window.innerHeight });
  };


  listenForUser = () => {
    console.log(userRef);
    userRef.on("value", snap => {
      const stats = snap.val();
      console.log("stats::::::::::..",stats)
      this.setState({ stats:stats });
    });
  };

  componentWillMount() {
    this.listenForUser();
  }

  componentDidMount() {
    ReactGA.initialize("UA-162056074-1");
    ReactGA.pageview("/homepage");
    window.addEventListener("resize", this.updateHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateHeight);
  }


  render() {
    const { height,stats } = this.state;
    const total = stats[0];

    console.log("statsState:::::::::::::.",stats)
    

    return (
      <div className="container-app container position-relative">
        <h2 className="home-tittle position-absolute">Argentina</h2>
        <h5 className="home-sub-tittle position-absolute">COVID-19</h5>
        <div className="row">


          <ContainerProvincias pais={pais} stats={stats} height={height} />
          <BottomStats total={total} />

          <div className="footer col-12 fixed-bottom text-center">
            <span>Developed by 
             <a href="https://www.linkedin.com/in/roberto-moises-sale-563829187/"> Robert</a> y
           <a href="https://www.linkedin.com/in/benja-montero-9238a1119/"> Benja</a> - CovidArg v1.2
            </span>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
