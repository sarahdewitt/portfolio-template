import React from "react";

export default function Container({ children }: any) {
  return (
    <div className="border-b-[1px] border-gray px-4 py-14 md:py-28">{children}</div>
  );
}
