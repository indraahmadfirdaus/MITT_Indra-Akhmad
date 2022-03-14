import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box
      minH={"100vh"}
      bgColor="gray.100"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Box
        borderRadius={"xl"}
        bgColor="white"
        shadow={"md"}
        padding="4"
        width={{ base: "60vw", md: "50vw", xl: "35vw" }}
      >
        <Flex alignItems={"center"} justifyContent="center">
          <Text fontSize={"xl"}>Make an Account</Text>
        </Flex>
        <FormControl>
          <FormLabel htmlFor="email">Username</FormLabel>
          <Input id="username" type="text" />
          <FormLabel htmlFor="email">Password</FormLabel>
          <Input id="username" type="text" />
          <Button
            colorScheme={"cyan"}
            color="white"
            width={"100%"}
            marginTop="4"
          >
            Login
          </Button>
          <Text marginTop="2">
            Don't Have Account ?
            <Text
              color="cyan.500"
              marginLeft={"2"}
              cursor="pointer"
              display={"inline-block"}
            >
              Register Here
            </Text>
          </Text>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
