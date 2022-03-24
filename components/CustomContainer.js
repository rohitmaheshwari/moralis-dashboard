import React from 'react';
import { Box } from '@chakra-ui/react';

const CustomContainer = ({ children }) => {
    return (
        <Box bg="white" width="full" height="full" px="20" py="10" rounded="lg" shadow="lg" textAlign="left">
            {children}
        </Box>
    )
}

export default CustomContainer