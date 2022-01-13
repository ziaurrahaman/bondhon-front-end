import React from "react";
import Witness from "../../components/sections/marriageInfo/BasicMarriageInformation";
import LandingLayout from "../../components/shared/layout/LandingLayout";
import MarriageInformation from "../../components/sections/marriageInfo/MarriageInformation";

const index = () => {
  return (
    <>
      <LandingLayout>
        <MarriageInformation />
      </LandingLayout>
    </>
  );
};

export default index;
