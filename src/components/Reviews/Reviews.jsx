import { getMovieReviews } from 'services/themoviedbAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'components/Container';
import Section from 'components/Section';
import { Review, Text } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(res => {
      setMovieReviews(res);
    });
  }, [movieId]);

  return (
    <Section>
      <Container>
        <ul>
          {movieReviews.length > 0 ? (
            movieReviews.map(({ author, id, content }) => (
              <Review key={id}>
                <p>
                  <b>Author:</b> {author}
                </p>
                <p>{content}</p>
              </Review>
            ))
          ) : (
            <Text>We don't have any reviews for this movie.</Text>
          )}
        </ul>
      </Container>
    </Section>
  );
};

export default Reviews;
