import * as React from "react";
import { useContext, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import context from "../../CartContext";

function valuetext(price) {
  return `${price}°C`;
}

export default function RangeSlider() {
  const { initProducts, setPDetails } = useContext(context);
  const timer = useRef();
  const [value, setValue] = React.useState([50, 300]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      const filterProducts = initProducts.current.filter((product) => {
        return product.price >= value[0] && product.price <= value[1];
      });

      setPDetails(filterProducts);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        min={0}
        max={500}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
