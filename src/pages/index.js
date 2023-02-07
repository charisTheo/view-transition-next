import Image from 'next/image'
import Link from './../components/Link'

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link href="/about">About</Link>
      <Image 
        loader={({ src }) => src}
        src="https://wallpaperaccess.com/full/32048.jpg" 
        width={500}
				height={500}
				style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
