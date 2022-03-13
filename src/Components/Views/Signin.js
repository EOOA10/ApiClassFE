import Page from '../UX/Page/Page';
import Input from '../UX/Forms/Input';
import { PrimaryButton, SecondaryButton } from '../UX/Forms/Button';

const Signin = ({ txtCorreoValue, 
                 txtPasswordValue, 
                 onChange: onChangeHandler, 
                 errorTxtCorreo, 
                 errorPassword }) => {
    return(
        <Page header={(<h2>Crear Cueta</h2>)}>
            <section>
                <Input
                 label="Correo Electronico"
                 type="text"
                 name="txtCorreo"
                 placeholder="Ingrese Su Correo Electronico"
                 value={txtCorreoValue}
                 error={errorTxtCorreo}
                 onChange={onChangeHandler}
                />

                <Input
                 label="Password"
                 type="password"
                 name="txtPassword"
                 placeholder="Ingrese Su Password"
                 value={txtPasswordValue}
                 info="Minimo 8 caracteres, una mayuscula, una minuscula, un numero y un simbolo"
                 error={errorPassword}
                 onChange={onChangeHandler}
                />

                <PrimaryButton onClick={()=>{alert('Clicked On Me')}}>
                    Crear Cuenta
                </PrimaryButton>
                <SecondaryButton>
                    Tengo Cuenta
                </SecondaryButton>
            </section>
        </Page>
    );
}

export default Signin;