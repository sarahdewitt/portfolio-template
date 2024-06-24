"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Anchor } from "../atoms/Anchor";
import { anchors } from "@/utils/AnchorsHeader";
import Logo from "../atoms/Logo";
import { CloseIcon, HamburgerIcon } from "../atoms/Icons";

export default function MobileMenu() {
  return (
    <div className="border-b-[1px] border-gray lg:hidden">
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton
              className={"flex w-screen items-center justify-between px-4 py-5"}
            >
              <Logo />
              {open ? <CloseIcon /> : <HamburgerIcon />}
            </DisclosureButton>
            <DisclosurePanel className="flex w-screen flex-col gap-5 border-t-[1px] border-gray px-4 py-5">
              {anchors.map((anchor, index) => {
                return (
                  <Anchor key={index} href={anchor.href}>
                    {anchor.text}
                  </Anchor>
                );
              })}
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
