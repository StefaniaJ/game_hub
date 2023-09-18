import { HStack, Text, useColorMode, Switch } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
        size="lg"
        onClick={toggleColorMode}
      />

      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
