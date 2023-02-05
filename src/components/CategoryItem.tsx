import styles from '@/styles/CategoryItem.module.scss';
import Image from 'next/image';

type CategoryItemProps = {
    name: string;
    image:string;
  };

export const CategoryItem = (props: CategoryItemProps) =>{    
    const {name,image} = props;    
    return(
        <>
            <div className={styles.category}>
                <div className={styles.image}>
                    <Image
                    src={`/${image}`}
                    alt={image}
                    width={170}
                    height={230}                
                    />          
                </div>                
                <div className={styles.text}>
                    {name}
                </div>
            </div>
        </>
    )
}