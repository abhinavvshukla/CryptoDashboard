import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import { MdArrowUpward } from "react-icons/md";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      bg="white"
      borderRadius="xl"
      p="6"
      spacing={16}
    >
      <Stack>
        <HStack spacing={16} color="black.80">
          <Text fontSize="14px">Total Portfolio Value</Text>
          <Icon as={IoInformationCircleOutline} />
        </HStack>
        <Text textStyle="h2" fontWeight="medium">
          $112,312.24
        </Text>
      </Stack>

      <Stack
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <HStack color="black.80">
          <Text fontSize="14px">Wallet Balance</Text>
        </HStack>
        <HStack spacing={4}>
          <HStack>
            <Text textStyle="h2" fontWeight="medium">
              $22.39452121
            </Text>
            <Tag colorScheme="gray">BTC</Tag>
          </HStack>
          <HStack>
            <Text textStyle="h2" fontWeight="medium">
              ®️1,30,445
            </Text>
            <Tag colorScheme="gray">INR</Tag>
          </HStack>
        </HStack>
      </Stack>

      <HStack>
        <Button leftIcon={<Icon as={FaArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={MdArrowUpward} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
