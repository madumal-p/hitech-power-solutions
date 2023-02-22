import { useRouter } from "next/router";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { getProductsByQuery } from "../lib/shopify";

export default function SearchPage({ products }) {
  const router = useRouter();
  const {
    query: { query },
  } = router;
  return (
    <Layout>
      <div className="container mx-auto py-20">
        <h3 className="font-bold text-2xl mb-10">Search: {query} </h3>
        <ProductList products={products} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const products = await getProductsByQuery(query.query);
  return {
    props: {
      products,
    },
  };
}
