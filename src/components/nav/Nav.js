import React, { useState } from "react";
import {useStaticQuery, graphql } from "gatsby";
import NavLinkDesktop from "./NavLinkDesktop";
import NavMobile from "./NavMobile";
import Logo from "./Logo";

const Nav = () => {
  const [mobileMenuCollapsed, setMobileMenuCollapsed] = useState(true);
  const toggleMenuCollapsed = () =>(setMobileMenuCollapsed(!mobileMenuCollapsed))
  const data = useStaticQuery(graphql`
    query {
      contentfulGlobal {
        siteTitle
        phone
        logo {
          gatsbyImageData(layout: FIXED, width:40, height:40)
        }
      }
      allContentfulMainPageBlock(sort: { fields: order, order: ASC }) {
        edges {
          node {
            id
            slug
            label
          }
        }
      }
    }
  `);
  return (<div
      className="z-20 w-screen sm:fixed border-b-2 border-primaryColor-default bg-backgroundColor">
      <div className="pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global">
          <div
            className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div
              className="flex items-center justify-between w-full md:w-auto">
              <Logo logo={data.contentfulGlobal.logo} />
             <a href={`tel:${data.contentfulGlobal.phone}`} className="md:hidden text-primaryColor-default"> {data.contentfulGlobal.phone} </a>
              {hamburgerBtn(toggleMenuCollapsed)}
            </div>
          </div>
          <div className="hidden md:flex justify-between w-full">
            <div className="md:ml-10 md:pr-4 md:space-x-8">
              {data.allContentfulMainPageBlock.edges.map((block, i) => (
                <NavLinkDesktop
                  key={block.id}
                  linkContent={block.node}
                />
              ))}
            </div>
            <a href={`tel:${data.contentfulGlobal.phone}`} className="hidden md:block text-primaryColor-default"> {data.contentfulGlobal.phone} </a>
          </div>
        </nav>
      </div>

      <NavMobile
        data={data}
        mobileMenuCollapsed={mobileMenuCollapsed}
        toggleMenuCollapsed={toggleMenuCollapsed}
      />
    </div>
  )
}

const hamburgerBtn = (toggleMenuCollapsed) => {
  return (
    <div className="-mr-2 flex items-center md:hidden">
      <button
        type="button"
        className="bg-pseudoWhite rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        id="main-menu"
        aria-haspopup="true"
        onClick={toggleMenuCollapsed}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 24 24"
             stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  );
}

export default Nav;
