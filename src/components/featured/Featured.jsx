import classNames from "classnames/bind";
import styles from './featured.module.scss'
import { MdMoreVert } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const cx = classNames.bind(styles)

function Featured() {
    return (
        <div className={cx("featured")}>
            <div className={cx("top")}>
                <h1 className={cx("title")}>Total Revenue</h1>
                <MdMoreVert fontSize="large" />
            </div>
            <div className={cx("bottom")}>
                <div className={cx("featuredChart")}>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </div>
                <p className={cx("title")}>Total sales made today</p>
                <p className={cx("amout")}>$420</p>
                <p className={cx("desc")}>Previous transactions processing. Last payments may not be included</p>
                <div className={cx("summary")}>
                    <div className={cx("item")}>
                        <div className={cx("itemTitle")}>Target</div>
                        <div className={cx("itemResult", "negative")}>
                            <IoIosArrowDown fontSize="small"/>
                            <div className={cx("resultAmount")}>$12.4k</div>
                        </div>
                    </div>
                    <div className={cx("item")}>
                        <div className={cx("itemTitle")}>Last Week</div>
                        <div className={cx("itemResult", "positive")}>
                            <IoIosArrowUp fontSize="small"/>
                            <div className={cx("resultAmount")}>$12.4k</div>
                        </div>
                    </div>
                    <div className={cx("item")}>
                        <div className={cx("itemTitle")}>Last Month</div>
                        <div className={cx("itemResult", "positive")}>
                            <IoIosArrowUp fontSize="small"/>
                            <div className={cx("resultAmount")}>$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;