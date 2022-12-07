import { StylesConfig } from "react-select";
import { ICurrency } from "../../types";

export const selectStyles: StylesConfig<ICurrency> = {
  control: (styles) => ({
    ...styles,
    fontSize: "12px",
    border: "1px solid #EEEEEE",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: "#EEEEEE",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "#EEEEEE",
    padding: "3px",
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      fontSize: "12px",
      textAlign: "center",
    };
  },
};
