// import "./row.css";
// import { useState, useEffect } from "react";
// import axios from "../../../utils/axios";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState(""); // Assuming you need to handle trailer URL state

//   const base_url = "https://image.tmdb.org/t/p/original"; // Use correct base URL for images

//   useEffect(() => {
//     // Wrapping the async function inside the useEffect to avoid immediate invocation
//     const fetchData = async () => {
//       try {
//         const request = await axios.get(fetchUrl); // Assuming fetchUrl is a valid API endpoint
//         console.log("Fetching data from:", fetchUrl);
//         setMovies(request.data.results);
//         console.log("Fetched data:", request);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [fetchUrl]); // Re-fetch if fetchUrl changes

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       // If the trailer is already showing, clear the trailer URL
//       setTrailerUrl("");
//     } else {
//       // Fetch the trailer URL for the selected movie
//       movieTrailer(movie?.title || movie?.name || movie?.original_name)
//         .then((url) => {
//           if (url) {
//             // Log the URL for debugging
//             console.log("Trailer URL:", url);

//             // Check if the URL is a valid YouTube URL before creating a URL object
//             try {
//               const parsedUrl = new URL(url); // Try to create a URL object

//               // Log URL components for debugging
//               console.log("Protocol:", parsedUrl.protocol); // e.g., "https:"
//               console.log("Hostname:", parsedUrl.hostname); // e.g., "www.youtube.com"
//               console.log("Pathname:", parsedUrl.pathname); // e.g., "/watch"
//               console.log("Search:", parsedUrl.search); // e.g., "?v=dQw4w9WgXcQ&list=PL..."

//               // Now parse the query parameters and get the video ID
//               const urlParams = new URLSearchParams(parsedUrl.search);
//               const videoId = urlParams.get("v");

//               if (videoId) {
//                 // Set the trailer URL to the extracted video ID
//                 setTrailerUrl(videoId);
//               } else {
//                 console.error("Video ID not found in the trailer URL.");
//                 toast.error("Sorry, no trailer available for this movie!"); // Show error toast notification
//               }
//             } catch (error) {
//               console.error("Invalid URL format:", error); // If URL creation fails
//               toast.error("Sorry, no trailer available for this movie!"); // Show error toast notification
//             }
//           } else {
//             console.error("No trailer URL found for this movie.");
//             toast.error("Sorry, no trailer available for this movie!"); // Show error toast notification
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching trailer:", error);
//           toast.error("Sorry, no trailer available for this movie!"); // Show error toast notification
//         });
//     }
//   };

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row_posters">
//         {movies?.map((movie, index) => (
//           <img
//             onClick={() => handleClick(movie)}
//             key={index}
//             src={`${base_url}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.name}
//             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//           />
//         ))}
//       </div>
//       <div style={{ padding: "20px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//       <ToastContainer />{" "}
//       {/* Render ToastContainer component to show notifications */}
//     </div>
//   );
// };

// export default Row;

// import "./row.css";
// import { useState, useEffect } from "react";
// import axios from "../../../utils/axios";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState(""); // Assuming you need to handle trailer URL state

//   const base_url = "https://image.tmdb.org/t/p/original"; // Use correct base URL for images

//   useEffect(() => {
//     // Wrapping the async function inside the useEffect to avoid immediate invocation
//     const fetchData = async () => {
//       try {
//         const request = await axios.get(fetchUrl); // Assuming fetchUrl is a valid API endpoint
//         console.log(fetchUrl);
//         setMovies(request.data.results);
//         console.log(request);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [fetchUrl]); // Re-fetch if fetchUrl changes

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl(""); // If the trailer is already showing, clear the trailer URL
//     } else {
//       // Fetch the trailer URL for the selected movie
//       movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
//         (url) => {
//           if (url) {
//             // URL is valid, extract the video ID (v) from the query string
//             const urlParams = new URLSearchParams(new URL(url).search);
//             console.log(urlParams.protocol);
//             console.log(urlParams.hostname);
//             console.log(urlParams.pathname);
//             console.log(urlParams.search);
//             console.log("YouTube URL Params:", urlParams);//for debugging purposes
//             setTrailerUrl(urlParams.get("v"));}
//             else {
//               // If no trailer URL is found, log an error message
//               console.error("No trailer found for this movie.");
//             }}).catch((error) => {
//                 // Handle any errors from the movieTrailer promise
//       console.error("Error fetching trailer:", error);
//             });
//           // console.log(url);
//           // const urlParams = new URLSearchParams(new URL(url).search);
//           // console.log(urlParams.protocol); // "https:"
//           // console.log(urlParams.hostname); // "www.youtube.com"
//           // console.log(urlParams.pathname); // "/watch"
//           // console.log(urlParams.search); // "?v=dQw4w9WgXcQ&list=PLs5e5Lsmzgrjvm4v_3-jxv7a3yAmNjH4_"

