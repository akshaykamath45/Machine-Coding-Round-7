import "./CountryCategory.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { data } from "../../data/Data";

export const CountryCategory = () => {
  const { continentID } = useParams();

  const continent = data.continents.find(
    (continent) => continent.id === Number(continentID)
  );

  if (!continent) {
    return (
      <div className="not-found">
        <h1>Continent not found. </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <Link to="/" className="back-btn">
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
          Top Countries in {continent.name} for your next holiday
        </h1>
      </div>

      <div className="country-items">
        {continent.countries.map(({ id, name, image }) => {
          return (
            <Link to={`/country/${continentID}/${id}`}>
              <div className="country">
                <img src={image} alt="country-img" className="img-style"></img>
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
                <p className="country-name">{name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
