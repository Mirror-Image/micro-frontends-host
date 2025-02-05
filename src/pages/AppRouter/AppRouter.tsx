import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { APP_ROUTES } from 'constants/routes'
import { AppLayout } from 'components/AppLayout/AppLayout'

import { NotFoundPage } from '../NotFoundPage/NotFoundPage'

export const AppRouter = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        path: APP_ROUTES.root,
        element: <AppLayout />,
        children: [
          {
            index: true,
            async lazy() {
              const { default: RemoteA } = await import('remoteA/App')

              return {
                Component: RemoteA,
              }
            },
          },
          {
            path: APP_ROUTES.products.root,
            async lazy() {
              const { default: RemoteB } = await import('remoteB/App')

              return {
                Component: RemoteB,
              }
            },
          },
        ],
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ])}
  />
)
