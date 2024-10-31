import ExploreWix from "./_components/ExploreWix";
import HeroBanner from "./_components/HeroBanner";
import MultipleBusiness from "./_components/MultipleBusiness";
import WixApiSection from "./_components/WixApiSection";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <MultipleBusiness/>
      <ExploreWix/>
      <WixApiSection/>
    </div>
  );
}
