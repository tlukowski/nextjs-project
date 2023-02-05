import styles from '@/styles/Layout.module.scss';

export default function Layout({children}:{children: JSX.Element}) {
    return <div className={styles.container}>{children}</div>;
}