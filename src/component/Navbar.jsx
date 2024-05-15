import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box background="teal" p="4">
      <Flex align="center" justify="space-around">
        <Flex align="center">
          <Image src="https://th.bing.com/th?id=OIP._xqATV2x664IX4Ps-AsBQQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Logo" boxSize="50px" mr="4" />
          <Text fontSize="xl" fontWeight="bold" color="white">My Restaurant</Text>
        </Flex>
        <Flex align="center" gap="20px">
          <Box mr="4" >
            <Link to="/" color="white" fontSize="lg" fontWeight="bold" >Home</Link>
          </Box>
          <Box>
            <Link to="/favroite" color="white" fontSize="lg" fontWeight="bold">Favroites</Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
