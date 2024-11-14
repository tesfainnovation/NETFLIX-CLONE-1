import Row from "../row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row
        title="Science Fiction Movies"
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Row title="TV Shows" fetchUrl={requests.fetchTVShows} />
    </>
  );
};

export default RowList;
