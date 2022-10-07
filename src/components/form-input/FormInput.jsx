import React from 'react'

function FormInput({label, ...inputProps}) {
  return (
<>
<label>{label}</label>
<input {...inputProps}/>
</>
   
  )
}

export default FormInput