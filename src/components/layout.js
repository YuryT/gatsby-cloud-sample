import React from 'react'
import Nav from "./nav/Nav";
class Template extends React.Component {
  render() {
    const { children } = this.props;

    return  <>
        <Nav />
        <main className="bg-backgroundColor text-pseudoWhite-default">
          {children}
        </main>
      </>
  }
}

export default Template
