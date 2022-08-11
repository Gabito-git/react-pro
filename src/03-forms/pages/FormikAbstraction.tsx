import { Formik, Form, } from 'formik';
import * as Yup from 'yup';

import {MyCheckbox, MySelect, MyTextInput} from '../components';
  
import '../styles/styles.css';

/**
 *   El componente Formik provee via un context interno,
 *    todo lo que provee el useFormik ( handleChange, chandleSubmit, etc )
 *    a sus componentes hijos (Form, Field)
 */

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email:'',
          terms: false,
          jobType: ''
        }}
        onSubmit={ (values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string()
                         .max(15, 'Debe tener 15 caracteres o menos')
                         .required('Requerido'),
            lastName: Yup.string()
                         .max(15, 'Debe tener 15 caracteres o menos')
                         .required('Requerido'),
            email: Yup.string()
                      .email('Ingrese un correo válido')
                      .required('Requerido'),
            terms: Yup.boolean()
                      .oneOf([true], 'Debe aceptar las condiciones'),
            jobType: Yup.string()
                        .notOneOf(['it-jr'], 'Esta opción no es permitida')
                        .required('Requerido')  
          })
        }
      >

        {
          () => (
            <Form>
              
              <MyTextInput 
                name="firstName"
                label="First Name"
                placeholder="Gabriel"
              />

              <MyTextInput 
                name="lastName"
                label="Last Name"
                placeholder="Arevalo"
              />

              <MyTextInput 
                name="email"
                label="Email Address  "
                placeholder="Gabo@gabo.com"
                type="email"
              />
      
              <MySelect name="jobType" label="Job Type">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
              </MySelect>

              <MyCheckbox label="Terms and conditions" name="terms"/>

              <button type="submit"> Submit </button>
      
            </Form>
          )
        }

      </Formik>

     

    </div>
  )
}

export default FormikAbstraction