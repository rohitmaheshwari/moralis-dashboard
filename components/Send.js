import React, { useState } from 'react';
import CustomContainer from './CustomContainer';
import { Text, FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Input, Button, useToast } from '@chakra-ui/react';
import { useWeb3Transfer } from 'react-moralis';
import Moralis from 'moralis';

const Send = () => {
    const [amount, setAmount] = useState(0);
    const [receiver, setReceiver] = useState('');

    const { fetch, isFetching } = useWeb3Transfer({
        amount: Moralis.Units.ETH(amount),
        receiver: receiver,
        type: "native",
    });

    const toast = useToast();

    const handleChange = (value) => {
        setAmount(value);
    }

    console.log(amount, receiver);
    return (
        <CustomContainer>
            <Text fontSize="xl">Send ETH</Text>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await Moralis.enableWeb3();
                fetch({
                    onSuccess: () => {
                        toast({
                            title: 'ETH successfully sent',
                            description: 'Fresh ETH are showing up into the receiver wallet',
                            status: 'success',
                            duration: 9000,
                            inClosable: true
                        })
                        setReceiver('');
                    },
                    onError: (error) => {
                        toast({
                            title: 'Error',
                            description: error,
                            status: 'error',
                            duration: '9000',
                            isClosable: true
                        })
                    }
                })
            }}>
                <FormControl mt="4">
                    <FormLabel htmlFor='amount'>
                        Amount of ETH
                    </FormLabel>
                    <NumberInput step={0.1} onChange={handleChange}>
                        <NumberInputField id='amount' value={amount} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormLabel mt="4" htmlFor='receiver'>Send to</FormLabel>
                    <Input id="receiver" type="text" placeholder="Receiver Address" value={receiver} onChange={(e) => setReceiver(e.target.value)} />

                </FormControl>
                <Button mt="4" type="submit" colorScheme="purple" disabled={isFetching}>💸&nbsp; Send</Button>
            </form>
        </CustomContainer>
    )
}

export default Send