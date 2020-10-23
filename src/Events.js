import React from "react";
import "./Events.css";
import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
function Events() {
  return (
    <div className="events">

        <img
          src="https://www.gstatic.com/companion/icon_assets/calendar_2x.png"
          alt=""
        />
        <img
          src="https://www.gstatic.com/companion/icon_assets/keep_2x.png"
          alt=""
        />
        <img
          src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png"
          alt=""
        />

        <AddIcon />
        <KeyboardArrowRightIcon />
      
    </div>
  );
}

export default Events;
