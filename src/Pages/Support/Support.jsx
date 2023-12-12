import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMailOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import InfoCard from "../../Pages/Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";
const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="80px">
        <SupportCard
          leftComponent={<ContactCard />}
          title="Contact US"
          icon={IoMailOutline}
          text="Have a genuine question or just want to know more? Feel free to reach
          out to us."
        />
        <SupportCard
          leftComponent={
            <InfoCard
              tagText="Contact"
              text="Learn More about Mortage and loans"
            />
          }
          title="Live Chat"
          icon={FaRegMessage}
          text="Don't have time to wait for the answer ? Chat with us now , and get."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
