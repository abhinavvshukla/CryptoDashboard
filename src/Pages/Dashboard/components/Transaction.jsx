import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { MdCurrencyRupee } from "react-icons/md";
import { TbCoinBitcoinFilled } from "react-icons/tb";
const Transaction = () => {
  const transactions = [
    {
      id: "1",
      icon: MdCurrencyRupee,
      text: "INR Deposit",
      amount: "+ INR 81,554.10",
      timestamp: "2023-08-09 7:06 PM",
    },
    {
      id: "2",
      icon: TbCoinBitcoinFilled,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2023-05-01 7:06 PM",
    },
    {
      id: "3",
      icon: MdCurrencyRupee,
      text: "INR Deposit",
      amount: "+ INR 81,554.10",
      timestamp: "2023-08-09 7:06 PM",
    },
  ];

  return (
    <CustomCard h='full'>
      <Text fontSize="sm" mb="6" color="black.80">
        Recent Transactions
      </Text>
      <Stack>
        {transactions.map((t, idx) => (
          <Fragment key={t.id}>
            {idx !== 0 && <Divider mt='4' />}
            <Flex  gap="5">
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={t.icon} />
              </Grid>
              <Flex justify="space-between" width="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{t.text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {t.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{t.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button width='full' mt='3' colorScheme="gray">View All</Button>
    </CustomCard>
  );
};

export default Transaction;
