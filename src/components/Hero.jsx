import HeroSvg from "../assets/hero-section.svg";
import Carousel from "./UI/Carousel";
import Button from "./UI/PrimaryButton";
import { LuArrowRight } from "react-icons/lu";

function ArrowRight() {
  return <LuArrowRight size={20} />;
}
export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-2 mt-10">
      <h2 className="font-coveredByYourGrace text-[#2DA950] text-4xl">
        Success Stories
      </h2>
      <p className="md:text-5xl sm:text-3xl text-xl font-semibold text-center">
        Every success journey <br></br> we{"'"}ve encountered.
      </p>
      <div className="sm:mt-20 mt-8 flex justify-between items-center sm:flex-row flex-col">
        <div className="sm:basis-1/2 ml-6 flex justify-center">
        <img src={HeroSvg}  alt="hero" className="shrink-0 w-11/12" draggable={false}/>
        </div>
        <div className="sm:space-y-20 space-y-8 sm:w-1/3">
          <Carousel data={CAROUSEL_DATA} />
          <Button icon={ArrowRight} styleName="primary">
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
}
const CAROUSEL_DATA = [
    "Enhance fortune 50 company’s insights teams research capabilities",
    "Strengthen the research capabilities of Fortune 50 company's insights teams",
    "Augment the research capabilities of the insights teams at a Fortune 50 corporation",
  ];