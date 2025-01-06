import { useReducer, useCallback } from "react";
import axios from "axios";

// Initial state for the reducer
const initialState = {
  city: "",
  data: null,
  error: null,
  loading: false,
};

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const AQIChecker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { city, data, error, loading } = state;

  const fetchAQI = useCallback(async () => {
    if (!city.trim()) {
      dispatch({ type: "SET_ERROR", payload: "Please enter a city name." });
      return;
    }

    dispatch({ type: "SET_ERROR", payload: null });
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const apiKey = import.meta.env.VITE_API_KEY; // Using Vite environment variable
      const url = `https://api.waqi.info/feed/${city}/?token=${apiKey}`;

      const response = await axios.get(url);
      dispatch({ type: "SET_LOADING", payload: false });

      if (response.data.status === "ok") {
        // Only update if data has changed
        if (JSON.stringify(response.data.data) !== JSON.stringify(data)) {
          dispatch({ type: "SET_DATA", payload: response.data.data });
        }
      } else {
        dispatch({
          type: "SET_ERROR",
          payload:
            "Unable to fetch AQI. Please check the city name or try again later.",
        });
      }
    } catch (err) {
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({
        type: "SET_ERROR",
        payload:
          "An error occurred while fetching data. Please try again later.",
      });
      console.error(err);
    }
  }, [city, data]);

  return (
    <div className="bg-white p-6 shadow rounded-md" id="CheckAQI">
      <h3 className="text-xl font-bold mb-4">Check Air Quality Index (AQI)</h3>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) =>
          dispatch({ type: "SET_CITY", payload: e.target.value })
        }
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={fetchAQI}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Check AQI
      </button>

      {/* Show spinner when loading */}
      {loading && (
        <div className="flex justify-center mt-4 text-center">
          <div className="spinner-border animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-8 h-8"></div>
        </div>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}
      {data !== null && !error && (
        <p className="mt-4 text-lg">
          AQI for <strong>{data?.city?.name}</strong>:{" "}
          <span className="font-bold">{data?.aqi}</span>
        </p>
      )}
    </div>
  );
};

export default AQIChecker;
