import { Box, Center, Input } from "@chakra-ui/react";
import { loginWelcome } from "../services/loginWelcome";
import { Btn } from "./Button/Button";
import { Header } from "./Header/Header";

export const Card = () => {

  return (
    <div>
      <Header />
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Btn
              title="Enviar"
              handleClick={loginWelcome}
            />
          </Center>
        </Box>
      </Box>
    </div>
  )
}