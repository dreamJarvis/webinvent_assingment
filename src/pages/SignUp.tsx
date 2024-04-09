import React from 'react';

const SignUp = () => {
   return (
      <div className="login-form">
         <form className="input-form">
            <div className="input-form-container">
               <div className="input-containers">
                  <label className="input-name">
                     Sign-Up
                  </label>
                  <input
                     className='input-name'
                     type='text'
                     placeholder="username"
                  />
                  <input
                     className='input-email'
                     type='email'
                     placeholder="email"
                  />
                  <input
                     className='input-password'
                     type="password"
                     placeholder="password"
                  />
               </div>
               <button className='btn-submit'>Sign-up</button>
            </div>
         </form>
      </div>
   );
};

export default SignUp;