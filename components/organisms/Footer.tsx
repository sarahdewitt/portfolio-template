import Link from "next/link";

export default function Footer() {
  return (
    <div className='lg:flex justify-between items-end p-4'>
        {/* Copyright */}
        <p className='text-sm text-[#7C7C7C] uppercase'>emily harper © 2024</p>
        {/* Credits. Please do not remove this. thanks 🙏 */}
        <p className="text-sm text-[#7C7C7C] uppercase">A Next.js template by️ <Link href={"https://github.com/sarahdewitt"} className="text-sm text-[#7C7C7C]">Sarah De Witt</Link></p>
    </div>
  )
}
