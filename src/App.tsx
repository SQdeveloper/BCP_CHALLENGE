import { Banner } from "./components/Banner/Banner";
import { Benefits } from "./components/Benefits/Benefits";
import { Layout } from "./layout/Layout";
import { VARIANT_BANNER } from "./types/experiment.types";

function App() {
  return (
    <Layout>
      <Banner config={{ variant: VARIANT_BANNER.BANNER_B }} />
      <Benefits />
    </Layout>
  );
}

export default App;
