import { Link } from 'react-router-dom';
import Section from 'components/Section';

const NotFoundPage = () => {
  return (
    <Section>
      <p>
        Page was not found, welcome to <Link to="/">home page</Link>!
      </p>
    </Section>
  );
};

export default NotFoundPage;
