import Link from 'next/link'
import React from 'react'

const socials = [
    {
        social: 'github',
        href: '/'
    },
    {
        social: 'linkedin',
        href: '/'
    },
    {
        social: 'medium',
        href: '/'
    },
    {
        social: 'twitter',
        href: '/'
    },
    {
        social: 'instagram',
        href: '/'
    }
]

export default function Socials() {
  return (
    <div className='flex flex-wrap gap-5 md:gap-10'>
        {socials.map((social, index) => {
            return (
                <Link key={index} href={social.href} className='text-base no-underline hover:underline'>{social.social}</Link>
            )
        })}
    </div>
  )
}
