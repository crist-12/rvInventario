import React, {useState} from "react"
import "../App.css"
import './Styles.css'
import styled from 'styled-components'
import bgImg from '../assets/bgImg.png'
import logo from '../assets/rv.png';
import { FormLabel, Input, Button, Icon, IconButton } from "@mui/material"
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
/* const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
`

const HalfContainer = styled.div`
    display: flex;
`

const Semicircle = styled.image`
    width: 250px;
    height: 250px;
    background: green;
    border-radius: 0 0 100% 0;
`


const Input = styled.input`
    flex: 1;
`
 */
const Login = () => {

const [showPassword, setShowPassword] = useState(false);
const [password, setPassword] = useState("");
const [username, setUsername] = useState("");

const onChangePassword = ({currentTarget}) => {
    setPassword(currentTarget.value);
}

const onChangeUser = ({currentTarget}) => {
    setUsername(currentTarget.value);
}

const switchShowState = () => {
    setShowPassword(!showPassword);
}

    return (
        <Container>
            
            <Wrapper>
            <FormDiv>
                <TitleRow>
                        <ImageLogo></ImageLogo>
                        <h1>Sistema de Control de Inventario</h1>
                </TitleRow>
               <DivForm>
                    <Form>
                        <FormLabel>Nombre de Usuario</FormLabel>
                        <Input placeholder="Ingrese su nombre de usuario" type="text" style={{"width": "80%", "marginTop": "20px"}} onChange={onChangeUser} value={username}/>
                        <FormLabel style={{marginTop: "40px"}}>Contraseña</FormLabel>
                        <div style={{flex: 1, width: "100%"}}>
                            <Input placeholder="Ingrese su contraseña" type= {showPassword ? 'text' : 'password'} style={{"width": "73%", "marginTop": "20px", "marginRight": "20px"}} onChange={onChangePassword} value={password}/>
                            <IconButton aria-label="delete" color = {showPassword ? "primary": "default"} onClick={switchShowState}>
                           {
                               showPassword ?
                               <RemoveRedEyeIcon/>
                               :
                               <VisibilityOffIcon/>
                           } 
                            </IconButton>
                        </div>
                        <div>
                  
                        </div>
                    </Form>
               </DivForm>
            </FormDiv>
            </Wrapper>
        </Container>

    )
}


const Container = styled.div`
    background: #eefcff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    background-image: url(${bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
` 

const FormDiv = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: white;
    border-radius: 20px;
    opacity: 0.9;
`

const TitleRow = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ImageLogo = styled.div`
    background-image: url(${logo});
    background-position: center;
    display: flex;
    width: 50%;
    height: 80%;
    background-size: contain;
    background-repeat: no-repeat;
    object-fit: contain;
    justify-content: center;
    align-items: center;
    margin-top:15px;
`

const DivForm = styled.div`
    display: flex;
    flex: 3;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Form = styled.form`
    width: 80%;
    height: 80%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputText = styled.input`
  color: #000;
  cursor: pointer;
  margin-bottom: 0;
  width: 80%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  border-bottom: 1px solid;
  margin-horizontal: 5px;
  &:active {
    background-color: #00ff7f;
  }
`




export default Login