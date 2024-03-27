import { useEffect, useState } from 'react';
import NewsBanner from '../../copmonents/NewsBanner/NewsBanner';
import NewsList  from '../../copmonents/NewsList/NewsList';
import styles from './styles.module.css'
import { getNews } from '../../api/apiNews';


const Main = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                setNews(response.news);
            } catch (error) {
                console.log(error);
            }
        }
        fetchNews();
    }, [])

    return (
        <main className={styles.main}>
            { news.length > 0
                ? <NewsBanner item={news[0]} />
                : null}
        <NewsList news={news} />
        </main>
    );
};

export default Main;