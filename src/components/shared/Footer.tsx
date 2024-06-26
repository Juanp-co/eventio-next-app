import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-5'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href={'/'}>
          <Image
            src='/assets/images/logo.svg'
            width={128}
            height={38}
            alt='logo-footer'
          />
        </Link>

        <p>2024 Eventio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer