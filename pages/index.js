import Head from "next/head";
import { client } from "@/lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
export default function Home({ products, bannerData, footerData }) {
  return (
    <>
      <Head>
        <title>Next Ecom</title>
        <meta name="description" content="Ecommerce site in next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
        <>
          <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
          <div className="products-heading">
            <h2>Best Selling Products</h2>
            <p>Our most popular products based on sales</p>
          </div>
          <div className="products-container">
            {products?.map(
              (product) =>
                !product.featured && (
                  <Product key={product._id} product={product} />
                )
            )}
          </div>
          <div className="products-heading">
            <h2>Featured Products</h2>
            <p>Our featured products based on best features</p>
          </div>
          <div className="products-container">
            {products?.map(
              (product) =>
                product.featured && (
                  <Product key={product._id} product={product} />
                )
            )}
          </div>
          <FooterBanner footerBanner={footerData && footerData[0]} />
        </>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const footerQuery = '*[_type == "footer"]';
  const footerData = await client.fetch(footerQuery);

  return {
    props: { products, bannerData, footerData },
  };
};
