import React from "react";
import Sidenav from '../components/Sidenav';
import TopNav from "../components/TopNav";
import { Box, Container, Flex } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";
import { useDisclosure } from '@chakra-ui/react';

const DashboardLayout = ({title, children}) => {
  const {isOpen,onClose, onOpen} = useDisclosure();
  
  return (
    <Flex>
        <Box display={{
            base:'none',
            lg:'flex'
        }}>
            <Sidenav />
        </Box>
        
        <SideDrawer isOpen={isOpen} onClose={onClose}/>
        <Box flexGrow={1}>
          <TopNav onOpen = {onOpen} title={title} />
          <Container overflowX='hidden' overflowY='auto' h='calc(100vh-60px)' mt='6' maxW='70rem'>{children}</Container>
        </Box>
    </Flex>
  )
}

export default DashboardLayout