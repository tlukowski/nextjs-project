import Layout from '@/components/Layout';
import { CategoryItem } from '@/components/CategoryItem';
import { useRouter } from 'next/router'
import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr';
import styles from '@/styles/CategoryItem.module.scss';

export default function Kategorie() {
    const router = useRouter();
    const val = router.query;     
    const {data} = useSWR('/api/category', fetcher)
    if (!data) return <div>Loading...</div>    
    
    return(
        <>
            <Layout>
                <>
                <h1 style={{textAlign:"center",paddingTop:"20px"}}> Witaj {val.nick}</h1>
            <h2 style={{textAlign:"center",paddingTop:"20px"}}>Wybierz tematykę rozmowy</h2>
            <div className={styles.list}>
                {data.map((item: { id: number;image:string,name:string }) =>
                <CategoryItem key={item.id} {...item}/>
                )}                
            </div>
                </>
            </Layout>
        </>
    )
}