import ContextProvider from './components/ContextProvider'
import RoutesPage from './components/RoutesPage'

function App() {

  return (
    <ContextProvider>
      <RoutesPage/>
    </ContextProvider>
  )
}

export default App
