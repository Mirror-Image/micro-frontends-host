import ReduxProviderWrapper from 'remoteStore/Wrapper'
import { AppRouter } from 'pages/AppRouter/AppRouter'

import './App.css'

const App = () => (
  <>
    <ReduxProviderWrapper>
      <AppRouter />
    </ReduxProviderWrapper>
  </>
)

export default App
