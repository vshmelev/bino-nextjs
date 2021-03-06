import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import CompanyList from "../components/CompanyList";

export async function getStaticProps() {

    // TODO load from DB
    const companies = [
        {
            name: 'Wetpaint',
            description: 'Technology Platform Company',
            founded_year: 2005
        },
        {
            name: 'Facebook',
            description: 'Social network',
            founded_year: 2004
        },
        {
            name: 'Twitter',
            description: 'Communication platform',
            founded_year: 2006
        },
    ];

    return {
        props: {
            companies
        }
    };
}

const Companies = (props) => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </Head>

            <main className={styles.content}>
                <h2>
                    Company List
                </h2>

                <CompanyList {...props}/>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
};

export default Companies;