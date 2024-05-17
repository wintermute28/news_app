import Pagination from '../Pagination/Pagination';
import NewsList from '../NewsList/NewsList';
import styles from './styles.module.css';
import { TOTAL_PAGES } from '../../constants/constants';
import NewsFilters from '../NewsFilters/NewsFilters';

const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {
    

    const handleNextPage = () => {
      if (filters.page_number < TOTAL_PAGES) {
        changeFilter('page_number', filters.page_number + 1);
      }
    };
  
    const handlePreviousPage = () => {
      if (filters.page_number > 1) {
        changeFilter('page_number', filters.page_number - 1);
      }
    };
  
    const handlePageClick = (pageNumber) => {
      changeFilter('page_number', pageNumber);
    };

    return (
        <section className={styles.section}>
          <NewsFilters
            filters={filters}
            changeFilter={changeFilter} />

          <Pagination
              handlePreviousPage={handlePreviousPage}
              handleNextPage={handleNextPage}
              handlePageClick={handlePageClick}
              totalPages={TOTAL_PAGES}
              currentPage={filters.page_number} />

          <NewsList
            isLoading={isLoading}
            news={news} />

          <Pagination
              handlePreviousPage={handlePreviousPage}
              handleNextPage={handleNextPage}
              handlePageClick={handlePageClick}
              totalPages={TOTAL_PAGES}
              currentPage={filters.page_number} />

        </section>
    );
};

export default NewsByFilters;