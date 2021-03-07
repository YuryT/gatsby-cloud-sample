import React from "react";
import NavLinkMobile from "./NavLinkMobile";
import Logo from "./Logo";

const NavMobile = (props) => (
  <div
    className={`absolute top-0 inset-x-0 p-2 
    bg-backgroundColor z-20 transition transform origin-top-right 
    md:hidden ${props.mobileMenuCollapsed?'hidden':'' }`}>
    <div
      className="rounded-lg shadow-md bg-pseudoWhite ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div className="px-5 pt-4 flex items-center justify-between">
        <div>
          <Logo logo={props.data.contentfulGlobal.logo} />
        </div>
        <a
          href={`tel:${props.data.contentfulGlobal.phone}`}
          className="text-primaryColor-default"
        >
          {props.data.contentfulGlobal.phone}
        </a>
        <div className="-mr-2">
          <button type="button"
                  onClick={props.toggleMenuCollapsed}
                  className="bg-pseudoWhite rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Close main menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor"
                 aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
      <div role="menu" aria-orientation="vertical"
           aria-labelledby="main-menu">
        <div className="px-2 pt-2 pb-3 space-y-1" role="none">
          {props.data.allContentfulMainPageBlock.edges.map((block, i) => (
            <NavLinkMobile
              key={block.id}
              linkContent={block.node}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default NavMobile;
