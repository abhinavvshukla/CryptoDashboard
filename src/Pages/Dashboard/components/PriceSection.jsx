import { Card, Flex, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { HStack, Button, Stack, Text } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import graph from "../../../../public/graph.svg";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const PriceSection = () => {
  //var imageName = require('cryptoDashboard\public\graph.svg');
  const timestamps = ["7:15 PM", "7:55 PM", "8:15 PM", "8:55 PM", "9:15 PM"];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px">Current Price</Text>
          </HStack>
          <Stack spacing={4}>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                $22.39452121
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaPlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={FiMinus} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" >
        <Flex justify="end" >
          <TabList bg='black.5' p='3px'>
            {
                ["1H","1D","1W","1M"].map( (tab) => (
                    <Tab _active={{bg:'white'}} key={tab} fontSize='sm' p='6px' borderRadius='4'>
                        {tab}
                    </Tab>
                ) )
            }
            
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src={graph} mt="50px" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
