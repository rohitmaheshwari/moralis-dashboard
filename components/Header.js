import { Center, Flex, Text, Button } from '@chakra-ui/react'
import React from 'react';

const Header = ({ user, logout, isLoggingOut }) => {
    return (
        <header>
            <Flex px="10" py="6" justifyContent="space-between" bgColor="purple.400" color="white">
                <Center>
                    <Text fontSize="xl" fontWeight="bold">Moralis Dashboard</Text>
                </Center>
                <Center>
                    <Text>{user.getUsername()}</Text>
                    <Button ml="4" colorScheme="purple" onClick={() => logout()} disabled={isLoggingOut}>Logout</Button>
                </Center>
            </Flex>
        </header>
    )
}

export default Header