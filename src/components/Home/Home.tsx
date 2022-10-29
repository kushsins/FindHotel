import { Autocomplete } from "@mui/material";
import { DatePickerX } from "../DatePicker";
import GroupIcon from "@mui/icons-material/Group";
import "./Home.css";

import { StyledTextFelid } from "../StyledTextFeild";
import { StyledButton } from "../StyledButton";
import Overlay from "../Overlay/Overlay";
import { useState } from "react";

const Home = () => {
  const [popUpState, setPopUp] = useState(false);
  const options = ["Banglore", "Delhi", "Ghaziabad", "Greater Noida", "Noida"];
  const patners = [
    { name: "Expedia", logo: "/expedia.svg" },
    { name: "Booking.com", logo: "/booking.svg" },
    { name: "Hotels", logo: "/hotels.svg" },
    { name: "agonda", logo: "/agoda.svg" },
  ];

  return (
    <section className="home">
      <Overlay open={popUpState} setPopUp={setPopUp} />
      <div className="main">
        <div className="contentContainer">
          <div className="contentWrapper">
            <h1 className="heading">Find the right hotel at the best price</h1>
            <div className="content">
              <div className="form">
                <Autocomplete
                  freeSolo
                  options={options}
                  renderInput={(params) => (
                    <StyledTextFelid
                      color="primary"
                      {...params}
                      label="Type city, place, or hotel name"
                    />
                  )}
                />
                <div className="details">
                  <div className="dateRange">
                    <DatePickerX label="check-in" />
                    <DatePickerX label="check-out" />
                  </div>
                  <div className="guest">
                    <StyledButton
                      className="guestBtn"
                      variant="outlined"
                      startIcon={<GroupIcon style={{ color: "#0077ff" }} />}
                      onClick={() => {
                        setPopUp(true);
                      }}
                    >
                      0
                    </StyledButton>
                  </div>
                </div>
                <button className="searchBtn">Search</button>
              </div>
            </div>
            <div className="logosCont">
              {patners.map((patner, i) => (
                <img
                  key={i}
                  src={process.env.PUBLIC_URL + patner.logo}
                  alt={patner.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </section>
  );
};

export default Home;
