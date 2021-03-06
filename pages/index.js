import React from "react";
import Sliders from "../components/Sliders";
import AboutSection from "../components/AboutSection";
import PaginatedItems from "../components/PaginatedItems";
import Layout from "../components/Layout";
import { getFeaturedProducts } from "../lib/shopify";
import styles from "../styles/Home.module.css";

export default function Home({ featuredProducts }) {
  return (
    <Layout title="Hitech Power Solutions | Home">
      <Sliders />
      <AboutSection readmorebutton />
      <div className="productContainer">
        <h3 className="text-4xl font-bold">Our Latest Products</h3>
        <h6 className="text-lg mt-1 mb-2 font-semibold">
          HITECHPOWER SOLUTIONS
        </h6>
        <div className="divider mb-10"></div>
      </div>
      <div className="mb-20">
        <PaginatedItems products={featuredProducts} itemsPerPage={4} />
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
  };
}
