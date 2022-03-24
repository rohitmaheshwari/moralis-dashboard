import React, { useState } from 'react';
import CustomContainer from './CustomContainer';
import { FormControl, FormLabel, Text, Input, Button } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';

const Profile = ({ user }) => {
    const [input, setInput] = useState('');

    const { setUserData, isUserUpdating } = useMoralis();
    return (
        <CustomContainer>
            <Text><b>🤩&nbsp; Username: </b>{user.getUsername()}</Text>
            <Text><b>💸&nbsp; Wallet Address: </b>{user.get('ethAddress')}</Text>
            <form onSubmit={e => {
                e.preventDefault();
                if (input.trim() !== '') {
                    setUserData({
                        username: input
                    }).then(() => setInput(''));
                }
            }}>
                <FormControl mt="6" mb="6">
                    <FormLabel htmlFor='username'>Set a new username</FormLabel>
                    <Input id="username" type="text" placeholder='ex. rohit' value={input} onChange={(e) => setInput(e.target.value)} />
                </FormControl>
                <Button type='submit' colorScheme="purple" disabled={isUserUpdating}>✔&nbsp; Change Username</Button>
            </form>
        </CustomContainer>
    )
}

export default Profile