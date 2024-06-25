import Link from "next/link";

export default function Card ({
  href,
  src,
  alt,
  title,
  desc,
}: {
  href: string;
  src: string;
  alt: string;
  title: string;
  desc: string;
}) {
  return (
    <Link href={href} className="group no-underline">
      <div className="w-full pb-10">
        <div className="max-w-screen relative overflow-hidden rounded-md">
          <img
            src={src}
            alt={alt}
            className="object-cover transition-all duration-200 ease-in group-hover:scale-110"
          />
        </div>
        <p className="pb-1 pt-4 text-lg font-normal">{title}</p>
        <p className="w-3/4 text-base">{desc}</p>
      </div>
    </Link>
  );
}
