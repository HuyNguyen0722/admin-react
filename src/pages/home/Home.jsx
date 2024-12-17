
import classNames from 'classnames/bind'
import styles from './home.module.scss'
import Sidebar from '../../components/sidebar/Sidebar';

const cx = classNames.bind(styles)

function Home() {
    return ( 
        <div className={cx("content")}>
            <Sidebar/>
            <div className={cx("container")}>
                Container
            </div>
        </div>
     );
}

export default Home;