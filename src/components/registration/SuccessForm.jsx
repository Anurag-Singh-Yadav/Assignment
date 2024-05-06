import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SuccessForm() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          navigate("/");
          clearInterval(intervalId);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-between py-12">
      <div className="w-[90%] sm:w-[55%] md:[35%] flex flex-col items-center gap-2">
        <div>
          <img src="./Tick.svg" alt="tick" />
        </div>
        <div className="text-[#2DA950] text-2xl text-center py-2 font-semibold">
          Success Submitted
        </div>
        <div className="font-bold text-xl sm:text-2xl md:text-4xl">Congratulations</div>
        <div className="text-[#727272] sm:text-base text-sm">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to you shortly with updates.
        </div>
      </div>
      <div className="text-[#727272] sm:text-base text-xs">
        Redirecting you to Homepage in <span className="inline font-bold">{timer} second{timer !== 1 && "s"}</span>
      </div>
    </div>
  );
}

export default SuccessForm;
