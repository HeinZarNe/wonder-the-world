import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";

const Placeholder = () => {
  return (
    <div className="row px-0 placeholder-glow">
      <div className="col-12 col-md-6">
        <span
          className="w-100 placeholder"
          style={{ height: "300px" }}
          alt={"a flag"}
        />
      </div>
      <div className="detail-data col-12 px-5 py-3 col-md-6">
        <span className="title placeholder ms-2 mb-4 fw-bold col-4"></span>
        <div className="datas row px-0 mb-5">
          <div className="left col-12 col-md-6">
            <ul>
              <li className="  mb-2">
                <span className="ms-2 placeholder col-5 "></span>
                <span className="ms-2 placeholder col-4 "></span>
              </li>
              <li className="  mb-2">
                <span className="ms-2 placeholder col-4 "></span>
                <span className="ms-2 placeholder col-6 "></span>
              </li>
              <li className="  mb-2">
                <span className="ms-2 placeholder col-4 "></span>
                <span className="ms-2 placeholder col-4 "></span>
              </li>
              <li className="  mb-2">
                <span className="ms-2 placeholder col-5 "></span>
                <span className="ms-2 placeholder col-3 "></span>
              </li>
              <li className="  mb-2">
                <span className="ms-2 placeholder col-7 "></span>
                <span className="ms-2 placeholder col-3 "></span>
              </li>
            </ul>
          </div>
          <div className="right col-12 col-md-6">
            <ul>
              <li className="  mb-2">
                <span className="ms-2 placeholder col-5 "></span>
                <span className="ms-2 placeholder col-3 "></span>
              </li>
              <li className="  mb-2">
                <span className="ms-2 placeholder col-4 "></span>
                <span className="ms-2 placeholder col-7 "></span>
              </li>
              <li className="  mb-2">
                <span className="ms-2 placeholder col-5 "></span>
                <span className="ms-2 placeholder col-5 "></span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" ms-2 fw-bold borderl mb-2 d-flex">
          <span className="placeholder col-4 me-4"></span>

          <span className="px-2 py-1 me-3 placeholder col-2"></span>
          <span className="px-2 py-1 me-3 placeholder col-2"></span>
          <span className="px-2 py-1 me-3 placeholder col-2"></span>
        </div>
      </div>
    </div>
  );
};

const Detail = () => {
  const CountryList = useSelector((state) => state);
  const param = useParams();

  const navigate = useNavigate();

  return (
    <div className="detail px-5 py-5 w-100 ">
      <div
        className=" back-btn rounded-3 mb-5 px-3 py-2 fw-bold"
        onClick={(_) => navigate("/")}
      >
        <BsArrowLeft />
        Back
      </div>
      {CountryList.length === 0 ? (
        <div className="">
          <Placeholder />
        </div>
      ) : (
        <div className="row px-0">
          <div className="col-12 col-md-6">
            <img
              src={CountryList[param.index].flags.png}
              className="w-100"
              alt={"a flag"}
            />
          </div>
          <div className="detail-data col-12 px-5 py-3 col-md-6">
            <h1 className="title mb-4 fw-bold">
              {CountryList[param.index].name.common}
            </h1>
            <div className="datas row px-0">
              <div className="left col-12 col-md-6">
                <ul>
                  <li className="fw-bold  mb-2">
                    Native Name:
                    <span className="ms-1 ">
                      {
                        Object.values(
                          CountryList[param.index].name.nativeName
                        )[0].official
                      }
                    </span>
                  </li>
                  <li className="fw-bold  mb-2">
                    Population:
                    <span className="ms-1 ">
                      {CountryList[param.index].population}
                    </span>
                  </li>
                  <li className="fw-bold  mb-2">
                    Region
                    <span className="ms-1 ">
                      {CountryList[param.index].region}
                    </span>
                  </li>
                  <li className="fw-bold  mb-2">
                    SubRegion:
                    <span className="ms-1 ">
                      {CountryList[param.index].subregion}
                    </span>
                  </li>
                  <li className="fw-bold  mb-2">
                    Capital
                    <span className="ms-1 ">
                      {CountryList[param.index].capital}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="right col-12 col-md-6">
                <ul>
                  <li className="fw-bold  mb-2">
                    Top Level Domain:
                    <span className="ms-1">
                      {CountryList[param.index].tld &&
                        CountryList[param.index].tld[0]}
                    </span>
                  </li>
                  <li className="fw-bold  mb-2">
                    Currency:
                    <span className="ms-1 ">
                      {
                        Object.values(CountryList[param.index].currencies)[0]
                          .name
                      }
                    </span>
                  </li>
                  <li className="fw-bold  mb-2">
                    Languages:
                    <span className="ms-1 ">
                      {Object.values(CountryList[param.index].languages).join(
                        ","
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fw-bold borderl mb-2">
              <span>Border Countries:</span>
              <div className="">
                {CountryList[param.index].borders &&
                  CountryList[param.index].borders.map((b, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 me-3 border-country w-auto"
                      style={{ fontWeight: "100" }}
                      onClick={(_) =>
                        navigate(
                          `/${CountryList.indexOf(
                            CountryList.find((c) => c.fifa === b || c.cca3 == b)
                          )}`
                        )
                      }
                    >
                      {
                        CountryList[
                          CountryList.indexOf(
                            CountryList.find((c) => c.cca3 == b || c.flags == b)
                          )
                        ].name.common
                      }
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
