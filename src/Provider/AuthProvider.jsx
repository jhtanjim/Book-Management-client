import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { Spinner } from 'react-bootstrap';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = userCredential.user;
                return updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {
                    setUser(newUser);
                    setLoading(false);
                    console.log(newUser);
                });
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Update the user object with the photo URL
                const updatedUser = {
                    ...userCredential.user,
                    photoURL: userCredential.user.photoURL || '',
                };
                setUser(updatedUser);
                setLoading(false);
                return updatedUser;
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
            .then((userCredential) => {
                const updatedUser = {
                    ...userCredential.user,
                    photoURL: userCredential.user.photoURL || '',
                };
                setUser(updatedUser);
                setLoading(false);
                history.push('/home'); // Redirect to the home page
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };


    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                throw error;
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            // console.log('current user', currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {loading ? (
                <div className="d-flex justify-content-center mt-5">
                    <Spinner className=" spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>

            ) : (
                children // Remove curly braces
            )}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
