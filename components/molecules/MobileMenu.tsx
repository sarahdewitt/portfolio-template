"use client";
import {
  CloseButton,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnchorLarge } from "../atoms/Anchor";
import { anchors } from "@/utils/AnchorsHeader";
import Logo from "../atoms/Logo";
import { CloseIcon, HamburgerIcon } from "../atoms/Icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function MobileMenu() {
  //an isOpen state with a function to update that state
  const [isOpen, setIsOpen] = useState(false);

  //closes the panel, updating the function to false when anchor is clicked
  const handleAnchorClick = () => {
    setIsOpen(false);
  };
  return (
    <Disclosure as="div" className="relative z-50 lg:hidden">
      <DisclosureButton
        className="relative z-50 flex w-screen items-center justify-between border-b-[1px] border-gray bg-black px-4 py-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Logo />
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </DisclosureButton>
      <AnimatePresence>
        {isOpen && (
          <DisclosurePanel
            static
            as={motion.div}
            initial={{ y: "-100%" }}
            animate={{
              y: 0,
              transition: {
                duration: 0.5,
                ease: "circOut",
              },
            }}
            exit={{
              y: "-100%",
              transition: {
                duration: 0.5,
                ease: "circIn",
              },
            }}
            className="absolute flex w-screen flex-col gap-5 border-y-[1px] border-gray bg-black px-4 py-16"
          >
            {/* Anchors are looped here. */}
            {/* To change the anchor titles, please go to: utils/AnchorsHeader.ts */}
            {anchors.map((anchor, index) => {
              return (
                <AnchorLarge
                  onClick={handleAnchorClick}
                  key={index}
                  href={anchor.href}
                >
                  {anchor.text}
                </AnchorLarge>
              );
            })}
          </DisclosurePanel>
        )}
      </AnimatePresence>
    </Disclosure>
  );
}
