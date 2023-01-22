import './styles.css'

export function ButtonViewGithub() {
    return (
        <button className="cta">
            <span><span style={{'color': '#FFF6F6'}}>Vie</span>w in GitHub</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </button>
    )
}