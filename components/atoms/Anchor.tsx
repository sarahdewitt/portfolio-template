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
      className="text-base no-underline hover:underline"
    >
      {children}
    </Link>
  );
};

export const AnchorLarge = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link
      href={href}
      className="text-lg uppercase font-medium no-underline"
    >
      {children}
    </Link>
  );
};
