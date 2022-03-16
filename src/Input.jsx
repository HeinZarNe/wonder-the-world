import React from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";

const Input = () => {
  const RegionList = [
    "All Regions",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];
  const filterRegion = useDispatch();
  return (
    <div className="input w-100 px-5 d-flex mt-3 justify-content-between align-items-center py-3 row m-0">
      <div className=" search-box position-relative px-0 py-1 col-12 col-md-4">
        <IoSearch className="position-absolute" />
        <input
          className="ps-5 py-3 w-100 border-0 rounded-3"
          type="search"
          onChange={(e) =>
            filterRegion({
              type: "SEARCH_REGION",
              payload: {
                word: e.target.value,
                length: e.target.value.length - 1,
              },
            })
          }
          placeholder="Search for a country..."
        />
      </div>
      <div className="dropdown d-flex p-0 justify-content-center col-12 position-relative  col-md-3">
        <button
          className=" bg-transparent border-0 px-1 rounded-3 w-100 py-3  dropdown-toggle"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter by Region
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {RegionList.map((r, i) => (
            <li
              key={i}
              onClick={(_) =>
                filterRegion({
                  type: "CHOOSE_REGION",
                  payload: r,
                })
              }
              className="dropdown-item"
            >
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Input;
