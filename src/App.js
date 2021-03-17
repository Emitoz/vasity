import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import ShareModal from "./components/share-modal";

import AOS from 'aos';
import "aos/dist/aos.css";
AOS.init();

function App() {

  const [ modalOpen, setModalOpen ] = useState(false);

  const toggleModal = () => {
    console.log('Hey');
    setModalOpen(!modalOpen)
    };
  console.log(modalOpen);

  return (
    <div className="App">
      <Navbar />
      <Main toggleModal={toggleModal}/>
      <Footer />
      { modalOpen && <ShareModal /> }
    </div>
  );
}

export default App;
