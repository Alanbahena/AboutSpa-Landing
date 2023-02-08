import React from "react";
import Layout from "./UI/Layout";
import Content from "./components/Header/Content";
import Treatments from "./components/Treatments/Treatments";

function App() {
  return (
    <Layout>
      <Content />
      <Treatments />
    </Layout>
  );
}

export default App;
