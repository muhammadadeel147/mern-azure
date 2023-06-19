import React from "react";
import "./HomeScreen.css";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import SectionTitleTwo from "../components/section-title/SectionTitle"
import FeatureIcon from "../wrappers/feature-icon/FeatureIcon";
import TextGridOne from "../wrappers/text-grid/TextGridOne";
import TeamMemberOne from "../wrappers/team-member/TeamMemberOne";
import FunFactOne from "../wrappers/fun-fact/FunFactOne";
import Slider from "../components/Slider"

import Program from "../components/Program/Program";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
     
              <Slider/>
   
              <Program/>
              <br/>
              <br/>
              <br/>
      <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />
      <br/>
              <br/>
              <br/>
      <SectionTitleTwo
          titleText="Products"
         
          positionClass="text-center"
          spaceClass="mb-60"
        />
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      
      <CalltoActionSection />
      <br/>
              <br/>
              <br/>
              {/* team member */}
              <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />
              <br/>
              <br/>
              <br/>
            
      <TextGridOne spaceBottomClass="pb-70" />
      <ContactInfo />
      <FunFactOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          bgClass="bg-gray-3"
        />
         <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
     \
      <Footer />
     
    </div>
  );
};

export default HomeScreen;
