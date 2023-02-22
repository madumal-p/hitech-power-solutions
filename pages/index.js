import React from "react";
import Sliders from "../components/Sliders";
import AboutSection from "../components/AboutSection";
import PaginatedItems from "../components/PaginatedItems";
import Layout from "../components/Layout";
import { getFeaturedProducts } from "../lib/shopify";
import FreeShippingBar from "../components/FreeShippingBar";
import BestDeals from "../components/BestDeals";
import { textTruncate } from "../utils/helpers";

export default function Home({ featuredProducts }) {
  return (
    <Layout title="Hitech Power Solutions | Home">
      <Sliders />
      <div className="bg-grey py-8">
        <FreeShippingBar />
      </div>
      <div className="container mx-auto py-28">
        <h3 className="text-4xl font-bold mb-8 ">Latest Products</h3>
        <div className="BestDealsWrapper">
          <BestDeals
            index={0}
            id={1}
            img={featuredProducts[0]?.node?.images?.edges[0]?.node?.originalSrc}
            title={featuredProducts[0]?.node?.title}
            price={640}
            top
            description={textTruncate(
              featuredProducts[0]?.node?.description,
              90
            )}
          />
          <BestDeals
            index={1}
            id={2}
            img={featuredProducts[1]?.node?.images?.edges[1]?.node?.originalSrc}
            title={featuredProducts[1]?.node?.title}
            price={640}
            description={textTruncate(
              featuredProducts[1]?.node?.description,
              90
            )}
          />
          <BestDeals
            index={2}
            id={3}
            img={featuredProducts[2]?.node?.images?.edges[2]?.node?.originalSrc}
            title={featuredProducts[2]?.node?.title}
            price={640}
            description={textTruncate(
              featuredProducts[2]?.node?.description,
              90
            )}
          />
          <BestDeals
            index={3}
            id={4}
            img={featuredProducts[3]?.node?.images?.edges[3]?.node?.originalSrc}
            title={featuredProducts[3]?.node?.title}
            price={640}
            description={textTruncate(
              featuredProducts[3]?.node?.description,
              90
            )}
          />
          <BestDeals
            index={4}
            id={5}
            img={featuredProducts[1]?.node?.images?.edges[1]?.node?.originalSrc}
            title={featuredProducts[1]?.node?.title}
            price={640}
            description={textTruncate(
              featuredProducts[1]?.node?.description,
              100
            )}
          />
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold mb-8">Best Selling Products</h3>
        <PaginatedItems products={featuredProducts} itemsPerPage={10} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredProducts = await getFeaturedProducts();
  return {
    props: {
      featuredProducts,
    },
    revalidate: 1,
  };
}
