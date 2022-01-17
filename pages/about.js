import { useState } from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function Index({abotInfo}) {
    // const [abotInfo, setAboutInfo] = useState([        
    //         {id: 1, name: 'about1'},
    //         {id: 2, name: 'about2'}        
    // ])
    return (
        <>
            <Header title={'about'}/>
            <h1>About page</h1>
            <ul>
                {abotInfo.map(item => 
                    <li key={item.id}>
                        <Link href={`/about/${item.id}`}><a>{item.name}</a></Link>
                    </li>
                )}
            </ul>
        </>
    )
}

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const abotInfo = await response.json();

    return {       
      props: {abotInfo}, 
    }
}