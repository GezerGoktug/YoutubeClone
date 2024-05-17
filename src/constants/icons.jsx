import { AiOutlineMenu } from "react-icons/ai";
import { BiDislike, BiVideoPlus } from "react-icons/bi";
import { CgMusicNote, CgPlayList } from "react-icons/cg";
import { CiTrophy } from "react-icons/ci";
import { FaClock, FaHistory, FaMicrophone, FaVideo } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FiFilm } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import { IoIosHelpCircleOutline, IoMdSettings } from "react-icons/io";
import { IoGameControllerSharp, IoSearchOutline } from "react-icons/io5";

import { MdHomeFilled, MdKeyboardArrowDown, MdLiveTv, MdLocalFireDepartment, MdOutlineFlag, MdOutlineNotifications, MdOutlineThumbUp, MdSubscriptions, MdVerified } from "react-icons/md";
import { PiUserRectangle } from "react-icons/pi";
import { RiFeedbackLine, RiLightbulbLine } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";

export const icons ={
    navbar:{
        menu:<AiOutlineMenu/>,
        search:<IoSearchOutline />,
        microphone:<FaMicrophone />,
        notifications:<MdOutlineNotifications/>,
        video:<BiVideoPlus/>,
    },
    main: [
        {
            label: "Home",
            icon: <MdHomeFilled />,
            isTherePages:true,
        },
        {
            label: "Shorts",
            icon: <SiYoutubeshorts />
        },
        {
            label: "Subscriptions",
            icon: <MdSubscriptions />
        }
    ],
    personal: [
        {
            label: "Your channel",
            icon: <PiUserRectangle />
        },
        {
            label: "History",
            icon: <FaHistory />
        },
        {
            label: "Playlists",
            icon: <CgPlayList />
        },
        {
            label: "Your videos",
            icon: <FaVideo />
        },
        {
            label: "Watch later",
            icon: <FaClock />
        },
        {
            label: "Liked videos",
            icon: <MdOutlineThumbUp />
        }
    ],
    explore: [
        {
            label: "Trends",
            icon: <MdLocalFireDepartment />,
            isTherePages:true
        },
        {
            label: "Music",
            icon: <CgMusicNote />,
            isTherePages:true
        },
        {
            label: "Movies",
            icon: <FiFilm />,
            isTherePages:true
        },
        {
            label: "Live",
            icon: <MdLiveTv />,
            isTherePages:true,
        },
        {
            label: "News",
            icon: <ImNewspaper />,
            isTherePages:true,
        },
        {
            label: "Game",
            icon: <IoGameControllerSharp />,
            isTherePages:true
        },
        {
            label: "Sport",
            icon: <CiTrophy />,
            isTherePages:true
        },
        {
            label: "Education",
            icon: <RiLightbulbLine />,
            isTherePages:true
        },
    ],
    settings: [
        {
            label: "Settings",
            icon: <IoMdSettings />
        },
        {
            label: "Report history",
            icon: <MdOutlineFlag />
        },
        {
            label: "Help",
            icon: <IoIosHelpCircleOutline />
        },
        {
            label: "Send feedback",
            icon: <RiFeedbackLine />
        }
    ],
    other:{
        verified:<MdVerified/>,
        dislike:<BiDislike/>,
        xMark:<FaXmark/>,
        downArrow:<MdKeyboardArrowDown/>
    }
}