import { Box, Center, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React from "react";
import Proyect from "../proyect/Proyect";
import Contact from "../contact/Contac";
import Typewriter from "typewriter-effect";

function Table() {

  return (
    <Tabs isFitted variant="enclosed">
      <TabList w="100%" h={10}>
        <Tab w="34%" borderTopLeftRadius={12}>
          Home
        </Tab>
        <Tab w="34%">Proyect</Tab>
        <Tab w="34%" borderTopRightRadius={12}>
          Contact
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Center
            fontSize={{ base: 25, md: 25, lg: 36 }}
            fontWeight="bold"
            fontFamily="Titillium Web"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(900)
                  .deleteAll()
                  .typeString("Facundo Aylan")
                  .pauseFor(300)
                  .typeString("<p></p>--Full stack--")
                  .start();
              }}
            />
          </Center>
        </TabPanel>
        <TabPanel>
          <Box h="70vh">
            <Proyect />
          </Box>
        </TabPanel>
        <TabPanel>
          <Box h="70vh">
            <Contact />
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Table;