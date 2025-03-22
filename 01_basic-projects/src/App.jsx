import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import Nav from "./components/Nav";
import RandomColorGenerator from "./components/random-color-generate/RandomColorGenerator";
import StarRating from "./components/star-rating/StarRating";
import LoadMore from "./components/load-more/LoadMore";

export default function App() {
  return (
    <div>
      <Nav />
      <Accordian /> 
      <RandomColorGenerator />
      <StarRating />
      <ImageSlider />
      <LoadMore />
    </div>
  )
}