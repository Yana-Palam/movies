import { useState, useRef, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { getSearchMovie } from 'services/themoviedbAPI';
import { useLocation, useSearchParams } from 'react-router-dom';
import Section from 'components/Section';
import Container from 'components/Container';
import { IMAGE_URL } from 'services/themoviedbAPI';
import {
  Input,
  Button,
  List,
  Item,
  ItemLink,
  Title,
  Form,
  Text,
} from './Movies.styled';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const isFirstRender = useRef('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query !== '') {
      getSearchMovie(query).then(res => setSearchMovie(res));
      isFirstRender.current =
        'Sorry, there are no movies matching your search query. Please try again.';
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    if (query === '') return;
    getSearchMovie(query).then(res => setSearchMovie(res));
    form.reset();
  };

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            <BsSearch size="24" color="#fd5103" />
          </Button>
          <Input
            type="text"
            name="query"
            placeholder="Search movie"
            autoComplete="off"
          />
        </Form>

        {searchMovie.length > 0 ? (
          <List>
            {searchMovie.map(({ id, title, poster_path }) => {
              const path = `/movies/${id}`;
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
        ) : (
          <Text>{isFirstRender.current}</Text>
        )}
      </Container>
    </Section>
  );
};

export default Movies;
