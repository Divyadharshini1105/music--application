import React from 'react'
import AlbumLandingSidebar from './AlbumLandingSidebar'
import AlbumLandingContent from './AlbumLandingContent'

const AlbumLandingContainer = () => {
  return (
    <section className='w-[100vw] h-min-[calc(100vh-70px)] flex text-white'>
        <AlbumLandingSidebar/>
        <AlbumLandingContent/>
    </section>
  )
}

export default AlbumLandingContainer