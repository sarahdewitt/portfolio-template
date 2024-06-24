import Link from "next/link";
import React from "react";

export default function ContactLinks({
  email,
  tel,
}: {
  tel?: string;
  email?: string;
}) {
  return (
    <div className="flex flex-col pb-9 md:pb-0">
      <Link href={`mailto:${email}`} className="pb-2 text-base no-underline hover:underline">
        {email}
      </Link>
      <Link href={`tel:${tel}`} className="text-base no-underline hover:underline">
        {tel}
      </Link>
    </div>
  );
}
