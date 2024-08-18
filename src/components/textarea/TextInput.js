import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";

const TextInput = ({
  label = "",
  placeholder = "",
  formError = "",
  borderColor = "#E7E7E7",
  textColor = "#000",
  ...rest
}) => {
  return (
    <FormControl className="flex w-full">
      <FormLabel className="text-[16px] font-medium">{label}</FormLabel>
      <Input
        placeholder={placeholder}
        variant="outlined"
        // color={formError ? "danger" : "#000000"}
        {...rest}
        sx={{
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
      />
      {formError && <FormHelperText>{formError}</FormHelperText>}
    </FormControl>
  );
};

export default TextInput;
