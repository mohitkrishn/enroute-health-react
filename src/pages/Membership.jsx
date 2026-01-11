import React from "react";
import MemberHead from "../components/Membership/MemberHead";
import MemberCard from "../components/Membership/MemberCard";

const Membership = () => {
  return (
    <section
      className="w-full 
            min-h-screen 
            z-30 
            pb-25
            flex 
            flex-col 
            gap-25
             "
            style={{
             background: "linear-gradient(0deg, #000 0%, #666 40%, #959595 100%)"

            }}
    >  
    <MemberHead/>
    <MemberCard/>
    </section>
  );
};

export default Membership;