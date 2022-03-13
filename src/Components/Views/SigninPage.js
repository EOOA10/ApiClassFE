import Signin from './Signin';
import { useState } from 'react';

const SigninPage = ()=>{
    const [ txtCorreo, setTxtCorreo ] = useState('');
    const [txtPassword, setTxtPassword] = useState('');
    const onChangeHandler = ({target: { name, value }})=>{
        switch(name)
        {
            case 'txtCorreo':
                setTxtCorreo(value);
            break;

            case 'txtPassword':
                setTxtPassword(value);
            break;

            default:
            break;
        }
    }

    return (
        <Signin
            txtCorreoValue = {txtCorreo}
            txtPasswordValue = {txtPassword}
            onChange = {onChangeHandler}
            errortxtCorreo = ''
            errortxtPassword = ''
        />
    );
}

export default SigninPage;