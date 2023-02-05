import { fetcher } from '@/utils/fetcher'
import useSWR from 'swr'
import styles from '@/styles/Quote.module.scss';

export const Quote = () => {
    const { data, error } = useSWR('/api/quote', fetcher)
  
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    const {content,answer,author} = data;
    
    return (
    <div className={styles.quote}>
        <div className={styles.title}>Odpowiedz dnia:</div>
        <div className={styles.content}>
            <div className={styles.question}>{content}</div>
            <div className={styles.answer}>{answer}</div>
        </div>        
        <div className={styles.author}>{author}</div>
    </div>
    )
  }