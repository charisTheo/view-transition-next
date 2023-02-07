import Image from 'next/image'
import Link from './../components/Link'

export default function About() {
	return (
		<div>
			<h1>About</h1>
			<Link href="/">Home</Link>
			<Image 
				loader={({ src }) => src}
				src="https://c4.wallpaperflare.com/wallpaper/801/136/845/cat-4k-widescreen-hd-wallpaper-preview.jpg" 
				width={300}  
				height={300}
				style={{ objectFit: 'cover' }}
			/>
		</div>
	)
}