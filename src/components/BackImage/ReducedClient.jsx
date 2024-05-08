function ReducedClient() {
  return (
    <div className="bg-green-950 text-white rounded-3xl hidden  w-[48%] sm:p-47 p-2 text-[14px] sm:flex flex-col sm:gap-2 gap-1 relative sm:right-[-240px] sm:bottom-[195px] right-[-160px] bottom-[128px] shadow-sm hover:shadow-lg pr-2 mr-1">
      <div className="flex sm:gap-3 gap-1 tracking-tighter ">
        <h1
          className="sm:text-[44px] text-[20px] font-semibold text-[#FFFFFF]"
        s>
          $0.5
        </h1>
        <p className="self-end sm:pb-3 pb-1 sm:text-[16px] text-[13px] text-[#A6A3A0] font-semibold tracking-wider ">
          MILLION
        </p>
      </div>
      <p className="text-[#CCCCCC] sm:text-[13px] text-[10px] leading-4">
        Reduced client expenses by saving on hiring and employee costs.
      </p>
    </div>
  );
}
export default ReducedClient;