//           // console.log(urlParams);
//           // console.log(urlParams.get("v"));
//           // setTrailerUrl(urlParams.get("v"));
//         }
//       // );
//     // }
//   };

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>

//       <div className="row_posters">
//         {movies?.map((movie, index) => (
//           <img
//             onClick={() => handleClick(movie)}
//             key={index}
//             src={`${base_url}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.name}
//             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//           />
//         ))}
//       </div>

//       <div style={{ padding: "20px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//     </div>
//   );
// };

// export default Row;

// import "./row.css";
// import { useState, useEffect } from "react";
// import axios from "../../../utils/axios";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
// import Swal from "sweetalert2"; // Import sweetalert2

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState(""); // Assuming you need to handle trailer URL state

//   const base_url = "https://image.tmdb.org/t/p/original"; // Use correct base URL for images

//   useEffect(() => {
//     // Wrapping the async function inside the useEffect to avoid immediate invocation
//     const fetchData = async () => {
//       try {
//         const request = await axios.get(fetchUrl); // Assuming fetchUrl is a valid API endpoint
//         console.log("Fetching data from:", fetchUrl);
//         setMovies(request.data.results);
//         console.log("Fetched data:", request);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [fetchUrl]); // Re-fetch if fetchUrl changes

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       // If the trailer is already showing, clear the trailer URL
//       setTrailerUrl("");
//     } else {
//       // Fetch the trailer URL for the selected movie
//       movieTrailer(movie?.title || movie?.name || movie?.original_name)
//         .then((url) => {
//           if (url) {
//             // Log the URL for debugging
//             console.log("Trailer URL:", url);

//             // Check if the URL is a valid YouTube URL before creating a URL object
//             try {
//               const parsedUrl = new URL(url); // Try to create a URL object
//               // Now parse the query parameters and get the video ID
//               // Log URL components for debugging
//               console.log("Protocol:", parsedUrl.protocol); // e.g., "https:"
//               console.log("Hostname:", parsedUrl.hostname); // e.g., "www.youtube.com"
//               console.log("Pathname:", parsedUrl.pathname); // e.g., "/watch"
//               console.log("Search:", parsedUrl.search); // e.g., "?v=dQw4w9WgXcQ&list=PL..."
//               const urlParams = new URLSearchParams(parsedUrl.search);
//               const videoId = urlParams.get("v");

//               if (videoId) {
//                 // Set the trailer URL to the extracted video ID
//                 setTrailerUrl(videoId);
//               } else {
//                 console.error("Video ID not found in the trailer URL.");
//                 // Show SweetAlert error if no video ID is found
//                 Swal.fire({
//                   icon: "error",
//                   title: "Oops...",
//                   text: "Sorry, no trailer available for this movie!",
//                 });
//               }
//             } catch (error) {
//               console.error("Invalid URL format:", error); // If URL creation fails
//               Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "Sorry, no trailer available for this movie!",
//               });
//             }
//           } else {
//             console.error("No trailer URL found for this movie.");
//             Swal.fire({
//               icon: "error",
//               title: "Oops...",
//               text: "Sorry, no trailer available for this movie!",
//             });
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching trailer:", error);
//           Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Sorry, no trailer available for this movie!",
//           });
//         });
//     }
//   };

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>

//       <div className="row_posters">
//         {movies?.map((movie, index) => (
//           <img
//             onClick={() => handleClick(movie)}
//             key={index}
//             src={`${base_url}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.name}
//             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//           />
//         ))}
//       </div>

//       <div style={{ padding: "20px" }}>
//         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//       </div>
//     </div>
//   );
// };

// export default Row;

import "./row.css";

// React hooks for managing state and performing side effects
import { useState, useEffect } from "react"; // useState for managing state, useEffect for side effects (like data fetching)

// Axios for making HTTP requests to fetch movie data from the API
import axios from "../../../utils/axios";

// YouTube component to embed YouTube trailers
import YouTube from "react-youtube";

// movieTrailer library is used to fetch YouTube trailer URLs based on the movie title
import movieTrailer from "movie-trailer";

// Toastify library for showing notifications (toasts) to users
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS for notification styling

