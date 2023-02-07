import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect } from 'react'
import Router from 'next/router'

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <a onClick={ handleTransition } href="/about">About</a>
      <img src="https://wallpaperaccess.com/full/32048.jpg"/>
    </div>
  )
}

const handleTransition = () => {
  if (typeof window) {
    document.startViewTransition(() => {
      Router.push("/about")
    })
  }
}