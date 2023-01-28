import { Box } from "@chakra-ui/react";
import React from "react";
import Background from './Component/background/Background'
import Table from "./Component/table/Table";

function App() {
  return (
    <Box w="100%" h="100vh" bg="#111" pt={8} m={0} position="relative">
      <Box
        position="absolute"
        zIndex={2}
        h={{base: '70%', md: '90%', lg: '80%'}}
        w={{base: '80%', md: '80%', lg: '50%'}}
        mt={{base: '2px', md: '2px', lg: '3%'}}
        ml={{base: '10%', md: '10%', lg: '24%'}}
        borderRadius={12}
        bg='rgba(73, 72, 72, 0.644)'
        border='2px'
        borderColor='green'
      >
        <Table/>
      </Box>
      <Background />
    </Box>
  );
}

export default App;
