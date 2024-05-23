import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: "black",
    dark: "white",
  };
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
    />
  );
};

export default DarkModeSwitch;
// import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
// import { FaMoon, FaSun } from "react-icons/fa";

// export const ColorModeSwitcher = (props) => {
//   const { toggleColorMode } = useColorMode();
//   const text = useColorModeValue("dark", "light");
//   const SwitchIcon = useColorModeValue(FaMoon, FaSun);

//   return (
//     <IconButton
//       size="md"
//       fontSize="lg"
//       variant="ghost"
//       color="current"
//       marginLeft="2"
//       onClick={toggleColorMode}
//       icon={<SwitchIcon />}
//       aria-label={`Switch to ${text} mode`}
//       {...props}
//     />
//   );
// };
