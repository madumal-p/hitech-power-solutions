import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProductItem.module.css";
import { formatter } from "../utils/helpers";

function ProductItem({ product }) {
  return (
    <div className={styles.productItem_Wrapper}>
      <Link href={`/products/${product.node.handle}`}>
        <div className={styles.productItem_Image_Wrapper}>
          <div className={styles.productItem_Image}>
            <Image
              src={product.node.images.edges[0].node.originalSrc}
              alt={product.node.title}
              width={320}
              height={80}
            />
          </div>
        </div>
      </Link>
      <div className={styles.productItem_Content}>
        <h3 className={`font-DMSans ${styles.productItem_Title}`}>
          {product.node.title}
        </h3>
        <h2 className={styles.productItem_Price}>
          {formatter.format(product.node.priceRange.minVariantPrice.amount)}
        </h2>
        <Link
          href={`/products/${product.node.handle}`}
          className={`font-Hind font-bold ${styles.productItem_Button}`}
        >
          View Product
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
