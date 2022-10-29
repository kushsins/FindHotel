import { useState, useEffect } from "react";
import RoomLayout from "../RoomLayout/RoomLayout";
import "./Overlay.css";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { styled, Button, IconButton } from "@mui/material";

const Overlay = ({ open, setPopUp }: { open: boolean; setPopUp: any }) => {
  const [details, setDetails] = useState<Array<details>>([
    { id: 0, room: { adult: 1, children: [] } },
  ]);
  const [addRommBtn, setAddRoomBtn] = useState(false);

  const AddRoomButton = styled(Button)({
    color: "primary",
    width: "100%",
    fontWeight: 600,
    textTransform: "none",
    padding: "12px",
  });
  const handleSearch = () => {
    let querry = "";
    for (let i = 0; i < details.length; i++) {
      querry.concat(details[i].room.adult.toString());
    }
  };
  useEffect(() => {
    if (details.length === 8) {
      setAddRoomBtn(true);
    } else {
      setAddRoomBtn(false);
    }
  }, [details.length]);
  const addRoom = () => {
    setDetails([
      ...details,
      { id: details.length, room: { adult: 1, children: [] } },
    ]);
  };
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="popupWrapper">
        <div className="popup">
          <div className="popUpHeader">
            <div>
              <IconButton
                onClick={() => {
                  setPopUp(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className="popHeading">Who is Staying ?</div>
          </div>
          <div className="popupContent">
            <div>
              {details.map((detail, i) => (
                <div key={i}>
                  <RoomLayout
                    current={detail}
                    details={details}
                    setDetails={setDetails}
                  />
                </div>
              ))}
            </div>
            <div className="addRoomBtn">
              <AddRoomButton
                onClick={addRoom}
                startIcon={<AddIcon style={{ color: "#0077ff" }} />}
                disabled={addRommBtn}
              >
                Add Room
              </AddRoomButton>
            </div>
          </div>
          <div className="searchBtnCont">
            <button className="searchBtn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
