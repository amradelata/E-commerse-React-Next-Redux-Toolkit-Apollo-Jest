import { gql } from "@apollo/client";
import client from "../../apollo-client";
import styles from "./countries-we-ship-to.module.css";
export default function CountriesWeShipTo({ countries }) {
  return (
    <div className="container is-fullhd">
      <h2>countries we ship to it </h2>
      <h5 className={styles.h5}>
        This data from (countries.trevorblades API) using GraphQL/Apollo
      </h5>
      <div className={styles.allCountries}>
        {countries.map((country) => (
          <div key={country.code} className={styles.country}>
            <h3>{country.name}</h3>
            <p>
              {country.code} - {country.emoji}
            </p>
          </div>
        ))}
      </div>
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
      countries: data.countries.slice(0, 12),
    },
  };
}
