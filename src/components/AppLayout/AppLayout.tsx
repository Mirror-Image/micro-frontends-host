import { NavLink, Outlet } from 'react-router-dom'

import styles from './AppLayout.module.css'
import { APP_ROUTES } from '../../constants/routes.ts'

export const AppLayout = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.logo}>
          Logo
        </p>
        <div className={styles.avatar}>
          MD
        </div>
      </div>
      <div className={styles.contentContainer}>
        <aside className={styles.sidebar}>
          <NavLink
            to={APP_ROUTES.root}
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to={APP_ROUTES.products.root}
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            Products
          </NavLink>
          <NavLink
            to={APP_ROUTES.clients.root}
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            Client
          </NavLink>
        </aside>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
