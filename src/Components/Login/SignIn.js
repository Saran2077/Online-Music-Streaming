// import React from 'react'
// import './Login.css'

// const SignIn = () => {
//   return (
//     <section className='signIn'>
//        <form className='grid'>
//             <h1>Login</h1>
//             <div className='input-field'>
//               <label>Username</label>
//               <input onChange={(e) => setUserName(e.target.value)} type='text' placeholder='Username'/>
//               {error && error.name ? <span className='text-danger'>{ error.name }</span> : null}
//               <label>Password</label>
//               <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'/>
//               {error && error.password ? <span className='text-danger'>{ error.password }</span> : null}
//             </div>
//             <a href="" className='forget_password'>Forgot password?</a>
//             <input onClick={(e) => LoginValidate(e, userName, password)} type='submit' className='submit' value="Login"/>
//     </section>
//   )
// }

// export default SignIn