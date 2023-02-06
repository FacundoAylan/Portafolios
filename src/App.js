import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import Background from './Component/background/Background'
import WithSubnavigation from './Component/navbar/navbar'
import About from './Component/about/About'
import Cards from './Component/card/card'
import Contact from "./Component/contact/Contact";
import Home from "./Component/home/home";

function App() {
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
      <WithSubnavigation/>
      <Box position='absolute' zIndex={2}>
        <scroll-container>
          <scroll-page id='Home'>
            <Home/>
          </scroll-page>
          
          <scoll-page id='About me'>
            <About/>
          </scoll-page>

          <scroll-page id='Proyect'>
            <Center fontSize='4xl'>Proyect</Center>
            <Flex  flexWrap='wrap' justifyContent='center' gap='10px'>
              <Cards
                image='https://i.ibb.co/BT7F5ZZ/weather.png' 
                name='Weather' 
                description='App donde podras consulta el clima de tu pais o cuidad.' 
                github='' 
                web=''
              />
              <Cards
                image='https://i.ibb.co/DbPQfq0/Cursort.png' 
                name='Cursort' 
                description='Ecommerce donde vas a poder comprar tus cursos de programacion.' 
                github='' 
                web=''
              />
              <Cards
                image='https://i.ibb.co/BT7F5ZZ/weather.png' 
                name='Videogames' 
                description='App donde vas a poder buscar informacion de tus videojuegos
                favoritos.' 
                github='' 
                web=''
              />
              <Cards
                image='https://i.ibb.co/BT7F5ZZ/weather.png' 
                name='Videogames' 
                description='App donde vas a poder buscar informacion de tus videojuegos
                favoritos.' 
                github='' 
                web=''
              />
            </Flex>
          </scroll-page>

          <scroll-page id='Contact'>
            <Contact />
          </scroll-page>
        </scroll-container>
      </Box>
      <Background/>
    </Box>
  );
}

export default App;
