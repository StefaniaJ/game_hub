import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem bg="coral" area={"nav"}>
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem bg="blue.300" area={"aside"}>
            Aside
          </GridItem>
        </Show>
        <GridItem bg="green.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
