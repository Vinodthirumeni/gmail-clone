import React from "react";
import "./Mails.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AttachmentIcon from "@material-ui/icons/Attachment";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
import DeleteIcon from "@material-ui/icons/Delete";
import MailIcon from "@material-ui/icons/Mail";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

function Mails() {
  function truncate(str, n) {
    return str?.length > n ? str?.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="mails">
      <div className="mails__left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <p>Sender Name</p>
      </div>

      <div className="mails__middle">
        <p>Vinod you are awesome - </p>
        <p className="mails__middle_mailText">
          {truncate(
            "Hi vinod we are Hi vinod we are Hi vinod we are Hi vinod we are Hi vinod Hi vinod we are Hi vinod Hi vinod we are Hi vinod",
            73
          )}
        </p>
      </div>

      <div className="mails__right">
        <div className="mails__rightMain">
          <span>
            <AttachmentIcon />
          </span>
          <p>Sep 21</p>
        </div>

        <div className="mails__rightChild">
          <AssignmentReturnedIcon />
          <DeleteIcon />
          <MailIcon />
          <WatchLaterIcon />
        </div>
      </div>
    </div>
  );
}

export default Mails;
