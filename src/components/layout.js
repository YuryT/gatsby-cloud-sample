import React from 'react'
import Nav from "./nav/Nav";
import Seo from "./seo";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return  <>
        <Nav />
        <Seo />
        <main className="bg-backgroundColor text-pseudoWhite-default">
          {children}
        </main>
      </>
  }
}

export default Template
