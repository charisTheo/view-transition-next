import Router from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const handleTransition = (e) => {
  if (typeof window) {
    document.startViewTransition(() => {
      Router.push(e.target.href)
    })
  }
}

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link onClick={ handleTransition } href="/about">About</Link>
      <Image 
        src="https://wallpaperaccess.com/full/32048.jpg" 
        width={500}
				height={500}
				style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
