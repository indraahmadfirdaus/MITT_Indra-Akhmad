import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../config/api";

const TopMenu = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const getUser = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/profile`, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Flex alignItems={"center"} justifyContent="center">
        <Text fontSize={"xl"}>Welcome, {user?.username} </Text>
      </Flex>
      <Flex alignItems={"center"} justifyContent="space-evenly">
        <Button
          colorScheme={"cyan"}
          color="white"
          marginTop="4"
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Home
        </Button>
        <Button colorScheme={"cyan"} color="white" marginTop="4">
          User Profile
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme={"cyan"}
            color="white"
            marginTop="4"
          >
            Master
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => {
                history.push("/master-skill");
              }}
            >
              Skill
            </MenuItem>
            <MenuItem
              onClick={() => {
                history.push("/master-skill-level");
              }}
            >
              Skill Level
            </MenuItem>
          </MenuList>
        </Menu>
        <Button
          variant="ghost"
          marginTop="4"
          onClick={() => {
            localStorage.clear();
            history.push("/");
          }}
        >
          Logout
        </Button>
      </Flex>
    </>
  );
};

export default TopMenu;
