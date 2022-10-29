import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { DatePicker } from "@mui/x-date-pickers";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledTextFelid } from "./StyledTextFeild";

type propTypes = {
  label: string;
};
export const DatePickerX = ({ label }: propTypes) => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        components={{ OpenPickerIcon: KeyboardArrowDownIcon }}
        renderInput={(params) => <StyledTextFelid {...params} />}
      />
    </LocalizationProvider>
  );
};
