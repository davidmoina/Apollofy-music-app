import { ButtonForm } from './components/user/input/button/ButtonForm'
import { Container } from './components/user/input/container/Container'
import { InputForm } from './components/user/input/input/InputForm'
import './sass/index.scss'

function App() {

  return (

    <Container>
      <h1>Login to your account</h1>
        <InputForm  placeholder='First Name' inputType='text' id='firstName'/>
        <InputForm  placeholder='Last Name' inputType='text' id='lastName'/>
        <InputForm  placeholder='Password' inputType='password' id='password'/>
        <ButtonForm />
    </Container>
    
  )
}

export default App
