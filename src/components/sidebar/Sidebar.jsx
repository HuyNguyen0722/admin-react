import React from 'react'
import classNames from 'classnames/bind'
import styles from './sidebar.module.scss'

const cx = classNames.bind(styles)
const Sidebar = () => {

    const menuItems = [
        {
            title: 'Home',
            icon: 'home',
            path: '/'
        }
    ]

  return (
    <div className={cx("container")}>

    </div>
  )
}

export default Sidebar
