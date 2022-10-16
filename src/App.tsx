import { Button } from './components/Button/Button'
import { Heading } from './components/Heading/Heading'
import './styles/global.css'

export function App() {
  return (
    <div className="bg-gray-900 h-screen">
      <Heading>Hello World</Heading>

      <Button>
        Enviar
      </Button>
    </div>
  )
}