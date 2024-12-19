import classNames from "classnames/bind";
import styles from './login.module.scss'


const cx = classNames.bind(styles)

function Login() {
    return (
        <div className={cx("container")}>
            Login-page
        </div>
    );
}

export default Login;