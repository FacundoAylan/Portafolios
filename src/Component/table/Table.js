import { Center, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import Proyect from "../proyect/Proyect";
import Contact from "../contact/Contact";
import Typewriter from "typewriter-effect";

function Table() {

  return (
    <Tabs isFitted variant="enclosed" >
      <TabList
        w="100%"
        h={10}
        borderTopRightRadius={12}
        borderTopLeftRadius={12}
        color='white'
        fontWeight="bold"
        fontFamily="Titillium Web"
        size='lg'
        mt='1%'
      >
        <Tab _selected={{ color: 'white' }}  borderColor='black'  bg="green">Home</Tab>
        <Tab _selected={{ color: 'white' }}borderColor='black'  bg="green">
          Proyect
        </Tab>
        <Tab _selected={{ color: 'white' }}borderColor='black'  bg="green">Contact</Tab>
      </TabList>
      <TabPanels w="100%" >
        <TabPanel w="100%">
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
        <TabPanel w="100%">
          <Proyect />
        </TabPanel>
        <TabPanel w="100%" p={0}>
          <Contact />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Table;