const Row = ({ title, fetchUrl, isLargeRow }) => {
  // State for storing movie data fetched from the API
  const [movies, setMovies] = useState([]);
  // State for storing the YouTube video ID of the trailer (used in the YouTube player)
  const [trailerUrl, setTrailerUrl] = useState("");

  // Base URL for fetching movie images from the API
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    // useEffect hook is triggered when the component is mounted or fetchUrl changes
    const fetchData = async () => {
      try {
        // Making the GET request using axios to fetch movie data from the API using the provided fetchUrl
        const request = await axios.get(fetchUrl);
        console.log("Fetching data from:", fetchUrl);
        // Storing the movie data (from the API response) into the "movies" state
        setMovies(request.data.results);
        console.log("Fetched data:", request);
      } catch (error) {
        // Log any errors (e.g., network issues or bad API response)
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData to fetch the data from the API
  }, [fetchUrl]); // Re-run the effect if fetchUrl changes

  const handleClick = (movie) => {
    // Triggered when a movie poster is clicked
    if (trailerUrl) {
      // If the trailer is already showing (i.e., trailerUrl is set), clear it to hide the trailer
      setTrailerUrl("");
    } else {
      // If no trailer is showing, attempt to fetch a trailer URL for the clicked movie
      movieTrailer(movie?.title || movie?.name || movie?.original_name) // Use the movie's title, name, or original name to search for a trailer
        .then((url) => {
          // If the trailer URL is successfully fetched, handle the URL
          if (url) {
            // If a valid URL is returned
            console.log("Trailer URL:", url); // Log the trailer URL for debugging purposes
            try {
              // Try to parse the URL to extract its parts (e.g., video ID, protocol)
              const parsedUrl = new URL(url);

              // Log URL components for debugging
              console.log("Protocol:", parsedUrl.protocol); // "https:"
              console.log("Hostname:", parsedUrl.hostname); // "www.youtube.com"
              console.log("Pathname:", parsedUrl.pathname); // "/watch"
              console.log("Search:", parsedUrl.search); // Query params, e.g., "?v=dQw4w9WgXcQ"

              // Using URLSearchParams to extract query parameters from the URL
              const urlParams = new URLSearchParams(parsedUrl.search);
              const videoId = urlParams.get("v"); // Extract the "v" parameter (YouTube video ID)

              if (videoId) {
                // If the video ID exists in the URL
                // Set the trailer URL with the extracted video ID, which will trigger the YouTube player to display
                setTrailerUrl(videoId);
                console.log(videoId);
              } else {
                console.error("Video ID not found in the trailer URL."); // Log error if video ID is missing
                toast.error("Sorry, no trailer available for this movie!"); // Show an error toast notification
              }
            } catch (error) {
              // If the URL parsing fails, show an error message
              console.error("Invalid URL format:", error);
              toast.error("Sorry, no trailer available for this movie!"); // Show error toast notification
            }
          } else {
            // If no trailer URL is found, log an error and show a toast notification
            console.error("No trailer URL found for this movie.");
            toast.error("Sorry, no trailer available for this movie!"); // Show error toast
          }
        })
        .catch((error) => {
          // If an error occurs while fetching the trailer, log it and show an error toast
          console.error("Error fetching trailer:", error);
          toast.error("Sorry, no trailer available for this movie!"); // Show error toast
        });
    }
  };

  // Options for configuring the YouTube player (e.g., height, autoplay)
  const opts = {
    height: "390", // Height of the YouTube player
    width: "100%", // Full width of the player (responsive)
    playerVars: {
      autoplay: 1, // Set autoplay to 1, so the video starts playing automatically
    },
  };

  return (
    <div className="row">
      {" "}
      {/* The container for the entire row of movie posters */}
      <h1>{title}</h1> {/* Display the row's title, e.g., "Trending Now" */}
      <div className="row_posters">
        {" "}
        {/* Container for displaying movie posters */}
        {movies?.map((movie, index) => (
          // Loop through the "movies" array and render each movie's poster
          <img
            onClick={() => handleClick(movie)} // When a poster is clicked, invoke handleClick to fetch the trailer
            key={index} // Unique key for each movie to help React optimize rendering
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} // Dynamically set the image source depending on whether it's a large row or not
            alt={movie.name} // Alt text for the image (used for accessibility)
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} // Apply the correct CSS class based on whether it's a large row or not
          />
        ))}
      </div>
      {/* If trailerUrl is set (meaning a trailer is selected), display the YouTube player */}
      <div style={{ padding: "20px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}{" "}
        {/* Render the YouTube player */}
      </div>
      {/* The ToastContainer renders the toast notifications on the page */}
      <ToastContainer />
    </div>
  );
};

export default Row; // Export the Row component to be used in other parts of the app
