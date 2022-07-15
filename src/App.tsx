import { Container, Title, SearchForm, TrackerList } from 'components';

export const App = () => {
  return (
    <Container>
      <Title text="Tracker" />

      <SearchForm></SearchForm>

      <TrackerList />
    </Container>
  );
};
