import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { FaCloudUploadAlt } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from './new.module.scss'

const cx = classNames.bind(styles)

function New({ inputs, title }) {

    const [file, setFile] = useState("")

    return (
        <div className={cx("new")}>
            <Sidebar />
            <div className={cx("newContainer")}>
                <Navbar />
                <div className={cx("top")}>
                    <h1>{title}</h1>
                </div>
                <div className={cx("bottom")}>
                    <div className={cx("left")}>
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className={cx("right")}>
                        <form>
                            <div className={cx("formInput")}>
                                <label htmlFor="file">
                                    Image: <FaCloudUploadAlt className={cx("icon")} />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {inputs.map((input) => (
                                <div className={cx("formInput")} key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default New;