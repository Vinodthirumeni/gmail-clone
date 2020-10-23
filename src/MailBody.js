import React from "react";
import "./MailBody.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import Mails from "./Mails";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import ReactTooltip from "react-tooltip";

function MailBody() {
  const mails = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div className="mailBody">
      <div className="mailBody__header">
        <div className="mailBody__headerRight">
          <CheckBoxOutlineBlankIcon data-tip="Select" />
          <span>
            <ArrowDropDownIcon data-tip="Select" />
          </span>
          <RefreshIcon data-tip="Refresh" />
          <MoreVertIcon data-tip="More" />
        </div>
        <div className="mailBody__headerLeft">
          <p>1-100 of 125</p>
          <KeyboardArrowLeftIcon data-tip="Newer" />
          <KeyboardArrowRightIcon data-tip="Older" />
          <KeyboardIcon data-tip="Input tools" />
          <ArrowDropDownIcon data-tip="Select input tool" />
        </div>
        <ReactTooltip />
      </div>

      {mails.map(() => (
        <Mails />
      ))}
    </div>
  );
}

export default MailBody;
