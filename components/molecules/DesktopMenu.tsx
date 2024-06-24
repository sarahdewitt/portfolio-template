import { anchors } from "@/utils/AnchorsHeader";
import Link from "next/link";
import React from "react";
import { Anchor } from "../atoms/Anchor";
import Logo from "../atoms/Logo";

export default function DesktopMenu() {
  return (
    <div className="hidden justify-between border-b-[1px] border-gray px-4 py-5 lg:flex">
      {/* Insert your name here. */}
      <Logo/>
      {/* Middle anchors. */}
      <div className="hidden gap-10 lg:flex">
        {anchors.map((anchor, index) => {
          return (
            <Anchor key={index} href={anchor.href}>
              {anchor.text}
            </Anchor>
          );
        })}
      </div>
    </div>
  );
}
