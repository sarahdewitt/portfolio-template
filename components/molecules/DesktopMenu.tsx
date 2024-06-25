import { anchors } from "@/utils/AnchorsHeader";
import Logo from "../atoms/Logo";
import WavyAnchor from "../atoms/WavyAnchor";

export default function DesktopMenu() {
  return (
    <div className="hidden justify-between border-b-[1px] border-gray px-4 py-5 lg:flex">
      {/* To change the logo name, please go to atoms/Logo.tsx */}
      <Logo />
      <div className="hidden gap-10 lg:flex">
        {/* Anchors are looped here */}
        {/* To change the anchor titles, please go to: utils/AnchorsHeader.ts */}
        {anchors.map((anchor, index) => {
          return (
            <WavyAnchor key={index} href={anchor.href}>
              {anchor.text}
            </WavyAnchor>
          );
        })}
      </div>
    </div>
  );
}
