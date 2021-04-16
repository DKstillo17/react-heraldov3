
import './App.css';
import './css/font-awesome.min.css';

import Header from './components/header';
import Script from './components/scripts';
import Footer from './components/footer';
import Footersection from './components/footer-section';
import Social from './components/social';
import Infocards from './components/infoCards';
import Cardnotice from './components/card-notice';
import Principal from './components/principal';
import Principals from './components/principals';
import Nav from './components/nav';
import Jumbotron from './components/jumbotron';

function App() {
  return (
    <div className="container">
        <Header></Header>
        <hr style={{marginBottom : "0.01em"}}></hr>
        <Nav></Nav>
        <hr class="line-t" max-width="100%" color="#b91d1d" style={{marginTop: "0.01em;"}}></hr>
        <Jumbotron></Jumbotron>
        <hr></hr>
        <Principals></Principals>
        <hr></hr>
        <Principal></Principal>
        <hr></hr>
        <Cardnotice></Cardnotice>
        <hr class="line-t" max-width="100%" color="#b91d1d" style={{marginTop: "0.01em;"}}></hr>
        <Infocards></Infocards>
        <hr></hr>
        <Social></Social>
        <Script></Script>
        <hr></hr>
        <Footersection></Footersection>
        <Footer></Footer>
    </div>
  )
}

export default App;
