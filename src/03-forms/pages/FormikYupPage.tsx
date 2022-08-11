import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

/**
 * El touched me indica si el campo ha sido tocado.
 *  De esta manera, lo podemos usar para que el error 
 *  solo se muestre si el campo ya ha sido tocado. Para
 *  emplearlo, se debe definir tambien el onBlur.
 * 
 * El getFieldProps, establece en el input, las propiedades
 *  tales como onBlur = {handleOnBlur}, onChange={ handleOnchange }
 *  el name, el value
 *  
 */

export const FormikYupPage = () => {

  const {  handleSubmit, errors, touched, getFieldProps } = useFormik({
      initialValues:{
        firstName: '',
        lastName: '',
        email:''
      },
      onSubmit: values => console.log(values),
      validationSchema: Yup.object({
        firstName: Yup.string()
                     .max(15, 'Debe tener 15 caracteres o menos')
                     .required('Requerido'),
        lastName: Yup.string()
                     .max(15, 'Debe tener 15 caracteres o menos')
                     .required('Requerido'),
        email: Yup.string()
                  .email('Ingrese un correo válido')
                  .required('Requerido')
      })
    }
  )

  return (
    <div>
      <h1>Formik Yup</h1>

      <form onSubmit={ handleSubmit } noValidate>
        <label htmlFor='firstName'>First Name</label>
        <input {...getFieldProps('firstName')} />

        {touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

        <label htmlFor='lastName'>Last Name</label>
        <input {...getFieldProps('lastName')}/>

        {touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

        <label htmlFor='email'>Email Address</label>
        <input type="email" {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{ errors.email }</span>}

        <button type="submit"> Submit </button>

      </form>

    </div>
  )
}

export default FormikYupPage