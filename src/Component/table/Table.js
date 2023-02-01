import { Box, Center, keyframes, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React from "react";
import Proyect from "../proyect/Proyect";
import Contact from "../contact/Contact";
import AvatarAbout from "../about/About";

function Table() {
  const typing = keyframes `from { width: 0 }`;
  const blink = keyframes `50%{ border-color: transparent }`

  const myanimation = `${typing} 3s infinite  steps(4), 
  ${blink} .2s infinite step-end alternate`
  return (
    <Tabs isFitted variant="enclosed" h='100%' >
      <TabList
        w="100%"
        h={10}
        color="white"
        fontWeight="bold"
        fontFamily="Titillium Web"
        size="lg"
        mt="0.2%"
      >
        <Tab _selected={{ color: "white" }} borderColor="black" bg="green"  m='2px'>
          Home
        </Tab>
        <Tab _selected={{ color: "white" }} borderColor="black" bg="green"  m='2px'>
          Proyect
        </Tab>
        <Tab _selected={{ color: "white" }} borderColor="black" bg="green"  m='2px'>
          Contact
        </Tab>
      </TabList>
      <TabPanels w="100%"  h='91%'>
        <TabPanel w="100%">
          <Center
            fontSize={{ base: 25, md: 25, lg: '6xl' }}
            fontWeight="bold"
            fontFamily="Titillium Web"
          >
            {/* <AvatarAbout/>
            <Text
              bgGradient="linear(to-l,  #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Facundo Aylan
            </Text> */}
              <Text  
              as='span'
              display='block' 
              fontFamily='monopace'
              whiteSpace='nowrap'
              borderRight='1px'
              w='4ch'
              overflow='hidden'
              animation = {myanimation}
              >hola</Text>

          </Center>
        </TabPanel>
        <TabPanel w="100%"  h='100%'>
          <Proyect />
        </TabPanel>
        <TabPanel  w="100%"  h='100%' >
          <Contact />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Table;
