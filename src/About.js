import React from "react";
//import './.css';

const About = props => {
  console.log("props: ", props);
  return (
    <div className="">
      About<br />
      {props.message}
    </div>
  );
};
export default About;
