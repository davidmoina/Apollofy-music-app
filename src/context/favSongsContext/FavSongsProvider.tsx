import { useEffect, useState } from "react";
import { Track } from "../../interfaces/songs";
import { FavSongContext } from "./FavSongsContext"

type ChildrenProps = {
    children: JSX.Element | JSX.Element[];
}

export const FavSongProvider = ({children} : ChildrenProps) => {

    const [favorite, setIsFavorite] = useState<Track[]>([])

    const addToFavorite = (song : Track) => {
        setIsFavorite([...favorite, song])
    }

    useEffect(() => {
      const json = JSON.stringify(favorite)
      localStorage.setItem('fav', json)
    }, [favorite])
    
    const removeFromFavorite = (song: Track) => {
        const newCart = favorite.filter(item => item.id !== song.id)
        setIsFavorite(newCart)
    }


  return (
    <FavSongContext.Provider value={
        {
            addToFavorite, 
            removeFromFavorite, 
            favorite
        } 
        }>
        {children}
    </FavSongContext.Provider>
  )
}
