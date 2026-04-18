import { Banner } from "./components/Banner/Banner";
import { Benefits } from "./components/Benefits/Benefits";
import { useExperiment } from "./hooks/useExperiment";
import { Layout } from "./layout/Layout";
import { Form } from "./components/Form/Form";
import { useScrollTracking } from "./hooks/useScrollTracking";

function App() {
  const { variant } = useExperiment();

  useScrollTracking(variant);

  return (
    <Layout>
      <Banner variant={variant} />
      <Benefits />
      <Form variant={variant} />
    </Layout>
  );
}

export default App;
