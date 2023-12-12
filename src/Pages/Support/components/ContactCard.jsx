import React from "react";

import {
  Flex,
  Stack,
  Text,
  Icon,
  Card,
  HStack,
  Textarea,
  Button,
  Box,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";

import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit
        </Text>

        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeHolder="Enter your Name..." />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input placeHolder="Enter your Last Name..." />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" placeHolder="Enter your email..." />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea type="email" placeHolder="Enter your message..." />
        </FormControl>
        <Checkbox p="4" defaultChecked>
          <Text fontSize="xs">
            {" "}
            I agree with
            <Box as="span" color="p.purple">
              Terms & Conditions
            </Box>
          </Text>
        </Checkbox>
        <Stack p="2">
          <Button fontSize="sm">Send a Message</Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
