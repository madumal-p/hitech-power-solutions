import Image from "next/image";
import styles from "../styles/BestDeals.module.css";

export default function BestDeals({
  index,
  description,
  img,
  top = false,
  title,
  price,
}) {
  return (
    <div className={`${styles.bestDealsWrapper} ${top && "deals-col"}`}>
      <div>
        <h3 className={styles.bestDealsTitle}>{title}</h3>
        <p className={styles.bestDealsPrice}>${price}</p>
        <span className={styles.bestDealsPay}>{description}</span>
      </div>
      <div className={styles.bestDealsImageWrapper}>
        <Image src={img} alt={title} width={320} height={100} />
      </div>
    </div>
  );
}
