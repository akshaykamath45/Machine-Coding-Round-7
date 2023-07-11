import "./DetailPage.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { data } from "../../data/Data";

export const DetailPage = () => {
  const { continentID, countryID, destinationID } = useParams();

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

  const destination = country.destinations.find(
    (destination) => destination.id === Number(destinationID)
  );
  if (!destination) {
    return <div className="not-found">Destination not found.</div>;
  }

  return (
    <div>
      <div className="header">
        <Link to={`/country/${continentID}/${countryID}`} className="back-btn">
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
        <h1 className="title">{destination.name}</h1>
      </div>

      <div className="details">
        <div className="adjust-img">
          <img
            src={destination.image}
            alt="destination-img"
            className="img-style"
          />
        </div>

        <div className="caption">
          <p className="caption-title">
            Description:{" "}
            <span className="caption-description">
              {destination.description}
            </span>
          </p>
          <p className="caption-title">
            Rating:{" "}
            <span className="caption-description">{destination.ratings}</span>
          </p>
          <p className="caption-title">
            Reviews:{" "}
            <span className="caption-description">{destination.reviews}</span>{" "}
          </p>
          <p className="caption-title">
            Location:{" "}
            <span className="caption-description">{destination.location}</span>
          </p>
          <p className="caption-title">
            Opening Hours:{" "}
            <span className="caption-description">
              {destination.openingHours}
            </span>
          </p>
          <p className="caption-title">
            Ticket Price:{" "}
            <span className="caption-description">
              {destination.ticketPrice}
            </span>
          </p>
          <Link to={destination.website} className="website-link">
            Website
          </Link>
        </div>
      </div>
    </div>
  );
};
