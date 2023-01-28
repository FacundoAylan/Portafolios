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
        h={{base: '70%', md: '70%', lg: '80%'}}
        w={{base: '80%', md: '80%', lg: '50%'}}
        mt={{base: '1%', md: '1%', lg: '3%'}}
        ml={{base: '10%', md: '10%', lg: '24%'}}
        borderRadius={12}
        bg='white'
      >
        <Table/>
      </Box>
      <Background />
    </Box>
  );
}

export default App;
