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
      pt={0}
      m={0}
      position="relative"
    >
      <Box position='fixed' w='100%' m={0} zIndex={2}>
        <WithSubnavigation/>
      </Box>
      <Box position='absolute' zIndex={1}>
        <scroll-container>
          <scroll-page id='Inicio'>
            <Home/>
          </scroll-page>
          
          <scoll-page id='Sobre mi'>
            <About/>
          </scoll-page>

          <scroll-page id='Proyectos' >
            <Center fontSize='4xl' pt={{base:'65px', md:'60px'}}>Proyect</Center>
            <Flex  flexWrap='wrap' justifyContent='center' gap='10px'>
              <Cards
                image='https://i.ibb.co/BT7F5ZZ/weather.png' 
                name='Weather' 
                description='App donde podras consulta el clima de tu pais o cuidad.' 
                github='https://github.com/FacundoAylan/weather' 
                web='https://weather-eight-sigma.vercel.app/'
              />
              <Cards
                image='https://i.ibb.co/DbPQfq0/Cursort.png' 
                name='Cursort' 
                description='Ecommerce donde vas a poder comprar tus cursos de programacion.' 
                github='https://github.com/FacundoAylan/CurSort' 
                web='https://cursort.onrender.com/#/'
              />
              <Cards
                image='https://i.ibb.co/NmTZDkk/videogmames.png' 
                name='Videogames' 
                description='App donde vas a poder buscar informacion de tus videojuegos
                favoritos.' 
                github='https://github.com/FacundoAylan/VideoGamerPi' 
                web='https://video-gamer-pi.vercel.app/'
              />
              <Cards
                image='https://i.ibb.co/BT7F5ZZ/weather.png' 
                name='Country' 
                description='App donde vas a poder buscar informacion de los paises
                favoritos.' 
                github='https://github.com/FacundoAylan/HenryPI' 
                web=''
              />
            </Flex>
          </scroll-page>

          <scroll-page id='Contacto'>
            <Contact />
          </scroll-page>
        </scroll-container>
      </Box>
      <Background/>
    </Box>
  );
}

export default App;
