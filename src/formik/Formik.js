import {Formik,Form,Field,ErrorMessage, FieldArray, FastField} from 'formik'
import React from 'react'
import * as yup from 'yup'


const initialValues={
  username:'',
  email:'',
  channel:'',
  comments:'',
  address:'',
  social:{     //  nested object
    facebook:'',
    twitter:''
  },
  phonenumbers:['',''],
  phNumbers: [''],
  gender:''

}
const  onSubmit= (values,onSubmitProps) =>{
  console.log('values',values);
  onSubmitProps.setSubmitting(false)
}


// const validate= values => {
//   let errors = {}

//   if (!values.username) {
//     errors.username = " required";
//   }

//   if (!values.email) {
//     errors.email = " required";
//   } 
//   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   if (!values.channel) {
//     errors.channel = "required";
//   }

//   return errors;
  
// }
const validationSchema = yup.object().shape({
  username:yup.string()
          .min(5,'minimum 5 characters')
          .required('required!!'),
  email:yup.string()
          .email('invalid email')
          .required('required!!'),
  channel:yup.string()
          .required('required!!'),
  comments:yup.string()
          .required('required!!'),
  address:yup.string()
          .required('required!!'),
  social:yup.object().shape({
         facebook:yup.string()
          .required('required!!'),
        twitter:yup.string()
          .required('required!!'),
  }),
  phonenumbers: yup.array().of(
          yup.string()
          .required('required!!')
  ),
   gender: yup.string().required('Please select a gender'),

           
})

const Sormik = () => {

  // const formik =useFormik({
  //   initialValues,
  //   onSubmit,
  //   // validate,
  //   validationSchema
  // })

  return (
  <Formik  
  initialValues={initialValues} 
  onSubmit={onSubmit}
  validationSchema={validationSchema}

       >
        {formik => {
          return (
<Form autoComplete='off' >
    <div className='form-control'>
        <label>Username</label>
        <Field type="text"
              id='username'
              name='username'
        />
        <ErrorMessage name='username'>
          {errormsg => <p className='error'>{errormsg} </p>}
        </ErrorMessage>
      </div>
        <div className='form-control'>
        <label>Email</label>
        <Field type="email"
              id='Email'
              name='email'
              /* ...formik .getfiledprops('email')  this line helps....onchange & handleblur & values..this line replaces */
        />
        <ErrorMessage name='email'>
          {errormsg => <p className='error'>{errormsg} </p>}
        </ErrorMessage>
    
      </div>
      <div className='form-control'>
        <label>Channel</label>
        <Field type="text"
              id='Channel'
              name='channel'
        />
        <ErrorMessage name='channel'>
          {errormsg => <p className='error'>{errormsg} </p>}
        </ErrorMessage>
    
      </div>
      <div className='form-control'>
        <label>Comments</label>
        <Field as='textarea' 
              id='Comments'
              name='comments'
        />
        <ErrorMessage name='comments'>
          {errormsg => <p className='error'>{errormsg} </p>}
        </ErrorMessage>
      </div>
      <div className='form-control'>
        <label>Address</label>
       <FastField name='address'>
       {
        (props) => {
          console.log('field render');
          const {field,meta} =props
         
          return (
           <div> 
            <input id='address' type='text' {...field}/> 
            {meta.touched && meta.error?<p className='error'>{meta.error} </p>:null}
            </div>
          )
        }
       }
       </FastField>
      </div>
      <div className='form-control'>
        <label>Facebook</label>
        <Field type="text"
              id='facebook'
              name='social.facebook'
        />
        <ErrorMessage name='social.facebook'>
          {errormsg => <p className='error'>{errormsg} </p>}
        </ErrorMessage>
      </div>

      <div className='form-control'>
        <label>Twitter</label>
        <Field type="text"
              id='twitter'
              name='social.twitter'
        />
        <ErrorMessage name='social.twitter'>
          {errormsg => <p className='error'>{errormsg} </p>}
        </ErrorMessage>
          </div>
      <div className='form-control'>
        <label>Primary phone</label>
        <Field type="number"
              id='phonenumbers'
              name='phonenumbers[0]'
        />
        <ErrorMessage name='phonenumbers[0]'>
          {errormsg => <p className='error'>{errormsg} </p>}
        </ErrorMessage>
          </div>
        <div className='form-control'>
        <label>Secondary Phone</label>
        <Field type="number"
              id='phonenumbers'
              name='phonenumbers[1]'
        />
        <ErrorMessage name='phonenumbers[1]'>
          {errormsg => <p className='error'>{errormsg} </p>}
        </ErrorMessage>
          </div>

     <div className='form-control'>
      <label htmlFor="Gender">Gender</label>

      <label>
        <Field type='radio' name='gender' id='male' value='male' />
        Male
      </label>
      <label>
        <Field type='radio' name='gender' id='female' value='female'  />
        female
      </label>
      <label>
        <Field type='radio' name='gender' id='other' value='other'  />
        other
      </label>
        <ErrorMessage name='gender'>
    {errorMsg => <p className='error'>{errorMsg}</p>}
     </ErrorMessage>
     </div>

  {/* Field array*/ }        
        <div className='form-control'>
          <label>List of phone numbers</label>
          <FieldArray name='phNumbers'>
            {
              (fieldArrayProps) => {
               const {push,remove,form} = fieldArrayProps
               const {values} = form
               const {phNumbers} = values
              console.log('formerrors',form.errors);
              return(
                <div>
                  {
                    phNumbers.map((item,index) => (
                      <div key={index}>
                        <Field name={`phNumbers[${index}]`} />
                        {
                           index>0 &&    <button type='button' onClick={() => remove(index)} >-</button>
                        }
                       
                          <button type='button' onClick={() => push('')} >+</button>
                      </div>

                    ))
                  }
                </div>
              )

              }
            }
          </FieldArray>
        </div>

    
      <div>
        <button type='reset'>Reset</button>
        <button type='submit' disabled={!formik.isValid||formik.isSubmitting}>Submit</button>
      </div>
    </Form>
          )
        }
    
    }
  
  </Formik>
  )
}

export default Sormik