import { Grid } from "@material-ui/core";
import Api from "./components/Api";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container direction="row" justify="center" alignItems="center">
        <Api></Api>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
