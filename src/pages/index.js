import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import NavigationBlock from "../components/NavigationBlock";

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <div className="bg-preudoWhite-default">
        <Hero props={data.contentfulHero} />
        <div className="mx-auto">
          {data.allContentfulMainPageBlock.edges.map((block, i) => {
            const even = i % 2;
            return (
              <NavigationBlock
                key={block.node.id}
                even={even === 0}
                {...block.node}
              />)
          })}



        </div>
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    contentfulHero {
      header
      subHeader
      description { 
        childMarkdownRemark { html }
      }
      image {
         gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    allContentfulMainPageBlock(sort: { fields: order, order: ASC }) {
      edges {
        node {
          id
          slug
          label
          header
          content {
            childMarkdownRemark { html }
          }
          image {
             gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default IndexPage;
