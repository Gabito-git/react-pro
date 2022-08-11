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

export const MyCheckbox = ({label, ...props}: Props) => {

  const [field, meta] = useField( {...props, type:'checkbox'} );

  return (
    <>
      <label>
        <input type="checkbox" {...field}{...props}/>
        { label }
      </label>
      <ErrorMessage name={ props.name } component="span" className="error"/>

      {/* {
        meta.touched && meta.error && (
          <span className="error">{ meta.error }</span>
        )
      } */}
    </>
  )
}
