"use client";

import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useNavStore } from "../store/store";
import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./Button";

export const Header = () => {
  const { navVisible } = useNavStore();
  const [scrollY, setScrollY] = useState(0);
  const SCROLL_TRIGGER = 100;
  const [navHide, setNavHide] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY < SCROLL_TRIGGER) {
      setMenuOpen(false);
    }
  }, [scrollY]);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const navAnimation = useSpring({
    opacity: navVisible && scrollY <= SCROLL_TRIGGER ? 1 : 0,
    config: { tension: 210, friction: 20 },
    onRest: () => {
      if (!navVisible || scrollY > SCROLL_TRIGGER) {
        setTimeout(() => {
          setNavHide(true);
        }, 200);
      } else {
        setNavHide(false);
      }
    },
  });

  const logoAnimation = useSpring({
    opacity: scrollY > SCROLL_TRIGGER ? 1 : 0,
    config: { tension: 210, friction: 20 },
  });
  const menuAnimation = useSpring({
    opacity: menuOpen ? 1 : 0,
    transform: menuOpen ? "translateX(0%)" : "translateX(100%)",
  });

  return (
    <header className="fixed top-0 z-50 w-full overflow-hidden">
      <div className="relative">
        {!navHide && (
          <animated.nav
            style={navAnimation}
            className={`absolute z-30 top-0 w-full py-10 px-default-x flex justify-between uppercase text-base font-bold`}
          >
            <Link className="hover:text-secondary transition-colors duration-300" href={"/"}>
              Home
            </Link>
            <Link className="hover:text-secondary transition-colors duration-300" href={"/"}>
              About
            </Link>
            <Link className="hover:text-secondary transition-colors duration-300" href={"/"}>
              Projects
            </Link>
            <Link className="hover:text-secondary transition-colors duration-300" href={"/"}>
              Blog
            </Link>
            <Link className="hover:text-secondary transition-colors duration-300" href={"/"}>
              Contacts
            </Link>
          </animated.nav>
        )}

        <animated.div
          style={logoAnimation}
          className={`w-full py-10 px-default-x flex justify-between bg-gradient-to-b from-white to-transparent transition-all duration-300`}
        >
          <Logo />
          <div className="flex gap-4">
            <Link href={"/"} className="py-3 px-5 bg-secondary">
              <div>Requested a call &rarr;</div>
            </Link>
            <button
              onClick={handleMenuOpen}
              className="py-3 px-5 bg-secondary hover:bg-dark-grey hover:text-white transition-colors duration-200"
            >
              &#9776;
            </button>
          </div>
        </animated.div>

        {menuOpen && (
          <animated.div
            style={menuAnimation}
            className="fixed z-50 top-0 right-0 w-1/3 flex flex-col py-10 px-9 bg-white"
          >
            <div className="mb-6 self-end flex gap-4">
              <Button />
              <button
                onClick={handleMenuOpen}
                className="py-3 px-5 bg-secondary hover:bg-dark-grey hover:text-white transition-colors duration-200"
              >
                X
              </button>
            </div>
            <ul className="flex flex-col gap-3 text-dark-grey uppercase text-3xl">
              <li>home</li>
              <li>about</li>
              <li>projects</li>
              <li>blog</li>
              <li>contacts</li>
            </ul>
          </animated.div>
        )}
      </div>
    </header>
  );
};
