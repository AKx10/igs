import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { ArrowDropDown } from "@mui/icons-material";

export default function ExpDatePicker({
  options = [],
  value = "",
  placeholder = "",
  handleChange = () => {},
  formError = "",
  label = "",
  borderColor = "#E7E7E7",
  textColor = "#000",
  monthPlaceholder = "MM",
  yearPlaceholder = "YYYY",
  ...rest
}) {
  return (
    <FormControl className="flex w-full">
      <FormLabel className="text-[16px] font-medium">{label}</FormLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="flex flex-row gap-4">
          <DatePicker
            placeholder={monthPlaceholder}
            views={["month"]}
            indicator={<ArrowDropDown style={{ color: "#999999" }} />}
            {...rest}
            sx={{
              "& .MuiInputBase-input": {
                color: `${textColor}!important`,
              },
              "&:focus-within": {
                outline: "0px ",
                outlineOffset: "0px",
              },
              "--Input-minHeight": "48px",
              "--Input-radius": "12px",
            }}
          />
          <DatePicker
            views={["year"]}
            indicator={<ArrowDropDown style={{ color: "#999999" }} />}
            placeholder={yearPlaceholder}
            {...rest}
            sx={{
              "& .MuiInputBase-input": {
                color: `${textColor}!important`,
              },
              "&:focus-within": {
                outline: "0px ",
                outlineOffset: "0px",
              },
              "--Input-minHeight": "48px",
              "--Input-radius": "12px",
              "& .MuiInputBase-input::placeholder": {
                color: "#B2B2B2",
              },
            }}
          />
        </div>
      </LocalizationProvider>
      {formError && <FormHelperText>{formError}</FormHelperText>}
    </FormControl>
  );
}
