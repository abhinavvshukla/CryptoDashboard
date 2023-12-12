import React from "react";
import {FaRegUserCircle} from "react-icons/fa";
import {
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  Icon
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";


const TopNav = ({title, onOpen}) => {
  return (
    <Box px='4' bg='white'>
      <HStack maxW='70rem' h="16" justify="space-between" mx='auto'>
        <Icon as={FaBars} onClick={onOpen} display={{
            base:'block',
            lg:'none'
        }}/>
        <Heading fontWeight='medium' fontSize='28px'>{title}</Heading>
        <Menu>
          <MenuButton as={Button}>
            <Icon as={FaRegUserCircle} fontSize='24'/>
          </MenuButton>
          <MenuList>
            <MenuItem>LogOut</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
