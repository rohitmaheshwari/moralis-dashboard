import React, { useState, useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import CustomContainer from './CustomContainer';
import { Text, Link } from '@chakra-ui/react';

const Transactions = ({ user }) => {
    const [trasactions, setTrasactions] = useState([]);

    const Web3API = useMoralisWeb3Api();
    const BASE_URL = "https://rinkeby.etherscan.io/tx/";

    const fetchTransactions = async () => {
        const data = await Web3API.account.getTransactions({
            chain: "rinkeby",
            address: user.get("ethAddress"),
            limit: 5
        });

        if (data) {
            setTrasactions(data.result);
        }
    }

    useEffect(() => {
        fetchTransactions();
    }, [])


    return (
        <CustomContainer>
            <Text fontSize="xl" mb="6" fontWeight="bold">My last 5 trasactions</Text>
            {trasactions && trasactions.map((transaction, index) => (
                <div key={index}>
                    <Link href={BASE_URL + transaction.hash} >➡️&nbsp; {transaction.hash}</Link>
                </div>
            ))}
        </CustomContainer>
    )
}

export default Transactions