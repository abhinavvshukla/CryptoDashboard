import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transaction from "./components/Transaction";
import InfoCard from "./components/InfoCard";
import dot from '../../../public/dot_bg.svg';
const Dashboard = () => {
  return (
      <DashboardLayout title='Dashboard'>
        <Grid gridTemplateColumns={{
          base:'repeat(1, 1fr)',
          xl:'repeat(2, 1fr)',
        }}
        gap="6"
        >
          <GridItem colSpan={{
            base:1,
            xl:2
          }}>
            <PortfolioSection/>
          </GridItem>
          <GridItem colSpan={1}>
            <PriceSection/>
          </GridItem>
          <GridItem colSpan={1}>
            <Transaction/>
          </GridItem>
          <GridItem colSpan={1}>
            <InfoCard imgUrl="/dot_bg.svg"
            text="Learn more about Loans - keep your bitcoin, access it's value without selling it"  
            tagText='Loan'
            />
          </GridItem>
          <GridItem colSpan={1} i={2} >
            <InfoCard imgUrl="/grid_bg.svg"
            text="Learn more about our real estate, mortgage, and corporate account service"  
            tagText='Contact'/>
          </GridItem>
        </Grid>
      </DashboardLayout> 
  );
};

export default Dashboard;
