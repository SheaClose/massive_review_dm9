import React from "react";
//import './.css';

const About = props => {
  console.log("props: ", props);
  return (
    <div className="">
      {props.people.map(person => (
        <div key={person.id}>
          <h1>{person.name}</h1>
          <h3>{person.number}</h3>
        </div>
      ))}
    </div>
  );
};
export default About;
