import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import { ArrowDropDown } from "@mui/icons-material";

export default function SelectInput({
  options = [],
  value = "",
  placeholder = "",
  handleChange = () => {},
  formError = "",
  label = "",
  borderColor = "#E7E7E7",
  textColor = "#000",
  ...rest
}) {
  return (
    <FormControl className="flex w-full">
      <FormLabel className="text-[16px] font-medium">{label}</FormLabel>
      <Select
        placeholder={placeholder}
        indicator={<ArrowDropDown style={{ color: "#999999" }} />}
        value={value}
        onChange={handleChange}
        {...rest}
        sx={{
          [`& .${selectClasses.indicator}`]: {
            transition: "0.2s",
            [`&.${selectClasses.expanded}`]: {
              transform: "rotate(-180deg)",
            },
          },
          "& input": {
            color: `${textColor}!important`,
          },
          "&:focus-within": {
            outline: "0px ",
            outlineOffset: "0px",
          },
          "--Input-minHeight": "48px",
          "--Input-radius": "12px",
          "& placeholder": {
            color: "#B2B2B2",
          },
        }}
      >
        {options?.map((item, index) => {
          return (
            <Option key={index} value={item?.value}>
              {item?.value}
            </Option>
          );
        })}
      </Select>
      {formError && <FormHelperText>{formError}</FormHelperText>}
    </FormControl>
  );
}
