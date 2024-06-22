import Link from "next/link";

export default function Footer() {
  return (
    <div className='flex justify-between items-end p-4'>
        {/* copyright */}
        <p className='text-sm text-gray'>emily harper © 2024</p>
        {/* Credits. Please do not remove this. thanks 🙏 */}
        <p className="text-sm text-gray">A Next.js template made with ❤️ by️ <Link href={"https://github.com/sarahdewitt"} className="text-sm text-gray">Sarah De Witt</Link></p>
    </div>
  )
}
