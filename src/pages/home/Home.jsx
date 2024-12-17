
import classNames from 'classnames/bind'
import styles from './home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    return ( 
        <div className={cx("container")}>
            Homepage
        </div>
     );
}

export default Home;