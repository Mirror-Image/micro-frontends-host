import {Link} from 'react-router-dom'
import {APP_ROUTES} from '../../constants/routes.ts'

import styles from './NotFoundPage.module.css'

export const NotFoundPage = () => (
  <div className={styles.container}>
    <h1>404 Page Not Found</h1>
    <Link to={APP_ROUTES.root}>
      Click here to get back to the main page
    </Link>
  </div>
)
