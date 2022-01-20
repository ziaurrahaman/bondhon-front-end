import React from "react";
import Bride from "../../sections/bride/Bride";
import Groom from "../../sections/groom/Groom";
import BasicMarriageInformation from "../../sections/marriageInfo/BasicMarriageInformation";
import LawyerFatherAndWitness from "../../sections/lawyer-witness/Lawyer_Witness";

const review = () => {
  return (
    <>
      <Groom title={"MarriageInfo"} />
      <Bride title={"MarriageInfo"} />
      <BasicMarriageInformation />
      <LawyerFatherAndWitness />
    </>
  );
};

export default review;
