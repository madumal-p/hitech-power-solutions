import React from "react";
import PageBanner from "../components/PageBanner";
import Layout from "../components/Layout";
import { getAllProducts } from "../lib/shopify";
import PaginatedItems from "../components/PaginatedItems";

function Products({ products }) {
  return (
    <Layout title="Hitech Power Solutions | Products">
      <PageBanner title="Shop" />
      <div className="container mx-auto py-20">
        <PaginatedItems products={products} itemsPerPage={20} />
      </div>
    </Layout>
  );
}

export default Products;

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
      revalidate: 1,
    },
  };
}
