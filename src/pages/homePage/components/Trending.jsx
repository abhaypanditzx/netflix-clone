import React,{useState,useEffect} from 'react'
import axiosInstance from '../../../Api/fetch';
const Trending = () => {
      const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const response = await axiosInstance.get("/trending/movie/day");
        console.log(response.data.results);
        setTrending(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getTrending();
  }, []);
  return (
          <div className="w-full bg-black flex justify-center ">
        <div className="carousel-container  flex  flex-col w-[80%] md:w-[70%] mt-4 relative   ">
          <h1 className="subheading text-white font-semibold px-2 sm:px-10 mt-4 absolute ">
            Trending Now
          </h1>
          <div className="carousel">
            {trending.map((movie, index) => (
              <div key={index} className="carousel-card hover:scale-102 cursor-pointer duration-300 ease-in-out relative">
                <img
                  className="w-57 rounded-md  sm:w-72 md:w-80 lg:w-96"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                />
                <span className="absolute left-0  top-[50%] stroke font-extrabold translate-y-[-40%] text-7xl  md:text-9xl">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    
  )
}

export default Trending
