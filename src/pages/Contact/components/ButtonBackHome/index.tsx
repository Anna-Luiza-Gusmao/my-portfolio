import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

export function ButtonBackHome() {
    const navigate = useNavigate()

    return (
        <button className={styles.learnMore} onClick={() => navigate('/')} >
            <span className={styles.circle} aria-hidden="true">
                <span className={[styles.icon, styles.arrow].join(' ')}></span>
            </span>
            <span className={styles.buttonText}>BACK HOME</span>
        </button>
    )
}