import React from "react";
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
import TopMenu from "../components/TopMenu";

const Dashboard = () => {
  const history = useHistory();
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
        <TopMenu />
      </Box>
    </Box>
  );
};

export default Dashboard;
