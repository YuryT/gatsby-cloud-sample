import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ pageSeo = {} }) => {
  const { contentfulGlobal } = useStaticQuery(query);

  // Merge default and page-specific SEO values
  const fullSeo = { ...contentfulGlobal, ...pageSeo };

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.siteTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.siteTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.siteTitle,
        }
      );
    }
    if (fullSeo.seoDescription.childMarkdownRemark.html) {
      tags.push(
        {
          name: "description",
          content: fullSeo.seoDescription.childMarkdownRemark.html,
        },
        {
          property: "og:description",
          content: fullSeo.seoDescription.childMarkdownRemark.html,
        },
        {
          name: "twitter:description",
          content: fullSeo.seoDescription.childMarkdownRemark.html,
        }
      );
    }
    if (fullSeo.seoImage) {
      const imageUrl = fullSeo.seoImage.file.url;
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      );
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" });

    return tags;
  };

  const metaTags = getMetaTags();

  return (
    <Helmet
      title={fullSeo.siteTitle}
      meta={metaTags}
      link={[
        {
          rel: "icon",
          href: fullSeo.favicon.file.url,
        },
      ]}
    />
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
};

const query = graphql`
  query {
    contentfulGlobal {
      siteTitle
      seoDescription {
        childMarkdownRemark { html }
      }
      favicon {
         file {
           url
         }
      }
      seoImage {
        file {
          url
        }
      }
    }
  }
`;
