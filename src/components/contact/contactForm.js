import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();

      const [submitted, setSubmitted] = useState(false)
      
      const onSubmit = async (data) => {
        const { fname, lname, email, message} = data; 
        setSubmitted(true);          
        reset();

        try {
            const templateParams = {
              fname,
              lname,
              email,
              message
            };

            await emailjs.send(
              process.env.REACT_APP_SERVICE_ID,
              process.env.REACT_APP_TEMPLATE_ID,
              templateParams,
              process.env.REACT_APP_USER_ID
            );

          } catch (e) {

          } finally {
            setSubmitted(false);     
          }
      };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" {...register('fname', {
                        required: {value: true, message: 'Please enter your first name'},
                        maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                      })}></input>
                      {errors.fname && <span className='errorMessage'>{errors.fname.message}</span>}
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname" {...register('lname', {
                        required: { value: true, message: 'Please enter your last name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}></input>
                      {errors.lname && <span className='errorMessage'>{errors.lname.message}</span>}
                <label htmlFor="email">Email:</label>          
                <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      id='email'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" cols="40" rows="5" {...register('message', {
                        required: true
                      })}></textarea>
                {errors.message && <span className='errorMessage'>Please enter a message</span>}
                <span className="submit-wrapper">
                    <input type="submit" value={submitted ? "Thanks!" : "Submit"} className="submit-btn"></input>
                </span>
            </form>
        </div>
    )
}

export default ContactForm
