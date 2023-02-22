import "../styles/tailwind.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "react-image-gallery/styles/css/image-gallery.css";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";
import { DM_Sans } from "@next/font/google";

const dm_Sans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ShopProvider>
      <main className={`${dm_Sans.className} ${dm_Sans.variable}`}>
        <Component {...pageProps} key={router.asPath} />
      </main>
    </ShopProvider>
  );
}

export default MyApp;
