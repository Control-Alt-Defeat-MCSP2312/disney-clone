'use client'
import React, { useState } from 'react'
import Image from 'next/image'

  const images = {
    images: [
      {
        id: 1,
        src: "/main4.webp",
        alt: "Star Wars: The Force Awakens Loungefly Backpack – Disney100",
      },
      {
        id: 2,
        src: "/main1.webp",
        alt: "Star Wars: The Force Awakens Loungefly Backpack – Disney100",
      },
      {
        id: 3,
        src: "/main2.webp",
        alt: "Star Wars: The Force Awakens Loungefly Backpack – Disney100",
      },
      {
        id: 4,
        src: "/main3.webp",
        alt: "Star Wars: The Force Awakens Loungefly Backpack – Disney100",
      },
    ],
  }

const PrimaryImage = () => {
  const [autoFocus, setAutoFocus] = useState(false)



  return (
    <>
    <main className="grid grid-cols-2 grid-rows-2 gap-0">
      {images.images.map((image) => (
        <div key={image.id} className='m-0 p-0'>
          <Image src={image.src} alt={image.alt} width={550} height={550} style={{objectFit: "contain"}} />
        </div>
      ))}
    </main>
    </>
  )
}

export default PrimaryImage;
