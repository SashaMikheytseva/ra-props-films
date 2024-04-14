import './App.css'
import { Stars } from './Stars/Stars'

function App() {
  

  return (
    <>
      <Stars count={5} />
      <Stars count={3} />
      <Stars count={6} />
      <Stars count={1} />
      <Stars count={4} />
      <Stars count={true} />   
      <Stars count={'gfdgfd'} />
    </>
  )
}

export default App
