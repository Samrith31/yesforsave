import Hero  from "./components/hero";
import Welcome from "./components/welcome";
import { GetInvolved } from "./components/getinvolved";
import Testimonials from "./components/testimonials";
import { Slider } from "./components/slider";
import Youtube from "./components/youtube";







export default function Home() {
  return (
    <div>
      
      <Hero/>
      <Welcome/>
      <GetInvolved/>
      <Testimonials/>
      <Slider/>
      <Youtube/>
     
    </div>
  );
}
