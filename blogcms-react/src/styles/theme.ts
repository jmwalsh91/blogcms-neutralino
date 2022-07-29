import { MantineTheme} from "@mantine/core";
//TODO: Make theme.
export const theme: MantineTheme | any = {
    colorScheme: 'dark',
    colors: {
        'primary': [
            "#DDE6E6",
            "#BDD3D2",
            "#9EC4C3",
            "#7EBBBA",
            "#5EB7B5",
            "#40B5B3",
            "#429392",
            "#407978",
            "#3D6464",
            "#385453",
            "#344746",
            "#2E3C3C"
          ],
          'secondary': [
            "#F4ECCE",
            "#EEDE9C",
            "#DFCA74",
            "#CEB656",
            "#BAA241",
            "#99883E",
            "#7F723A",
            "#6A6036"
          ],
          'accent': [
            "#AFB2AB",
            "#9CA095",
            "#8A9181",
            "#7B846F",
            "#6D7760",
            "#616C52",
            "#566246",
            "#4A533F",
            "#414639",
            "#383C33",
            "#31332D",
            "#2A2C28",
            "#252623"
          ],
          'warning': [
            "#EDDEDE",
            "#DDB9B9",
            "#D59292",
            "#D46A6A",
            "#DC3E3E",
            "#E81111",
            "#B72121",
            "#922A2A",
            "#762E2E",
            "#612E2E",
            "#502C2C",
            "#422A2A"
          ],
          'important': [
            "#E9DCE9",
            "#D8B9D7",
            "#CD96CC",
            "#C872C7",
            "#CA4CC9",
            "#CF27CD",
            "#A531A4",
            "#863485",
            "#6D356D",
            "#5A335A",
            "#4B304B",
            "#3F2C3F"
          ],
    },
    primaryShade: 5,
 //Focus ring setting
  focusRing: 'auto',
//Element border radius
  defaultRadius:'md',

  // White and black colors used for text and backgrounds
  white: "#fff5d9",
  black: "#000505",
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1275,
    xl: 1800,
  }
}

