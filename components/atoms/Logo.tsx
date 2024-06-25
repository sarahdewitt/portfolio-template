import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="text-sm font-medium uppercase no-underline">
      {/* Replace with your name. */}
      Emily Harper
    </Link>
  );
}
