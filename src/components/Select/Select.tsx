import { TextField, MenuItem, TextFieldProps } from "@mui/material";

import React, { FC } from "react";

export const Select: FC<TextFieldProps & { options: { label: string, value: string }[] }> = ({ options, ...props }) => {
  return <TextField sx={{ minWidth: 100 }} size='small' select SelectProps={{ MenuProps: { disableScrollLock: true } }} {...props} >
    {options.map(i =>
      <MenuItem value={i.label}>{i.label}</MenuItem>
    )}
  </TextField>
};

