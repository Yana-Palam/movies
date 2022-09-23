import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { getTrendingMovies } from 'services/themoviedbAPI';
import Container from 'components/Container';
import Section from 'components/Section';
import { ItemLink } from './Home.styled';
import { useLocation } from 'react-router-dom';
import { IMAGE_URL } from 'services/themoviedbAPI';
import { List, Item, Title } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getTrendingMovies().then(res => setTrendingMovies(res));
  }, []);
  return (
    <Section>
      <Container title="Trending today">
        <List>
          {trendingMovies.map(({ title, id, poster_path }) => {
            const path = `movies/${id}`;
            return (
              <Item key={id}>
                <ItemLink to={path} state={{ from: location }}>
                  {poster_path && (
                    <img src={IMAGE_URL + 'w185' + poster_path} alt={title} />
                  )}
                  <Title>{title}</Title>
                </ItemLink>
              </Item>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};

// Home.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Home;
