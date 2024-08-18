import { Button } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const FormLayout = ({
  title,
  isNextButton = true,
  isPrevButton = false,
  nextButtonText = "",
  prevButtonText = "",
  children,
  onPressNext = () => {},
  onPressPrev = () => {},
}) => {
  return (
    <div className="flex flex-1 w-[100%] max-w-[833px] min-h-[500px] h-[100%] bg-white rounded-[18px] px-[50px] pt-[50px] pb-[30px] flex-col overflow-auto ">
      <span className="flex text-black font-semibold text-[28px] mb-10">
        {title}
      </span>
      <div className="flex gap-7 flex-1 flex-col">{children}</div>
      <div className="flex justify-end gap-3">
        {isPrevButton && (
          <Button
            onClick={onPressPrev}
            className="flex border-[#068D6D] text-[#068D6D] font-bold rounded-full w-fit h-[48px]"
            variant="outlined"
          >
            <div className="flex px-3 items-center w-full">
              <span className="flex flex-1">{prevButtonText}</span>
            </div>
          </Button>
        )}
        {isNextButton && (
          <Button
            onClick={onPressNext}
            className="flex bg-[#068D6D] text-white font-bold rounded-full max-w-[278px] h-[48px] flex-1"
          >
            <div className="flex px-3 items-center w-full">
              <span className="flex flex-1">{nextButtonText}</span>
              <ArrowForwardRoundedIcon
                style={{ width: 14, height: 16, color: "#FFFFFF" }}
              />
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormLayout;
