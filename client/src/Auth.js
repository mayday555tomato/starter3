// class Auth {
//     isAuthenticated = false;
//     errorMessage = '';

//     async authenticate(user, cb) {
//         let res = await fetch(
//             '/users', {
//                 method: 'POST',
//                 body: JSON.stringify(user),
//                 headers: {'Content-Type': 'application/json'}
//             }
//         );

//         if(res.status === 200){
//             this.isAuthenticated = true;
//             cb(this.isAuthenticated, this.errorMessage);
//             return;
//         } else {
//             console.log(await res.json());                        
//         }
//     }
// }

//TODO: class vs const ?
//TODO: across app authentication and session
//async and await vs promises 
//another way to make it not using callbacks to return isAuthenticated/errormessage
//make it a singleton?

const Auth = {

    isAuthenticated: false,
    errorMessage: '',

    authenticate (user, cb) {
         fetch('/users', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {'Content-Type': 'application/json'},
            }).then(res => {
                if(res.status === 200){
                    this.isAuthenticated = true;
                    cb(this.isAuthenticated, this.errorMessage);
                } else {
                    this.isAuthenticated = false;                    
                    res.json().then((data) => {
                        this.errorMessage = data.message;
                        cb(this.isAuthenticated, this.errorMessage);
                    });
                }
            }).catch(error => {
                this.isAuthenticated = false;
                this.errorMessage = error;
                cb(this.authenticate, this.errorMessage);
            });
    },

    signout: (cb) => {
        console.log('signout is called.');
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

export default Auth;