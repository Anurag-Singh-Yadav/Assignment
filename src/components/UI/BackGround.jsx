import React from "react";
import Customer from "../../assets/image.svg";
import ReducedClient from "../BackImage/ReducedClient";
import ReductionAchieved from "../BackImage/ReductionAchieved";
import Staff from "../BackImage/StaffDeployment";

function BackGround() {
  return (
    <div className="relative py-4 ssm:py-0">
      <img
        src={Customer}
        alt="happyCustomer"
        className="rounded-3xl ssm:h-[400px] h-[250px] relative left-[35px] "
      />
      <ReductionAchieved />
      <Staff />
      <ReducedClient />
    </div>
  );
}

export default BackGround;
