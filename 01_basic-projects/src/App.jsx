import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import Nav from "./components/Nav";
import RandomColorGenerator from "./components/random-color-generate/RandomColorGenerator";
import StarRating from "./components/star-rating/StarRating";
import LoadMore from "./components/load-more/LoadMore";
import MenuTree from "./components/menu-tree/MenuTree";
import QRCodeGenerator from "./components/QR-code-generator/QRCodeGenerator";
import LightDarkMode from "./components/ligth-dark-mode/LightDarkMode";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
 
export default function App() {
  return (
    <div>
      <Nav /> */}
      <Accordian /> 
      <RandomColorGenerator />
      <StarRating />
      <ImageSlider />
      <LoadMore />
      <MenuTree />
      <QRCodeGenerator />
      <LightDarkMode />
      {/* <ScrollIndicator />       */}
    </div>
  )
}