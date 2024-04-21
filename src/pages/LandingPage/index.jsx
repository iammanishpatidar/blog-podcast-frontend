import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import Body from "../../components/Body";

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>Read at Blogsly</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[95px] bg-white-A700">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}
