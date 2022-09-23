import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import { getMovieDetails, IMAGE_URL } from 'services/themoviedbAPI';
import {
  Wrapper,
  WrapperDetails,
  TitleMovie,
  TitleList,
  LinkInformation,
  Item,
  Border,
  List,
  Button,
} from './MovieDetails.styled';

import Section from 'components/Section';
import Container from 'components/Container';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId).then(res => {
      setMovieDetails(res);
    });
  }, [movieId]);

  const handleClick = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <>
      {movieDetails && (
        <>
          <Section>
            <Container>
              <Button type="button" onClick={handleClick}>
                Go back
                <AiOutlineRollback size="25px" />
              </Button>
              <Wrapper>
                {movieDetails.poster_path && (
                  <img
                    src={IMAGE_URL + 'w342' + movieDetails.poster_path}
                    alt={movieDetails.name || movieDetails.title}
                    height="400"
                  />
                )}

                <WrapperDetails>
                  <TitleMovie>
                    {movieDetails.title || movieDetails.name}
                    {movieDetails.release_date &&
                      `(${movieDetails.release_date.slice(0, 4)})`}
                  </TitleMovie>
                  <p>
                    User Score:{' '}
                    {movieDetails.vote_average &&
                      (movieDetails.vote_average * 10).toFixed(1)}
                    %
                  </p>
                  <h3>Overview</h3>
                  <p>{movieDetails.overview}</p>
                  <h3>Genres</h3>
                  <p>
                    {movieDetails.genres &&
                      movieDetails.genres.map(el => el.name).join(' ')}
                  </p>
                </WrapperDetails>
              </Wrapper>
            </Container>
          </Section>
          <Border />
          <Section>
            <Container>
              <TitleList>Additional information</TitleList>
              <List>
                <Item>
                  <LinkInformation to="cast" state={location.state}>
                    Cast
                  </LinkInformation>
                </Item>
                <Item>
                  <LinkInformation to="reviews" state={location.state}>
                    Reviews
                  </LinkInformation>
                </Item>
              </List>
            </Container>
          </Section>
          <Border />

          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
