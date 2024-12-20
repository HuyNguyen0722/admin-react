import React, { useContext } from 'react'
import classNames from 'classnames/bind'
import styles from './sidebar.module.scss'
import { Link } from 'react-router-dom'
import { MdDashboard, MdProductionQuantityLimits, MdOutlineDeliveryDining, MdHealthAndSafety, MdLogout } from "react-icons/md";
import { FaUser, FaRegUserCircle } from "react-icons/fa";
import { AiFillCustomerService } from "react-icons/ai";
import { IoIosStats, IoIosNotificationsOutline } from "react-icons/io";
import { RiFileHistoryLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { DarkModeContext } from '../../context/darkModeContext'

const cx = classNames.bind(styles)
const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext)

  const menuItems = [
    {
      title: 'Main',
      list: [
        {
          title: 'Dashboard',
          href: '/',
          icon: <MdDashboard />
        }
      ]
    },
    {
      title: 'Lists',
      list: [
        {
          title: 'Users',
          href: '/users',
          icon: <FaUser />
        },
        {
          title: 'Products',
          href: '/products',
          icon: <MdProductionQuantityLimits />
        },
        {
          title: 'Orders',
          href: '/order',
          icon: <AiFillCustomerService />
        },
        {
          title: 'Delivery',
          href: '/delivery',
          icon: <MdOutlineDeliveryDining />
        },
      ],
    },
    {
      title: 'Useful',
      list: [
        {
          title: 'Stats',
          href: '/users',
          icon: <IoIosStats />
        },
        {
          title: 'Notifications',
          href: '/products',
          icon: <IoIosNotificationsOutline />
        }
      ],
    },
    {
      title: 'Service',
      list: [
        {
          title: 'System Health',
          href: '/users',
          icon: <MdHealthAndSafety />
        },
        {
          title: 'Logs',
          href: '/products',
          icon: <RiFileHistoryLine />
        },
        {
          title: 'Settings',
          href: '/products',
          icon: <CiSettings />
        }
      ],
    },
    {
      title: 'User',
      list: [
        {
          title: 'Profile',
          href: '/users',
          icon: <FaRegUserCircle />
        },
        {
          title: 'Logout',
          href: '/products',
          icon: <MdLogout />
        }
      ],
    }
  ]

  return (
    <div className={cx('container')}>
      <div className={cx("container-top")}>
        <span className={cx("logo")}>Admin</span>
      </div>
      <hr />
      <div className={cx("container-center")}>
        <ul className={cx("container-list")}>
          {menuItems.map((item) => (
            <li key={item.title}>
              <span className={cx('menu-title')}>{item.title}</span>
              <ul className={cx('sub-menu')}>
                {item.list.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className={cx('submenu-link')}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className={cx("container-bottom")}>
        <div className={cx("colorOption")} onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className={cx("colorOption")} onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  )
}

export default Sidebar
