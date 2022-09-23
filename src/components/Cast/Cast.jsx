import { getMovieCast } from 'services/themoviedbAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'components/Container';
import Section from 'components/Section';
import { IMAGE_URL } from 'services/themoviedbAPI';
import { List, Item, Title } from './Cast.styled';
import avatar from '../../assets/images/avatar.jpg';
const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(res => {
      setMovieCast(res);
    });
  }, [movieId]);

  return (
    <>
      {movieCast && (
        <Section>
          <Container>
            <List>
              {movieCast.cast.map(
                ({ id, profile_path, name, original_name, character }) => (
                  <Item key={id}>
                    {profile_path ? (
                      <img
                        src={IMAGE_URL + 'w185' + profile_path}
                        alt={name || original_name}
                      />
                    ) : (
                      <img src={avatar} alt="avatar" width="185" height="278" />
                    )}

                    <Title>{name || original_name}</Title>
                    {character && (
                      <p>
                        <b>Character:</b> {character}
                      </p>
                    )}
                  </Item>
                )
              )}
            </List>
          </Container>
        </Section>
      )}
    </>
  );
};

export default Cast;
