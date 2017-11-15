import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div className="">
        <input
          type="text"
          placeholder="Update Message"
          onChange={e => this.props.updateMessageFromRoutes(e.target.value)}
        />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          expedita molestiae ducimus libero nisi dolor cum enim veritatis quasi
          nemo, sequi saepe vel numquam tempore. Quos a libero nostrum dicta.
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          suscipit. Minus, dolorum nesciunt porro ea rem aut neque at error
          sequi laborum soluta ab voluptatum adipisci accusamus ad enim commodi!{" "}
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat illum
          iusto, architecto est ipsam quae odio dolores assumenda molestiae,
          iure provident sint commodi illo sapiente quis earum non laboriosam
          culpa.<br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          vel, voluptatem nostrum ducimus voluptates accusantium dicta quos
          vitae cumque voluptatibus veritatis beatae maiores animi. Rerum quas
          dolore ducimus laudantium beatae?
        </div>
      </div>
    );
  }
}
