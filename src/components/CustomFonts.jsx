import { Global } from "@mantine/core";
import mulishRegular from "../assets/fonts/mulish/Mulish-Regular.ttf";
import rajdhaniSemiBold from "../assets/fonts/rajdhani/Rajdhani-SemiBold.ttf";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Mulish",
            src: `url('${mulishRegular}') format("truetype")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Rajdhani",
            src: `url('${rajdhaniSemiBold}') format("truetype")`,
            fontWeight: 600,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}
