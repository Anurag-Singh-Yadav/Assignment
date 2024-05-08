import Spark from "../../assets/spark, sparkle, 26.svg";
function ReductionAchieved() {
  return (
    <div className="bg-white ssm:w-[200px] ssm:left-[-18%] absolute ssm:top-[12%] rounded-2xl ssm:p-4 shadow-ssm hover:shadow-md ssm:pl-7 ssm:pt-5 p-3 ssm:h-[180px] w-[130px] h-[115px] left-[-10%] top-[12%] ">
      <div className="relative">
        <img
          src={Spark}
          alt="spark"
          className="absolute ssm:top-[-36px] ssm:left-[-35px] ssm:h-20 top-[-16px] left-[-15px] h-10"
        />
        <h2
          className="ssm:text-[45px] text-[30px] font-bold"
          style={{ fontFamily: "Switzer" }}
        >
          40%
        </h2>
      </div>
      <p className="ssm:text-[14px] text-[9px] text-[#828282] font-[500px] ssm:leading-[16px] leading-[13px]">
        Achieved reduction in project execution time by optimising team
        availability
      </p>
    </div>
  );
}
export default ReductionAchieved;
