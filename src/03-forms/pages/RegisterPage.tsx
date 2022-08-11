
import { FormEvent } from 'react';
import useForm from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

  const { formData, name,resetForm,
      password1, password2, isValidEmail,
      email, handleOnchange } = useForm(
    {
      name:'',
      email:'',
      password1:'',
      password2:''
    }
  );

  // const { name, email, password1, password2 } = formData;

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={ onSubmit }>
        <input
          placeholder="Name" 
          value ={ name }
          name="name"
          className={ `${ name.trim().length <=0 && 'has-error' }` }
          onChange={ handleOnchange }
        />
        { name.trim().length <=0 && <span>Este campo es obligatorio</span>}

        <input
          type="email"
          placeholder="Email" 
          name="email"
          value={ email }
          className={ `${ !isValidEmail(email) && 'has-error' }` }
          onChange={ handleOnchange }
        />
        { !isValidEmail(email) && <span>El email no es válido</span>}

        <input
          type="password"
          placeholder="Password" 
          name="password1"
          value={ password1 }
          onChange={ handleOnchange }
        />
        { password1.trim().length <=0 && <span>Este campo es obligatorio</span>}
        { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener al menos 6 caracteres</span>}
        <input
          type="password"
          name="password2"
          placeholder="Repeat Password" 
          value={ password2 }
          onChange={ handleOnchange }
        />
        { password2.trim().length <=0 && <span>Este campo es obligatorio</span>}
        { password2.trim().length > 0 && password2 !== password1 && <span>Las contraseñas deben ser iguales</span>}

        <button type="submit">Create</button>

        <button 
          type="button"
          onClick={ resetForm }
        >Reset Form</button>
      </form>
    </div>
  )
}

export default RegisterPage