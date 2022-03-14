import React, { useState, useEffect } from "react";
import TopMenu from "../components/TopMenu";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
  TableCaption,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import { baseUrl } from "../config/api";
const MasterSkill = () => {
  const [skills, setSkills] = useState([]);
  const [input, setInput] = useState("");

  const addMasterSkill = async () => {
    try {
      const { data } = await axios.post(`${baseUrl}/api/skills/`, {
        skillName: input,
      });
      getMasterSkill();
    } catch (error) {
      console.log(error.response);
    }
  };

  const getMasterSkill = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/skills`);
      setSkills(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editMasterSkill = async (id) => {
    try {
      const { data } = await axios.put(`${baseUrl}/api/skills/${id}`, {
        skillName: input,
      });

      console.log(data);

      getMasterSkill();
    } catch (error) {
      console.log(error.response);
    }
  };

  const deleteMasterSkill = async (id) => {
    try {
      const { data } = await axios.delete(`${baseUrl}/api/skills/${id}`);

      getMasterSkill();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMasterSkill();
  }, []);
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
        <Table variant="simple" marginTop={"4"}>
          <Thead>
            <Tr>
              <Th>Skill ID</Th>
              <Th>Skill Name</Th>
              <Th>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      colorScheme={"purple"}
                      color="white"
                      marginRight="2"
                    >
                      Add New
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Add Master Skill</PopoverHeader>
                    <PopoverBody>
                      <Input
                        variant="outline"
                        onChange={(ev) => setInput(ev.target.value)}
                        placeholder="Input Level here"
                      />
                      <Button
                        marginTop="2"
                        colorScheme={"green"}
                        color="white"
                        marginRight="2"
                        onClick={addMasterSkill}
                      >
                        Submit
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {skills?.map((el) => (
              <Tr key={el?.id}>
                <Td>{el?.id}</Td>
                <Td>{el?.skillName}</Td>
                <Td>
                  <Flex>
                    <Popover>
                      <PopoverTrigger>
                        <Button
                          colorScheme={"cyan"}
                          color="white"
                          marginRight="2"
                        >
                          Edit
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Edit Master Skill</PopoverHeader>
                        <PopoverBody>
                          <Input
                            variant="outline"
                            onChange={(ev) => setInput(ev.target.value)}
                            defaultValue={el?.skillName}
                            placeholder="Input Level here"
                          />
                          <Button
                            marginTop="2"
                            colorScheme={"green"}
                            color="white"
                            marginRight="2"
                            onClick={() => editMasterSkill(el?.id)}
                          >
                            Submit
                          </Button>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                    <Button
                      colorScheme={"red"}
                      variant="ghost"
                      onClick={() => deleteMasterSkill(el?.id)}
                    >
                      Delete
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default MasterSkill;
