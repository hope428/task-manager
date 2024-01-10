import { useState } from "react";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import classes from "./MainHeader.module.css"




export default function Sidebar(){
    return (
        <div>
            <BsFillGrid1X2Fill />
            <FaRegCalendarAlt />
            <MdAutoGraph />
        </div>
    )
}