import Head from "next/head";
import LinkA from "./LinkA";
import styles from "../styles/header.module.css"

export default function Header({children, title}) {
    return (
        <>
            <Head>
                <meta keyword="ex1, ex2"></meta>
                <title>{title}</title>
            </Head>
            <header className={styles.header}>
                <LinkA href={'/'} text={'Main'}/>
                <LinkA href={'/about'} text={'About'}/>
            </header>
        </>
    )
}