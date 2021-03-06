import { useState } from 'react';
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
    setModalOpen(!modalOpen)
  };

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
