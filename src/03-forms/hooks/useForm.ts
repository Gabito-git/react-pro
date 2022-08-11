import { useState, ChangeEvent } from 'react';

const useForm = <T>(initState: T) => {

  const [formData, setFormData] = useState(initState);

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData( values => ({
      ...values,
      [e.target.name]: e.target.value,
    }) )
  }

  const resetForm = () => {
    setFormData({...initState});
  }

  const isValidEmail = ( email: string ) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  return{
    ...formData,
    formData,

    handleOnchange,
    resetForm,
    isValidEmail
  }

}

export default useForm;