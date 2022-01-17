import { useRouter } from "next/router";
import Header from "../../components/Header";

export default function({info}) {
    const {query} = useRouter();
    return (   
        <>   
            <Header title={`about${query.id}`}/> 
            <div>About Info id{query.id} name - {info.name}</div>
        </> 
    )
} 

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const info = await response.json();
    return {
      props: {info}, // will be passed to the page component as props
    }
  }