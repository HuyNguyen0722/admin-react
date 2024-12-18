import classNames from "classnames/bind";
import React, { useContext } from "react";
import styles from './navbar.module.scss'
import { IoMdSearch } from "react-icons/io";
import { MdLanguage, MdOutlineDarkMode, MdOutlineFullscreenExit } from "react-icons/md";
import { BiComment } from "react-icons/bi";
import { IoListOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { DarkModeContext } from '../../context/darkModeContext'
const cx = classNames.bind(styles)
function Navbar() {

    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className={cx("navbar")}>
            <div className={cx("wrapper")}>
                <div className={cx("search")}>
                    <input type="text" placeholder="Search..." />
                    <IoMdSearch />
                </div>
                <div className={cx("items")}>
                    <div className={cx("item")}>
                        <MdLanguage className={cx("icon")} />
                        <span>English</span>
                    </div>
                    <div className={cx("item")}>
                        <MdOutlineDarkMode className={cx("icon")} onClick={() => dispatch({ type: "TOGGLE" })} />
                    </div>
                    <div className={cx("item")}>
                        <MdOutlineFullscreenExit className={cx("icon")} />
                    </div>
                    <div className={cx("item")}>
                        <IoIosNotificationsOutline className={cx("icon")} />
                        <div className={cx("counter")}>1</div>
                    </div>
                    <div className={cx("item")}>
                        <BiComment className={cx("icon")} />
                        <div className={cx("counter")}>2</div>
                    </div>
                    <div className={cx("item")}>
                        <IoListOutline className={cx("icon")} />
                    </div>
                    <div className={cx("item")}>
                        <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className={cx("avatar")} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;