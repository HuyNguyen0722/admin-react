
import classNames from 'classnames/bind'
import styles from './home.module.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Tables from '../../components/table/Table';

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx("content")}>
            <Sidebar />
            <div className={cx("container")}>
                <Navbar />
                <div className={cx("widgets")}>
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className={cx("charts")}>
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                <div className={cx("listContainer")}>
                    <div className={cx("listTitle")}>
                        Latest Transactions
                    </div>
                    <Tables />
                </div>
            </div>
        </div>
    );
}

export default Home;