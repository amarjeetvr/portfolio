import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  Profile,
  Education,

} from "./components";
import Certificate from "./components/certificate";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Stars only once in background */}
        <StarsCanvas />

        <div className="relative z-10 bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Experience />
          <Tech />
          <Works />
          <Profile />
          <Feedbacks  />
         <Certificate/>
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
