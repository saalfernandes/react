import Painel from "./pages/painel"
import Login from "./pages/login"
import { useContext, userState} from 'react'
import { AutenticacaoContext} from './context/AutenticacaoContext'

function App() {
  const {logado} = useContext(AutenticacaoContext)

if(logado) {
  return <Painel />
}
return <Login />
}

export default App