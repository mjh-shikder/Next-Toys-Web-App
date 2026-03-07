import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <Container>{children}</Container>
      <Footer></Footer>
    </div>
  );
};

export default layout;
