import './assets/scripts/service'
import './app.scss'

import Form from './components/Form'
import History from './components/History'

function App() {
  return (
    <>
      <header>
        <h1>Get value</h1>
      </header>
      <main>
        <Form />
        <History />
      </main>
    </>
  )
}

export default App
