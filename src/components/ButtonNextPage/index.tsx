import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

interface ButtonNextPageProps {
    path: string
}

export function ButtonNextPage({path}: ButtonNextPageProps) {
    const navigate = useNavigate()

    return (
        <button className={styles.learnMore} onClick={() => navigate(`/${path}`)} >
            <span className={styles.circle} aria-hidden="true">
                <span className={[styles.icon, styles.arrow].join(' ')}></span>
            </span>
            <span className={styles.buttonText}>NEXT PAGE</span>
        </button>
    )
}