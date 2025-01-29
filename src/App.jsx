//import React, { useState } from 'react';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  //const [selectedScene, setSelectedScene] = useState("Home");

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}