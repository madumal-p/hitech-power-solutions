import React from "react";
import PageBanner from "../components/PageBanner";
import AboutSection from "../components/AboutSection";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";
import {
  FaShippingFast,
  FaDollarSign,
  FaRegStar,
  FaCheck,
} from "react-icons/fa";

function About() {
  return (
    <Layout title="Hitech Power Solutions | About Us">
      <PageBanner title="About Us" />
      <div className={`mx-auto py-16 appContainer ${styles.appContainer}`}>
        <div className={`flex flex-wrap items-center overflow-hidden`}>
          <div
            className={`px-3 w-full overflow-hidden lg:my-1 lg:px-3 lg:w-6/12 xl:my-1 xl:px-3 xl:w-6/12 text-center`}
          >
            <div className={`${styles.WhySection__ImageWrapper}`}>
              <Image
                src="/why_choose.png"
                alt="why_choose_image"
                fill
                className={styles.AboutSection__Image}
              />
            </div>
          </div>
          <div
            className={`px-3 w-full overflow-hidden lg:my-1 lg:px-3 lg:w-6/12 xl:my-1 xl:px-3 xl:w-6/12`}
          >
            <h2 className={`text-blackheading font-Hind font-semibold`}>
              Why Choose Us?
            </h2>
            <h3 className={`text-smallheading font-extrabold uppercase`}>
              Hitech power solutions
            </h3>
            <div className="divider mb-7"></div>
            <p className={`text-bodyfont mb-4`}>
              We are supplying all types of electrical solutions which required
              to caravan industry starting from solar regulator & panels, LED
              down lights, battery chargers, etc. As specialists in RV
              electrical we will be more than happy to assist you with any
              enquirers that you have contact us today to order your items.
            </p>
            <Link
              className={`font-semibold font-DMSans text-sizeone mt-4 ${styles.Whychoose__Button}`}
              href="/contact"
            >
              Contact Us Today!
            </Link>
          </div>
        </div>
      </div>
      <div className={`py-16 ${styles.backgroundwrapper}`}>
        <div
          className={`mx-auto text-white appContainer ${styles.appContainer}`}
        >
          <div className={`flex flex-wrap items-center overflow-hidden`}>
            <div
              className={`px-3 w-full overflow-hidden  lg:my-1 lg:px-3 md:w-4/12 xl:my-1 xl:px-3 xl:w-4/12 text-center`}
            >
              <div className={styles.centeralign}>
                <FaShippingFast size={50} />
              </div>
              <h3 className={`text-lgheading font-semibold mt-2 mb-2`}>
                Free Shipping
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div
              className={`px-3 w-full overflow-hidden mt-2 mb-2 md:mt-0 md:mb-0 lg:my-1 lg:px-3 md:w-4/12 xl:my-1 xl:px-3 xl:w-4/12 text-center`}
            >
              <div className={styles.centeralign}>
                <FaDollarSign size={50} />
              </div>
              <h3 className={`text-lgheading font-semibold mt-2 mb-2`}>
                Secure Payment System{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              </p>
            </div>

            <div
              className={`px-3 w-full overflow-hidden lg:my-1 lg:px-3 md:w-4/12 xl:my-1 xl:px-3 xl:w-4/12 text-center`}
            >
              <div className={styles.centeralign}>
                <FaRegStar size={50} />
              </div>
              <h3 className={`text-lgheading font-semibold mt-2 mb-2`}>
                Premium Products
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
