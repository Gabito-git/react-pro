import { ErrorMessage, useField } from "formik";

/**
 * El field tiene las propiedades onBlur, onChange,
 *  value, name   
 */

interface Props{
  label: string;
  name: string;
  [x: string]: any;
}

export const MySelect = ({label, ...props}: Props) => {

  const [field, meta] = useField( props );

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <select {...field}{...props}/>
      <ErrorMessage name={ props.name } component="span" className="error"/>

      {/* {
        meta.touched && meta.error && (
          <span className="error">{ meta.error }</span>
        )
      } */}
    </>
  )
}
