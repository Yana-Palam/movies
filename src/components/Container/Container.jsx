import PropTypes from 'prop-types';

import { ContainerWpr, Title } from './Container.styled';

const Container = ({ title = '', children }) => {
  return (
    <ContainerWpr>
      {title && <Title>{title}</Title>}

      {children}
    </ContainerWpr>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
