
import classNames from 'classnames/bind'
import styles from './home.module.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';

const cx = classNames.bind(styles)

function Home() {
    return ( 
        <div className={cx("content")}>
            <Sidebar/>
            <div className={cx("container")}>
                <Navbar/>
                <div className={cx("widgets")}>
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
            </div>
        </div>
     );
}

export default Home;