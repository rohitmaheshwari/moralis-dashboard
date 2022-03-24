import Head from "next/head";
import { Flex, Text, Button, Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useMoralis } from "react-moralis"
import Header from "../components/Header";
import Profile from "../components/Profile";
import Balance from "../components/Balance";
import Transactions from "../components/Transactions";
import Nft from "../components/Nft";
import Send from "../components/Send";


export default function Home() {
  const { isAuthenticated, authenticate, account, user, logout, authError, isLoggingOut, isAuthenticating } = useMoralis();

  if (!isAuthenticated) {
    return (
      <>
        {/* // Document name display in browser tab */}
        <Head>
          <title>Login | dashboard</title>
        </Head>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='center'
          width='100vw'
          height='100vh'
          bgGradient='linear(to-br, teal.400, purple.300)' // to-br -> to bottom-right
        >
          <Text fontSize='5xl' fontWeight='bold' color='white'>Dashboard</Text>
          <Button colorScheme='purple' size='lg' mt='6' onClick={() => authenticate({
            signingMessage: "Sign to login to dashboard"
          })} disabled={isAuthenticating}>Login with metamask</Button>
          {authError &&
            <Text color="red" textAlign='center'>
              {authError.name}
              {authError.message}
            </Text>
          }
        </Flex>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Flex direction="column" width="100vw" height="100vh">
        <Header user={user} logout={logout} isLoggingOut={isLoggingOut} />
        <Box flex="1" bg="purple.100" px="44" py="20">
          <Tabs size="lg" colorScheme="purple" align="center" variant="enclosed">
            <TabList>
              <Tab fontWeight="bold">Profile</Tab>
              <Tab fontWeight="bold">Balance</Tab>
              <Tab fontWeight="bold">Transactions</Tab>
              <Tab fontWeight="bold">NFTs</Tab>
              <Tab fontWeight="bold">Send ETH</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Profile user={user} />
              </TabPanel>
              <TabPanel>
                <Balance user={user} />
              </TabPanel>
              <TabPanel>
                <Transactions user={user} />
              </TabPanel>
              <TabPanel>
                <Nft user={user} />
              </TabPanel>
              <TabPanel>
                <Send />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  )
}
