import React from 'react'
import styles from './list.module.scss'
import classNames from 'classnames/bind'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'

const cx = classNames.bind(styles)
const List = () => {
  return (
    <div className={cx("list")}>
      <Sidebar />
      <div className={cx("listContainer")}>
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List
