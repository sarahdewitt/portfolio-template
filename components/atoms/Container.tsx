import React from "react";

export default function Container({ children, section }: {children:any, section:string}) {
  return (
    <div className="border-b-[1px] border-gray px-4 py-14 md:py-32" id={section}>{children}</div>
  );
}
