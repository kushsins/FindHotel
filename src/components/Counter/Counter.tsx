import { Button, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Counter.css";
import { useState, useEffect } from "react";

const Counter = ({
  type,
  count,
  current,
  setDetails,
  details,
}: {
  type: string;
  count: number;
  current: details;
  setDetails: any;
  details: Array<details>;
}) => {
  const CountButton = styled(Button)({
    borderColor: "#b8d9ff",
    color: "primary",
    minWidth: "40px",
  });
  const [addButton, setAddButton] = useState(false);
  const [removeButton, setRemoveButton] = useState(false);
  useEffect(() => {
    if (type === "adult") {
      if (count === 5) {
        setAddButton(true);
      } else {
        setAddButton(false);
      }
      if (count === 1) {
        setRemoveButton(true);
      } else {
        setRemoveButton(false);
      }
    } else {
      if (count === 3) {
        setAddButton(true);
      } else {
        setAddButton(false);
      }
      if (count === 0) {
        setRemoveButton(true);
      } else {
        setRemoveButton(false);
      }
    }
    if (current.room.adult + current.room.children.length === 5) {
      setAddButton(true);
    }
  }, [count, type, current.room.adult, current.room.children.length]);

  const add = () => {
    if (type === "adult") {
      setDetails(
        details.map((detail) => {
          if (detail.id === current.id) {
            return {
              ...detail,
              room: { ...detail.room, adult: detail.room.adult + 1 },
            };
          } else {
            return detail;
          }
        })
      );
    } else {
      setDetails(
        details.map((detail) => {
          if (detail.id === current.id) {
            return {
              ...detail,
              room: {
                ...detail.room,
                children: [
                  ...detail.room.children,
                  { id: detail.room.children.length, age: 8 },
                ],
              },
            };
          } else {
            return detail;
          }
        })
      );
    }
  };
  const remove = () => {
    if (type === "adult") {
      setDetails(
        details.map((detail) => {
          if (detail.id === current.id) {
            return {
              ...detail,
              room: { ...detail.room, adult: detail.room.adult - 1 },
            };
          } else {
            return detail;
          }
        })
      );
    } else {
      setDetails(
        details.map((detail) => {
          if (detail.id === current.id) {
            return {
              ...detail,
              room: {
                ...detail.room,
                children: detail.room.children.filter(
                  (child) => child.id !== detail.room.children.length - 1
                ),
              },
            };
          } else {
            return detail;
          }
        })
      );
    }
  };

  return (
    <div className="counter">
      <CountButton
        className="counterBtn"
        variant="outlined"
        onClick={remove}
        disabled={removeButton}
      >
        <RemoveIcon />
      </CountButton>
      <div className="count">{count}</div>
      <CountButton
        className="counterBtn"
        variant="outlined"
        onClick={add}
        disabled={addButton}
      >
        <AddIcon />
      </CountButton>
    </div>
  );
};

export default Counter;
