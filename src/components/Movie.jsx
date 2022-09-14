import { useState } from "react"
import { FaHeart } from "react-icons/fa"
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movie = ({ movie, id }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, 'users', `${user?.email}`)

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path
        })
      })
    }
    else {
      alert('please log in to save a movie')
    }
  }

  return (
    <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative m-2">

      <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition opacity-0 hover:opacity-100 hover:bg-black/60">

        <p className="truncate w-full text-white text-[10px] md:text-lg font-semibold text-center">{movie?.title}</p>

        <p onClick={saveShow} className="absolute top-0 left-0 text-white p-1">
          {like ? <FaHeart className="text-pink-600" /> : <FaHeart />}
        </p>

      </div>

    </div>
  )
}

export default Movie