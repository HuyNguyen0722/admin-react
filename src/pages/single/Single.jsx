import classNames from "classnames/bind";
import styles from './single.module.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from "../../components/chart/Chart";
import Tables from "../../components/table/Table";
const cx = classNames.bind(styles)


function Single() {
    return (
        <div className={cx("single")}>
            <Sidebar />
            <div className={cx("singleContainer")}>
                <Navbar />
                <div className={cx("top")}>
                    <div className={cx("left")}>
                        <div className={cx("editButton")}>Edit</div>
                        <h1 className={cx("title")}>Information</h1>
                        <div className={cx("item")}>
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                className={cx("itemImg")}
                            />
                            <div className={cx("details")}>
                                <h1 className={cx("itemTitle")}>Jane Doe</h1>
                                <div className={cx("detailItem")}>
                                    <span className={cx("itemKey")}>Email:</span>
                                    <span className={cx("itemValue")}>janedoe@gmail.com</span>
                                </div>
                                <div className={cx("detailItem")}>
                                    <span className={cx("itemKey")}>Phone:</span>
                                    <span className={cx("itemValue")}>+1 2345 67 89</span>
                                </div>
                                <div className={cx("detailItem")}>
                                    <span className={cx("itemKey")}>Address:</span>
                                    <span className={cx("itemValue")}>
                                        Elton St. 234 Garden Yd. NewYork
                                    </span>
                                </div>
                                <div className={cx("detailItem")}>
                                    <span className={cx("itemKey")}>Country:</span>
                                    <span className={cx("itemValue")}>USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("right")}>
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </div>
                </div>
                <div className={cx("bottom")}>
                    <h1 className={cx("title")}>Last Transactions</h1>
                    <Tables />
                </div>
            </div>
        </div>
    );
}

export default Single;