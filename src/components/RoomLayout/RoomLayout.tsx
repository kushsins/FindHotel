import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import CloseIcon from "@mui/icons-material/Close";

import "./RoomLayout.css";

const RoomLayout = ({
  current,
  details,
  setDetails,
}: {
  current: details;
  details: Array<details>;
  setDetails: any;
}) => {
  const CrossButton = styled(Button)({
    color: "#ff0000",
    minWidth: "40px",
  });
  const [classNames, setClassNames] = useState("visible");
  useEffect(() => {
    if (current.id === 0) {
      setClassNames("invisible");
    } else {
      setClassNames("visible");
    }
  }, [current.id]);
  const removeRoom = () => {
    setDetails(details.filter((detail) => detail.id !== current.id));
  };
  const removeChildren = (i: number) => {
    setDetails(
      details.map((detail) => {
        if (detail.id === current.id) {
          return {
            ...detail,
            room: {
              ...detail.room,
              children: detail.room.children.filter((child) => child.id !== i),
            },
          };
        } else {
          return detail;
        }
      })
    );
  };

  const ageOptions = [
    "<" + 1,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
  ];
  const handleChange = (e: SelectChangeEvent, i: number) => {
    setDetails(
      details.map((detail) => {
        if (detail.id === current.id) {
          return {
            ...detail,
            room: {
              ...detail.room,
              children: detail.room.children.map((child) => {
                if (child.id === i) {
                  return {
                    ...child,
                    age: e.target.value,
                  };
                } else {
                  return child;
                }
              }),
            },
          };
        } else {
          return detail;
        }
      })
    );
  };

  return (
    <div className="detailsCont">
      <div className="roomHeadingCont">
        <h4 className="detailHeading">{`Room ${current.id + 1}`}</h4>
        <h4 className="detailHeading">
          {
            <span onClick={removeRoom} className={classNames}>
              Remove room
            </span>
          }
        </h4>
      </div>
      <div className="adultCount">
        <div className="occupant">Adults</div>
        <Counter
          type="adult"
          count={current.room.adult}
          current={current}
          setDetails={setDetails}
          details={details}
        />
      </div>
      <div className="adultCount">
        <div className="occupant">Children</div>
        <Counter
          type="children"
          count={current.room.children.length}
          current={current}
          setDetails={setDetails}
          details={details}
        />
      </div>
      <div className="childAgeFlex">
        {current.room.children.map((child, i) => (
          <div key={i} className="childCount">
            <div className="occupant">{`child ${i + 1} age`}</div>
            <div>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="age"
                  id="age"
                  value={child.age.toString()}
                  label="Age"
                  onChange={(e) => {
                    handleChange(e, i);
                  }}
                >
                  {ageOptions.map((ageOption) => (
                    <MenuItem value={ageOption}>{ageOption}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <CrossButton
                className="crossBtn"
                onClick={() => {
                  removeChildren(i);
                }}
              >
                <CloseIcon />
              </CrossButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomLayout;
