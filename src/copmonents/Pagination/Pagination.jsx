import styles from './styles.module.css';

const Pagination = ({totalPages, currentPage, handleNextPage, handlePreviousPage, handlePageClick}) => {
    return (
        <div className={styles.pagination}>
            <button
                className={styles.arrow}
                onClick={handlePreviousPage}
                disabled={currentPage <= 1}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return (<button
                            className={styles.pageNumber}
                            onClick={() => handlePageClick(index + 1)}
                            disabled={index + 1 === currentPage}
                            key={index}>
                                {index + 1}
                            </button>)
                })}
            </div>
            <button
                className={styles.arrow}
                onClick={handleNextPage}
                disabled={currentPage >= 10}>{'>'}</button>
        </div>
    );
};

export default Pagination;