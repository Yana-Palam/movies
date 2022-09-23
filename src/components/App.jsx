import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
