import "./App.css";
import {
  Header,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Footer,
} from "./sections";

import { CTA, Brand, Navbar } from "./components";
function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
