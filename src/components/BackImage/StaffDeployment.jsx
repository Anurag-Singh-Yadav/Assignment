import Aero from "../../assets/aero.svg";
import Jet from "../../assets/jet.svg";

function Staff() {
  return (
    <div className="bg-white flex ssm:gap-3 gap-1 rounded-full ssm:w-[180px] py-2 ssm:left-[-15%] ssm:bottom-[95px] bottom-[50px] w-[120px] relative shadow-ssm hover:shadow-md h-[40px] ssm:h-[60px]">
      <img src={Aero} alt="nitro jet" className="ssm:w-10 w-8 pl-2" />
      <img
        src={Jet}
        alt="jet"
        className="absolute ssm:left-2 ssm:top-5 top-3 left-3 ssm:h-[24px] h-[16px]"
      />
      <div className="flex flex-col justify-center">
        <h2 className="font-bold ssm:text-[19px] text-[11px]">10 DAYS</h2>
        <p className="ssm:text-[12px] text-[8px] font-medium text-[#828282]">
          Staff Deployment
        </p>
      </div>
    </div>
  );
}
export default Staff;
