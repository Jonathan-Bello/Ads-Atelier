import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { RiFacebookFill, RiInstagramFill } from "@remixicon/react";
import logo from "@/assets/svg/logo.svg";
import isologo from "@/assets/svg/Isologo.svg";
import NavLink from "./NavLink";
import useWindowSize from "@/hooks/useWindowSize";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { width } = useWindowSize();
  const [scrollNumber, setScrollNumber] = useState(0);

  useEffect(() => {}, []);

  return (
    <header
      className={`w-full bg-grey-950 bg-opacity-30 transition-colors delay-300 ease-out ${
        showMobileMenu && "bg-opacity-80"
      }
      lg:bg-opacity-30 lg:transition-none`}
    >
      <div className="relative flex justify-center items-center container p-2 lg:py-4 lg:px-0 mx-auto gap-4">
        <div className="lg:hidden">
          <Hamburger
            size={32}
            color="#fff"
            duration={0.8}
            rounded
            toggled={showMobileMenu}
            toggle={setShowMobileMenu}
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
            label="false"
            role="button"
          />
        </div>

        <nav
          className={`absolute z-10 w-[100vw] bg-grey-950 bg-opacity-30 lg:bg-transparent
            h-[calc(100vh-4em)]
            transition-all delay-300 ease-out
            lg:transition-none
            ${
              showMobileMenu
                ? "top-full opacity-100 bg-opacity-80"
                : "top-[-100vh]"
            }
            lg:static lg:flex lg:h-full lg:flex-1
            `}
        >
          <ul
            className="flex flex-col lg:flex-row items-center justify-center
          w-full py-20 lg:py-0 gap-10"
          >
            <NavLink url={"/"} text={"Inicio"} />
            <NavLink url={"/colecciones"} text={"Colecciones únicas"} />
            <NavLink url={"/custom-made"} text={"Custom Made"} />
            <NavLink url={"/conoce"} text={"Conoce ADS Ateleir"} />
            <NavLink url={"/contacto"} text={"Contacto"} />
          </ul>
        </nav>

        <div className="flex justify-center flex-grow lg:flex-grow-0 lg:-order-1">
          {width > 1023 ? (
            <img src={isologo.src} alt="logo mobile" className="w-20" />
          ) : (
            <img src={logo.src} alt="logo mobile" className="max-w-44" />
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-white  size-8 rounded-full p-1">
            <RiInstagramFill className=" fill-accent-500" />
          </div>
          <div className="bg-white size-8  rounded-full p-1">
            <RiFacebookFill className=" fill-accent-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
