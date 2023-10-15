import styles from './MovieItem.module.css'

function MovieItem({poster, title, imdbID}) {

    return (
        <div className={styles.wrapper}>
            <img src={poster} />
            <div className={styles.footer}>
                {title}
                <a href={`https://imdb.com/title/${imdbID}`} className={styles.imdb}>IMDb</a>
            </div>
        </div>
    )
}

export default MovieItem;