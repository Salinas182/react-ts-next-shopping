import React from 'react';
import { Button } from "@mui/material";

export default function ChangeViewButtons({ setShowLessItems }: any) {
  const buttonsStyle = { margin: '3px' };
  return (
    <>
      <Button
        variant="outlined"
        sx={buttonsStyle}
        onClick={() => setShowLessItems(true)}
      >
        -
      </Button>
      <Button
        variant="outlined"
        sx={buttonsStyle}
        onClick={() => setShowLessItems(false)}
      >
        +
      </Button>
    </>
  )
}
