import React, { useState } from "react";
import "./Sidebar.css";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import LabelIcon from "@material-ui/icons/Label";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import ForumIcon from "@material-ui/icons/Forum";
import CancelScheduleSendIcon from "@material-ui/icons/CancelScheduleSend";
import MailIcon from "@material-ui/icons/Mail";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from "@material-ui/icons/Settings";
import AddIcon from "@material-ui/icons/Add";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import Collapse from "@material-ui/core/Collapse";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import PeopleIcon from "@material-ui/icons/People";
import InfoIcon from "@material-ui/icons/Info";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ReactTooltip from "react-tooltip";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickCategory = () => {
    setOpenCategory(!openCategory);
  };
  return (
    <div className="sideBar">
      <div className="sideBar__mainComponents">
        <div className="sideBar__mainComponentsAttrsCompose">
          <AddIcon />
          <p>Compose</p>
        </div>

        <div className="sideBar__mainComponentsAttrsContainer">
          <div data-tip="Inbox" className="sideBar__mainComponentsAttrs active">
            <InboxIcon />
            <p>Inbox</p>
          </div>
          <div data-tip="Starred" className="sideBar__mainComponentsAttrs">
            <StarIcon />
            <p>Starred</p>
          </div>
          <div data-tip="Snoozed" className="sideBar__mainComponentsAttrs">
            <WatchLaterIcon />
            <p>Snoozed</p>
          </div>
          <div data-tip="Sent" className="sideBar__mainComponentsAttrs">
            <SendIcon />
            <p>Sent</p>
          </div>
          <div data-tip="Drafts" className="sideBar__mainComponentsAttrs">
            <InsertDriveFileIcon />
            <p>Drafts</p>
          </div>
          <div
            data-tip="[Imap]/Drafts"
            className="sideBar__mainComponentsAttrs"
          >
            <LabelIcon />
            <p>[Imap]/Drafts</p>
          </div>
          <div
            data-tip={open ? "Less" : "More"}
            className="sideBar__mainComponentsAttrs"
            onClick={handleClick}
          >
            {open ? <ExpandLess /> : <ExpandMore />}
            {open ? <p>Less</p> : <p>More</p>}
          </div>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div data-tip="Important" className="sideBar__mainComponentsAttrs">
              <LabelImportantIcon />
              <p>Important</p>
            </div>
            <div data-tip="Chats" className="sideBar__mainComponentsAttrs">
              <ForumIcon />
              <p>Chats</p>
            </div>
            <div data-tip="Scheduled" className="sideBar__mainComponentsAttrs">
              <CancelScheduleSendIcon />
              <p>Scheduled</p>
            </div>
            <div data-tip="All Mail" className="sideBar__mainComponentsAttrs">
              <MailIcon />
              <p>All Mail</p>
            </div>
            <div data-tip="Spam" className="sideBar__mainComponentsAttrs">
              <ErrorIcon />
              <p>Spam</p>
            </div>
            <div data-tip="Trash" className="sideBar__mainComponentsAttrs">
              <DeleteIcon />
              <p>Trash</p>
            </div>
            <div
              className="sideBar__mainComponentsAttrs"
              onClick={handleClickCategory}
            >
              <span className="sideBar__mainComponentsAttrs_MainCollapse">
                {openCategory ? <ArrowRightIcon /> : <ArrowDropDownIcon />}
              </span>
              <LabelIcon />
              <p>Categories</p>
            </div>

            <Collapse
              in={openCategory}
              timeout="auto"
              unmountOnExit
              className="sideBar__mainComponentsAttrs_ChildCollapse"
            >
              <div data-tip="Social" className="sideBar__mainComponentsAttrs">
                <PeopleIcon />
                <p>Social</p>
              </div>
              <div data-tip="Updates" className="sideBar__mainComponentsAttrs">
                <InfoIcon />
                <p>Updates</p>
              </div>
              <div data-tip="Forum" className="sideBar__mainComponentsAttrs">
                <QuestionAnswerIcon />
                <p>Forum</p>
              </div>
              <div
                data-tip="Promotion"
                className="sideBar__mainComponentsAttrs"
              >
                <LocalOfferIcon />
                <p>Promotion</p>
              </div>
              <ReactTooltip />
            </Collapse>

            <div
              data-tip="Manage Label"
              className="sideBar__mainComponentsAttrs"
            >
              <SettingsIcon />
              <p>Manage Label</p>
            </div>
            <div
              data-tip="Create new label"
              className="sideBar__mainComponentsAttrs"
            >
              <AddIcon />
              <p>Create new label</p>
            </div>
            <ReactTooltip />
          </Collapse>
        </div>

        <div className="sideBar__mainComponentsAttrs__Meet">
          <p>Meet</p>
          <div
            data-tip="Start a meeting"
            className="sideBar__mainComponentsAttrs"
          >
            <VideocamIcon />
            <p>Start a meeting</p>
          </div>
          <div
            data-tip="Join a meeting"
            className="sideBar__mainComponentsAttrs"
          >
            <KeyboardIcon />
            <p>Join a meeting</p>
          </div>
        </div>

        <div className="sideBar__mainComponentsAttrs__hangouts__Container">
          <p>Hangouts</p>
          <div className="sideBar__mainComponentsAttrs__hangouts">
            <div className="sideBar__mainComponentsAttrs__hangouts__Right">
              <Avatar alt="Vinod" src="/static/images/avatar/1.jpg" />
              <p>Vinod</p>
              <ArrowDropDownIcon className="sideBar__mainComponentsAttrs__hangouts__Left" />
            </div>
            <AddIcon />
          </div>
        </div>

        <div className="sideBar__mainComponentsAttrs__hangouts__Chat">
          <p> No Recent Chat</p>
          <p className="sideBar__mainComponentsAttrs__hangouts__Chat_StartChat">
            {" "}
            Start New One{" "}
          </p>
        </div>

        <div className="sideBar__mainComponentsAttrs__Footer">
          <div className="sideBar__mainComponentsAttrs__FooterIcon">
            <PersonIcon />
            <DuoIcon />
            <PhoneIcon />
          </div>
        </div>
      </div>
      <ReactTooltip />
    </div>
  );
}

export default Sidebar;
