
import classNames from 'classnames/bind'
import styles from './home.module.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const cx = classNames.bind(styles)

function Home() {
    return ( 
        <div className={cx("content")}>
            <Sidebar/>
            <div className={cx("container")}>
                <Navbar/>
            </div>
        </div>
     );
}

export default Home;