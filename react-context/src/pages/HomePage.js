import { useContext, useEffect, useState } from "react";
import {GlobalContext} from '../context/GlobalContext'
import { CardUser } from "../components/CardUser";
import { Card, Button, CardHeader, CardBody, Heading,Stack, StackDivider } from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react";


export const HomePage = () => {
  const context = useContext(GlobalContext);
  
  const {users, usuarios} = context

  useEffect(()=>{
    users()
  },[])

  return(
    <>
    <ChakraProvider>
      <Card>
        <CardHeader>
            <Heading size='md'>CONTATOS</Heading>
            {/* <Button colorScheme='teal' size='sm' onClick={() => users()}>
              Atualizar lista
            </Button> */}
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            {usuarios.map((user) => {
              return <CardUser 
                key={user.id}
                user={user}
              />
            })}
          </Stack>
        </CardBody>
        
      </Card>
    </ChakraProvider>
    </>
  )
}
