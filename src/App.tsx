import React from "react";
import Layout from "./UI/Layout";
import Content from "./components/Header/Content";
import Treatments from "./components/Treatments/Treatments";
import Doctors from "./components/Doctors/Doctors";

function App() {
  return (
    <Layout>
      <Content />
      <Treatments />
      <Doctors />
    </Layout>
  );
}

export default App;
