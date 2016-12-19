class Auth {
    static  authenticateUser(token){
        localStorage.setItem('token', token);
    }
    static isUserAuthenticated(){
        return localStorage.getItem('token') !== null;
    }
}

export default Auth;