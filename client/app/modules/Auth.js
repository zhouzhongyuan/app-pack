class Auth {
    static  authenticateUser(token){
        localStorage.setItem('token', token);
    }
}

export default Auth;