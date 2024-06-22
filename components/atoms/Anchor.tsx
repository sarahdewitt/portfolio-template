import Link from "next/link";

export const Anchor = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  return (
    <Link
      href={href}
      className="text-base font-medium underline hover:text-orange"
    >
      {children}
    </Link>
  );
};

export const AnchorLarge = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      className="text-lg font-medium underline hover:text-orange"
    >
      {text}
    </Link>
  );
};
