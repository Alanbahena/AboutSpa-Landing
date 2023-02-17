import React from "react";
import Layout from "./UI/Layout";
import Content from "./components/Header/Content";
import Treatments from "./components/Treatments/Treatments";
import Doctors from "./components/Doctors/Doctors";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Layout>
      <Content />
      <Treatments />
      <Doctors />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
