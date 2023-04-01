import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { useState } from "react";
import { dataTasks } from "./data/dataTasks";

import GlobalStyled from "./Globals/globalStyled";
import { TableCart } from "./Components/TableCart";

export default function App() {
  const orderPrice1 = (e) => {
    setTasks([...tasks].sort((a, b) => (a.price > b.price ? -1 : 1)));
  };

  const orderPrice2 = (e) => {
    setTasks([...tasks].sort((a, b) => (a.price > b.price ? 1 : -1)));
  };

  const [tasks, setTasks] = useState([...dataTasks]);

  return (
    <ChakraProvider>
      <GlobalStyled />

      <div className="App">
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={"50px 1fr 30px"}
          gridTemplateColumns={"20% 1fr"}
          h="100vh"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" bg="orange.300" area={"header"}>
            Header
          </GridItem>
          <GridItem pl="2" bg="pink.300" area={"nav"}></GridItem>
          <GridItem pl="2" bg="green.300" area={"main"}>
            <Box w={"90%"}>
              <TableCart
                orderPrice1={orderPrice1}
                orderPrice2={orderPrice2}
                tasks={tasks}
                setTasks={setTasks}
              />
            </Box>
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={"footer"}>
            Footer
          </GridItem>
        </Grid>
      </div>
    </ChakraProvider>
  );
}
