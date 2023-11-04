import '../styles.scss';
import Title from './Title.jsx';

// first as a collection of props. Kinda like an interface in java
export const MyProps = {
  title: 'Oppgave 2: It Works!'
};

const MyComponent = ({ title }) => {
  return <Title title={title} />;
};

export default MyComponent;
