import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaRegCalendarAlt, FaRegHeart } from "react-icons/fa";
import { MdAutoGraph, MdOutlineMessage } from "react-icons/md";
import classes from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <>
      <div className={classes.sidebar}>
        <span><BsFillGrid1X2Fill /></span>
        <span><MdOutlineMessage /></span>
        <span><FaRegCalendarAlt /></span>
        <span><FaRegHeart /></span>
        <span><MdAutoGraph /></span>
      </div>
    </>
  );
}
