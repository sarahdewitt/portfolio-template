import React from "react";
import { Anchor } from "../atoms/Anchor";
import Link from "next/link";

const anchors = [
  {
    href: "/#About",
    text: "About",
  },
  {
    href: "/#Projects",
    text: "Projects",
  },
  {
    href: "/#Contact",
    text: "Contact",
  },
];

export default function Header() {
  return (
    <div className="flex justify-between border-b-[1px] border-gray px-4 py-6 bg-gradient-to-r">
      {/* Insert your name here. */}
      <Link
        href={"/"}
        className="text-base font-bold no-underline hover:text-orange"
      >
        Emily Harper
      </Link>
      {/* Middle anchors. */}
      <div className="flex gap-10">
        {anchors.map((anchor, index) => {
          return (
            <Anchor key={index} href={anchor.href}>
              {anchor.text}
            </Anchor>
          );
        })}
      </div>
      {/* Insert the download link to your resume. */}
      <Anchor href={"/"}>Resume</Anchor>
    </div>
  );
}
