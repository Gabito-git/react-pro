
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>
      
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1:'',
          password2:''
        }}
        onSubmit={ (values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
                     .min(2, 'Debe tener al menos 2 caracteres')
                     .max(15, 'Debe tener máximo 15 caracteres')
                     .required('Requerido'),
            email: Yup.string()
                      .email('Ingrese un correo válido')
                      .required('Requerido'),
            password1: Yup.string()
                          .min(6, 'Debe tener mínimo 6 caracteres')
                          .required('Requerido'),
            password2: Yup.string()
                          .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                          .required('Requerido')
          })
        }
      >
        {
          (formik) => (
            <Form >
              <MyTextInput 
                name="name"
                label="Nombre"
                placeholder="Name"
              />

             <MyTextInput 
                name="email"
                label="Email"
                placeholder="Email"
                type="email"
              />

              <MyTextInput 
                name="password1"
                label="Password"
                type="password"
                placeholder="Password"
              />

              <MyTextInput 
                name="password2"
                label="Repeat Password"
                type="password"
                placeholder="Repeat password"
              />

              <button type="submit">Create</button>

              <button 
                type="button"
                onClick={ formik.handleReset}
              >Reset Form</button>
            </Form>
          )
        }

      </Formik>


      
    </div>
  )
}

export default RegisterFormikPage