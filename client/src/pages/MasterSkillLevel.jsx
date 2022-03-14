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
const MasterSkillLevel = () => {
  const [skillLevels, setSkillLevels] = useState([]);
  const [input, setInput] = useState("");
  const getMasterSkill = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/skillLevels`);
      setSkillLevels(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addMasterSkill = async () => {
    try {
      const { data } = await axios.post(`${baseUrl}/api/skillLevels/`, {
        skillLevelName: input,
      });
      getMasterSkill();
    } catch (error) {
      console.log(error.response);
    }
  };

  const editMasterSkill = async (id) => {
    try {
      const { data } = await axios.put(`${baseUrl}/api/skillLevels/${id}`, {
        skillLevelName: input,
      });

      getMasterSkill();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMasterSkill = async (id) => {
    try {
      const { data } = await axios.delete(`${baseUrl}/api/skillLevels/${id}`);

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
              <Th>Skill Level ID</Th>
              <Th>Skill Level Name</Th>
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
                    <PopoverHeader>Add Master Skill Level</PopoverHeader>
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
            {skillLevels?.map((el) => (
              <Tr key={el?.id}>
                <Td>{el?.id}</Td>
                <Td>{el?.skillLevelName}</Td>
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
                        <PopoverHeader>Edit Master Skill Level</PopoverHeader>
                        <PopoverBody>
                          <Input
                            variant="outline"
                            onChange={(ev) => setInput(ev.target.value)}
                            defaultValue={el?.skillLevelName}
                            placeholder="Input Level here"
                          />
                          <Button
                            marginTop="2"
                            colorScheme={"green"}
                            color="white"
                            marginRight="2"
                            onClick={() => editMasterSkill(el.id)}
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

export default MasterSkillLevel;
