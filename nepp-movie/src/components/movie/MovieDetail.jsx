import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieDetail } from "../../utils/movie_api";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetail(id).then(({ data }) => setMovie(data));
  }, [id]);

  if (!movie) return;

  const {
    title,
    poster_path,
    backdrop_path,
    release_date,
    overview,
    homepage,
  } = movie;

  const url = "https://image.tmdb.org/t/p/original" + poster_path;

  const back_url = "https://image.tmdb.org/t/p/original" + backdrop_path;

  return (
    <DetailBox back_url={back_url}>
      <DetailInner>
        <ImageBox>
          <img src={url} alt={title} />
        </ImageBox>
        <DetailContentBox>
          <TitleBox>
            <a href={homepage}>{title}</a>
            <span>({release_date?.substr(0, 4)})</span>
          </TitleBox>
          <OverViewBox>
            <h3>개요</h3>
            <p>{overview}</p>
          </OverViewBox>
        </DetailContentBox>
      </DetailInner>
    </DetailBox>
  );
}

const DetailBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  background-color: rgba(0, 0, 0, 0.4);

  background: url(${({ back_url }) => back_url}) center / cover
    rgba(0, 0, 0, 0.8);
  background-blend-mode: multiply;
`;

const DetailInner = styled.div`
  display: flex;
  max-width: 1440px;
  flex: 1;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 6px;

  width: 300px;
  height: 500px;
  flex-shrink: 0;
  img {
    height: 100%;
  }
`;

const DetailContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

const TitleBox = styled.h2`
  a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
  }

  span {
    font-size: 1.4rem;
    color: #eee;
  }

  margin-bottom: 20px;
`;

const OverViewBox = styled.div`
  color: #fff;
  h3 {
    font-weight: 700;
    margin: 10px 0;
  }

  p {
    line-height: 1.4rem;
  }
`;

export default MovieDetail;
