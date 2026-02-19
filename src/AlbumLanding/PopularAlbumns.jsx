import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { __DB } from '../backend/firebaseconfig'
import { FaMusic } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Spinner from '../helper/Spinner';

const PopularAlbumns = () => {
    let[albums,setAlbums]=useState(null);


    useEffect(() => {
        let fetchAlbums = async () => {
            //! Now we will fetch the albums from the database
            let albumCollectionRef = collection(__DB, "music_album")
            let getAlbums = await getDocs(albumCollectionRef)
            console.log(getAlbums);
            //! now we will extract the required data
            let albumData = getAlbums.docs.map((album)=>({
                ...album?.data(),
                songs:album?.data()?.songs || []
            }))
            console.log("Album Data:",albumData);
            setAlbums(albumData);
        } 
       

        //call the function
        fetchAlbums();
    }, []);
    return (
        <section className='w-[80vw] flex items-center gap-5 '>
            <article className='w-full '>
                <header className='w-full p-5 flex items-center gap-3'>
                    <span className='text-3xl'><FaMusic/></span>
                    <h1 className='text-3xl font-bold'>Popular Albums</h1>
                </header>
                <main className='w-full'>
                    {albums ? <div className='px-8'>
                        {albums.map((album,index)=>{
                            return <NavLink key={index}>
                                <div className='w-[260px] h-[330px] bg-black/50 p-4 rounded-lg hover:bg-black hover:ring-1 hover:ring-[wheat]'>
                                    <img src={album?.albumThumbnail}alt={album?.albumTitle}
                                    className='w-full h-[250px] object-cover rounded-md hover:scale-105 transistion-all duration-100 ease-linear' />
                                    <h1 className='py-2 px-20 bg-black mt-2 rounded text-xl font-semibold'>{album?.albumTitle}</h1>
                                </div>
                            </NavLink>
                        })}
                    </div>:<section className='w-[100%] h-[100vh] fixed top-0 left-[7%] '>
                        <Spinner/></section>}

                </main>
            </article>
        </section>
    )
}

export default PopularAlbumns