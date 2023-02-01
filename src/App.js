import { Box } from "@chakra-ui/react";
import React from "react";
import Background from './Component/background/Background'
import Table from "./Component/table/Table";
import { Button, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

function App(ButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      pt={2}
      m={0}
      position="relative"
    >
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: "none" }}
        w="fit-content"
        {...ButtonProps}
        position='absolute'
        zIndex={2}
        border='2px'
        borderColor='green'
        ml='1%'
        bg='green'
      >
        {colorMode === "light" ? <BsMoonStarsFill  /> : <BsSun />}
      </Button>
      <Box
        position="absolute"
        zIndex={2}
        h={{ base: "70%", md: "90%", lg: "80%" }}
        w={{ base: "80%", md: "80%", lg: "50%" }}
        mt={{ base: "45px", md: "2px", lg: "3%" }}
        ml={{ base: "10%", md: "10%", lg: "24%" }}
        borderRadius={12}
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
        border="2px"
        borderColor="green"
      >
        <Table />
      </Box>
      <Background />
    </Box>
  );
}

export default App;
