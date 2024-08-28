import React from "react";
import "@/common/assets/css/style.css"
import Header from "@/common/components/landing-components/header.component";

export default function LandingLayout({ children }) {
  return (
   <>
     <Header />
     {children}
   </>
  );
}
