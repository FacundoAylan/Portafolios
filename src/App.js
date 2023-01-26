import { Box } from "@chakra-ui/react";
import React from "react";
import Background from './Component/background/Background'

function App() {
  return (
    <Box w='100%' h='100vh' bg='#111' p={0} m={0}>
      <Background/>
    </Box>
  );
}

export default App;
