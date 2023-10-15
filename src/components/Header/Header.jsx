import styles from './Header.module.css';

function Header({search, setSearch}){
    return (
        <header className={styles.header}>
            <div className={styles.logo}>FILMOVI</div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
        </header>
    )
}

export default Header;