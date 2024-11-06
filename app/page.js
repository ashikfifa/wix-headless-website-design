import DeployTempl from "./_components/DeployTempl";
import ExploreWix from "./_components/ExploreWix";
import Faq from "./_components/Faq";
import Footer from "./_components/Footer";
import HeroBanner from "./_components/HeroBanner";
import HorizontalScroll from "./_components/HorizontalScroll";
import JoinWix from "./_components/JoinWix";
import MultipleBusiness from "./_components/MultipleBusiness";
import WixApiHeader from "./_components/WixApiHeader";
import WixApiSection from "./_components/WixApiSection";
import { sliderDataMock } from "./helpers/mock-data";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <MultipleBusiness />
      <ExploreWix />
      <WixApiHeader />
      {/* <div>
        <h1>Horizontal Scroll Example</h1>
        <HorizontalScroll />
      </div> */}

      <HorizontalScroll />

      <DeployTempl />

      <JoinWix />

      <Faq />

      <Footer/>
    </div>
  );
}
