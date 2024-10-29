import './App.css'
import { AppRouter } from './pages/AppRouter/AppRouter.tsx'
import ReduxProviderWrapper from 'remoteStore/Wrapper'

const App = () => (
  <>
    <ReduxProviderWrapper>
      <AppRouter />
    </ReduxProviderWrapper>
  </>
)

export default App
