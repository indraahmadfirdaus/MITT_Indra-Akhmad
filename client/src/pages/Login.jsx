import React, { useState } from "react";
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
import axios from "axios";
import { baseUrl } from "../config/api";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const body = {};
      body["username"] = input.username;
      body["password"] = input.password;
      const { data } = await axios.post(`${baseUrl}/api/login`, body);
      history.push("/dashboard");
      localStorage.setItem("access_token", data.data.access_token);
    } catch (error) {
      console.log(error.response);
    }
  };

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
          <Text fontSize={"xl"}>Welcome</Text>
        </Flex>
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            type="text"
            onChange={(ev) => setInput({ ...input, username: ev.target.value })}
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            onChange={(ev) => setInput({ ...input, password: ev.target.value })}
          />
          <Button
            onClick={handleLogin}
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
