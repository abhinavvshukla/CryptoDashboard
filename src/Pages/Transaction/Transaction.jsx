import { Card, Flex, Button, Icon, HStack } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout.jsx";
import React from "react";
import { FaSearchDollar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { TransactionTable } from "./components/TransactionTable.jsx";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={FaDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius={4}>
        <Tabs>
          <TabList pt="4" display="flex" width="full" justifyContent='space-between'>
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxWidth="200px">
              <InputLeftElement pointerEvents="none">
                <Icon as={FaSearchDollar} />
              </InputLeftElement>
              <InputGroup border='black' type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
