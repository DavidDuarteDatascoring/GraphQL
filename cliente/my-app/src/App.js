// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

export default function App() {
    return (
      <div>
        <h2>My first Apollo app 🚀</h2>
        <br/>
        <DisplayUniversities />
      </div>
    );
  }
function DisplayUniversities() {
    const { loading, error, data } = useQuery(GET_UNIVERSITIES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.universities.map(({ name, alpha_two_code, country, web_pages }) => (
      <div key={name}>
        <h3>Nombre de la Universidad: {name}</h3>
        <br />
        <b>Acerca de la universidad:</b>
        <p>País: {country}</p>
        <p>Página web:{web_pages}</p>
        <br />
      </div>
    ));
  }

const GET_UNIVERSITIES = gql`
  query GetUniversities {
    universities {
        name
        alpha_two_code
        country
        web_pages
    }
  }
`;