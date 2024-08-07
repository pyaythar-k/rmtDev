import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header, { HeaderTop } from './Header';
import { useState } from 'react';
import BookmarksButton from './BookmarksButton';
import Logo from './Logo';
import SearchForm from './SearchForm';
import JobItemContent from './JobItemContent';
import Sidebar, { SidebarTop } from './Sidebar';
import JobList from './JobList';
import Pagination from './PaginationControls';
import ResultsCount from './ResultsCount';
import Sorting from './SortingControls';
import { useDebounce, useJobItems } from '../lib/hooks';

function App() {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 500);
  const [jobItems, isLoading, jobItemsCount] = useJobItems(debouncedSearchText);

  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount jobItemsCount={jobItemsCount} />
            <Sorting />
          </SidebarTop>
          <JobList jobItems={jobItems} isLoading={isLoading} />
          <Pagination />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer jobItemsCount={jobItemsCount} />
    </>
  );
}

export default App;
