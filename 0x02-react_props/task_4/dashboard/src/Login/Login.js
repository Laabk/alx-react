import React from 'react';
import '../Login/Login.css';
const Login = ({onSuccessfulLogin}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        onSuccessfulLogin();
    }
    return (
        <form name='login' role='form' onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">OK</button>
        </form>
    );
}

export default Login;
