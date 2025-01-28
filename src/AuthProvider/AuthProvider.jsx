import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin=(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const userLogOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

        const AuthInfo= {
            user,
            loading,
            setLoading,
            createUser,
            userLogin,
            signInWithGoogle,
            userLogOut


        }
        useEffect(()=>{
            setLoading(true);
            const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
                setLoading(false)
                
                // if(currentUser?.email){
                //     const user = {email : currentUser.email};
                //     axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
                //     .then(res=>{
                //         // console.log(res);
                //         setLoading(false);
                //     })
                // }
                // else{
                //     axios.post('http://localhost:5000/logOut',{},{withCredentials:true})
                //     .then(res=>{
                //         // console.log('log out token',res.data);
                //         setLoading(false);
                //     })
    
                })
                
        
        return()=>{
            unsubscribe()
        }
    
        },[])   
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;