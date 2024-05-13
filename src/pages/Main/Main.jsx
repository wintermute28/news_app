import NewsBanner from "../../copmonents/NewsBanner/NewsBanner"
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import NewsList from "../../copmonents/NewsList/NewsList";
import Pagination from "../../copmonents/Pagination/Pagination";
import Categories from "../../copmonents/Categories/Categories";
import Search from "../../copmonents/Search/Search";
import { useDebounce } from "../../healpers/hooks/useDebounce";
import { TOTAL_PAGES, PAGE_SIZE } from "../../constants/constants";
import { useFetch } from "../../healpers/hooks/useFetch";
import { useFilters } from "../../healpers/hooks/useFilters";

const Main = () => {

  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const {data, isLoading} = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const {data: dataCategories} = useFetch(getCategories)

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
    <main className={styles.main}>
        {dataCategories ? (
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => changeFilter('category', category)}
          />
        ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)} />

      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={data?.news} />

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </main>
  );
};

export default Main;