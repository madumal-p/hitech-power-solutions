import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiOutlineShoppingCart,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { FaBars } from "react-icons/fa";
import SearchBar from "../components/SearchBar";

function Header() {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <header>
      <div
        className={`container mx-auto bg-white py-3 px-10  block md:flex justify-between`}
      >
        <div className={`${styles.logobox} w-2/12`}>
          <Link href="/">
            <Image
              src="/hitech-power-logo.png"
              alt="logo"
              width={220}
              height={80}
            />
          </Link>
        </div>
        <div className="hidden md:flex justify-between items-center w-10/12 ml-8">
          <div className="w-8/12 mr-4 h-10 ">
            <SearchBar />
          </div>
          <a className="w-3/12 ml-6" href="tel: +61 1111 98393">
            <div className="flex items-center font-sans font-medium">
              <AiFillPhone size={32} color="red" />{" "}
              <span className="ml-2 ">Phone Number</span>
            </div>
            <div className="block ml-2 text-md font-semibold">
              +61 1111 98393
            </div>
          </a>

          <a className="w-3/12" href="mailto:info@hitechpowersolutions.com.au">
            <div className="flex items-center font-sans font-medium">
              <AiOutlineMail size={32} color="red" />{" "}
              <span className="ml-2 ">Send Your Email</span>
            </div>
            <div className="block ml-0 text-md font-semibold">
              info@hitechpowersolutions.com.au
            </div>
          </a>
        </div>
      </div>
      <div className="bg-secondary">
        <nav className="container mx-auto relative flex flex-wrap items-center text-white justify-between">
          <div className="w-full mx-auto flex flex-row-reverse flex-wrap items-center justify-between">
            <div className="w-full relative flex flex-row-reverse lg:w-auto lg:static lg:flex lg:justify-start py-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram
                  size={26}
                  color="white"
                  style={{ marginRight: "10px" }}
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillYoutube
                  size={26}
                  color="white"
                  style={{ marginRight: "10px" }}
                />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <AiFillTwitterCircle
                  size={26}
                  color="white"
                  style={{ marginRight: "10px" }}
                />
              </a>
              <a
                href="https://www.facebook.com/Hi-Tech-Power-Solutions-393912278042207/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook
                  size={26}
                  color="white"
                  style={{ marginRight: "10px" }}
                />
              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none mr-auto"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FaBars />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex grow flex-col lg:flex-row list-none">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`${
                      router.pathname == "/" && styles.active
                    } w-full lg:w-auto inline-block py-3 px-6 text-base font-bold uppercase hover:bg-primary font-sans`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/products"
                    className={`${
                      router.pathname == "/products" && styles.active
                    } w-full lg:w-auto inline-block py-3 px-6 text-base font-bold uppercase hover:bg-primary font-sans`}
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/about"
                    className={`${
                      router.pathname == "/about" && styles.active
                    } w-full lg:w-auto inline-block py-3 px-6 text-base font-bold uppercase hover:bg-primary font-sans`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`${
                      router.pathname == "/contact" && styles.active
                    } w-full lg:w-auto inline-block py-3 px-6 text-base font-bold uppercase hover:bg-primary font-sans`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
