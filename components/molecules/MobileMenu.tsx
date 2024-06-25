"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnchorLarge } from "../atoms/Anchor";
import { anchors } from "@/utils/AnchorsHeader";
import Logo from "../atoms/Logo";
import { CloseIcon, HamburgerIcon } from "../atoms/Icons";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu() {
  return (
    <Disclosure as="div" className="fixed border-b-[1px] border-gray lg:hidden">
      {({ open }) => (
        <>
          <DisclosureButton className="relative z-50 flex w-screen items-center justify-between bg-black px-4 py-5">
            <Logo />
            {open ? <CloseIcon /> : <HamburgerIcon />}
          </DisclosureButton>
          <AnimatePresence>
            {open && (
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
                className="flex w-screen flex-col gap-5 border-y-[1px] border-gray bg-black px-4 py-16"
              >
                {/* Anchors are looped here. */}
                {/* To change the anchor titles, please go to: utils/AnchorsHeader.ts */}
                {anchors.map((anchor, index) => {
                  return (
                    <AnchorLarge key={index} href={anchor.href}>
                      {anchor.text}
                    </AnchorLarge>
                  );
                })}
              </DisclosurePanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
}
