
import { Form, Formik } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';
import { resourceLimits } from 'worker_threads';

const initialValues: {[x:string]: any} = {}
const requiredFields: {[x:string]: any} = {}

for( let input of formJson ){
  initialValues[ input.name ] = input.value;

  if(!input.validations) continue;

  let schema = Yup.string()

  for(const rule of input.validations){
    if(rule.type === 'required'){
      schema = schema.required('Este campo es requerido')
    }
    // ... otras reglas...

    if(rule.type === 'minLength'){
      schema = schema.min( rule.value! || 2, `Minimo de ${ rule.value } caracteres` )
    }

    if(rule.type === "email"){
      schema = schema.email('Por favor ingrese un correo válido');
    }

  }

  requiredFields[input.name] = schema;

}

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={ initialValues }
        onSubmit={values => console.log(values) }
        validationSchema={Yup.object( requiredFields )}
      >
        {
          () => (
            <Form noValidate>

              {
                formJson.map( ({ name, placeholder, label, type, options }) => {

                  if(['password','email', 'input'].includes(type)){
                    return (
                      <MyTextInput 
                        key={ name }
                        name={ name }
                        placeholder={ placeholder }
                        label={ label }
                        type={ type as any }
                      />
                    )
                  }else if( type ==='select' ){
                    return(
                      <MySelect 
                        key={name} 
                        name={ name } 
                        label={ label }
                      >
                        <option value="">Pick something</option>
                        {
                          options?.map( ({ id, label } ) => (
                            <option 
                              key={ id } 
                              value={ id }
                            >{ label }</option>
                          ) )
                        }
                      </MySelect>
                    )
                  }

                  return <span key="name">Tipo: { type } no es soportado</span>
                } )
              }

              <button type="submit">Submit</button>
            </Form>
           
          )
        }
      </Formik>
    </div>
  )
}

export default DynamicForm