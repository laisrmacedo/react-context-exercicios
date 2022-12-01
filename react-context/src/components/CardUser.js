import {Box,Text,Heading } from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useEffect, useState } from "react";
import {GlobalContext} from '../context/GlobalContext'
import './Card.css'


export const CardUser = (props) => {
  const context = useContext(GlobalContext);
  const {header} = context

  const [email, setEmail] = useState("")
  const [style, setStyle] = useState("nãoSelecionado")

  const userById = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${props.user.id}`, header)
    .then((response)=>{
      setEmail(response.data.email)
    })
    .catch((error)=>{
      console.log(error)
    })
  }   

  useEffect(()=>{
    userById()
  },[])
  

  const selecionaCard = (id) => {
    if(style === "selecionado"){
      setStyle("nãoSelecionado")
    }else {
      setStyle("selecionado")
    }
  }

  return(
    <Box onClick={() => selecionaCard(props.user.id)} className={style}>
      <Heading size='xs' textTransform='uppercase'>
        {props.user.name}
      </Heading>
      <Text pt='2' fontSize='sm'>
        {email}
      </Text>
    </Box>
  )
}