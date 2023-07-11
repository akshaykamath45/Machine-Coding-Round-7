import { ContinentsCategory } from "./pages/ContinentsCategory/ContinentsCategory";
import { CountryCategory } from "./pages/CountryCategory/CountryCategory";
import { DetailPage } from "./pages/DetailPage/DetailPage";
import { ListPage } from "./pages/ListPage/ListPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContinentsCategory />} />
        <Route path="/country/:continentID" element={<CountryCategory />} />
        <Route path="/country/:continentID/:countryID" element={<ListPage />} />
        <Route
          path="/country/:continentID/:countryID/:destinationID"
          element={<DetailPage />}
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
