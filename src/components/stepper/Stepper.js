"use client";
const Stepper = ({ currentStep = 0, totalStep = 0 }) => {
  const percentage = Math.round((currentStep / totalStep) * 100);

  return (
    <div className="flex flex-col bg-white w-full flex-1 gap-3 rounded-[18px] p-6 h-[135px] items-center">
      <span className="flex text-black text-[28px] font-semibold">
        Step {currentStep}
      </span>
      <div className="flex flex-row w-full items-center justify-center gap-2">
        <div
          className={`flex relative h-[18px]  max-w-[400px] w-full bg-[#F3F3F3] rounded-full`}
        >
          <div
            className="flex left-0 top-0 bg-[#068D6D] rounded-full"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
            role="progressbar"
          />
        </div>
        <span className="text-black/40 text-[16px] font-medium">
          {currentStep}/{totalStep}
        </span>
      </div>
    </div>
  );
};

export default Stepper;
