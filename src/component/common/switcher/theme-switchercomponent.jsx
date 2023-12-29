import { useTheme } from "../../../themeContext"
import { Form } from "react-bootstrap"
const ThemeSwitch =()=>{
    const {isDarkTheme, toogleTheme} = useTheme()
    return(<>
    <Form.Check
    type="switch"
    checked={isDarkTheme}
    onChange={toogleTheme}
    id="custom-switch"
    label="Light Theme" 
    style={{ color: !isDarkTheme ? "white" : "black" }}
    />
    </>)
}
export default ThemeSwitch;