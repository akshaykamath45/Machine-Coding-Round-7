import "./ListPage.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { data } from "../../data/Data";

export const ListPage = () => {
  const { continentID, countryID } = useParams();

  const continent = data.continents.find(
    (continent) => continent.id === Number(continentID)
  );

  if (!continent) {
    return <div className="not-found">Continent not found.</div>;
  }

  const country = continent.countries.find(
    (country) => country.id === Number(countryID)
  );

  if (!country) {
    return <div className="not-found">Country not found.</div>;
  }

  return (
    <div>
      <div className="header">
        <Link to={`/country/${continentID}`} className="back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </Link>
        <h1 className="title">
          Top Destinations in {country.name} for your next holiday
        </h1>
      </div>

      <div className="destination-items">
        {country.destinations.map(({ id, name, image }) => {
          return (
            <Link to={`/country/${continentID}/${countryID}/${id}`}>
              <div className="destination">
                <img
                  src={image}
                  alt="destination-img"
                  className="img-style"
                ></img>
                <div className="location-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <p className="destination-name">{name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
