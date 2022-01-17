
import LinkA from "./LinkA";
import styles from "../styles/header.module.css"

export default function Header({children, title}) {
    return (
        <>
            
            <footer className={styles.header}>
                <LinkA href={'/'} text={'Main'}/>
                <LinkA href={'/about'} text={'About'}/>
            </footer>
        </>
    )
}