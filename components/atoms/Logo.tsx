import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link
      href={"#"}
      className="text-base font-medium no-underline hover:text-orange"
    >
      Emily Harper
    </Link>
  );
}
