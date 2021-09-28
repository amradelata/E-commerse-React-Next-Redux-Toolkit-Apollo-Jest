import { gql } from "@apollo/client";
import client from "../apollo-client";
export default function CountriesWeShipTo({ countries }) {
  return (
    <div>
      <h1>countries we ship to it </h1>
      {countries.map((country) => (
        <div key={country.code}>
          <h3>{country.name}</h3>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
      ))}
    </div>
  );
}
export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query products {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
