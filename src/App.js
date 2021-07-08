import { GlobalStyle } from './Components/style/MainStyle';
import Home from './Components/Home/Home';
import Hero from './Components/Layout/Hero';
import InputBox from './Components/ShortLinks/InputBox';
import Showcase from './Components/Layout/Showcase';
import ShowcaseCards from './Components/Layout/ShowcaseCards';
import Boost from './Components/Layout/Boost';
import Footer from './Components/Layout/Footer';
function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Home />
      <Hero />
      <InputBox />
      <Showcase />
      <ShowcaseCards />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
