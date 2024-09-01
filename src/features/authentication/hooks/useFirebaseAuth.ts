import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { FieldValues } from "react-hook-form";
import { useState, useEffect } from 'react';
import useUser from "../store";
import { useNavigate } from "react-router-dom";


export const useFirebaseAuth = () => {
    const provider = new GoogleAuthProvider();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const registerNewUser = async (data: FieldValues) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: data.name });
            navigate("/");
            setError(null);
        } catch (error: any) {
            const err = error.code
            if(err === "auth/email-already-in-use") {
                setError("This email is already taken ");
            } else {
                setError("Failed to register");
            }
        }
    };

    const loginExistingUser = async (data: FieldValues) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            navigate("/");
            setError(null);
        } catch (error: any) {
            const err = error.code
            if(err === "auth/invalid-email") {
                setError("Invalid email");
            } else if(err === "auth/missing-password") {
                setError("Please fill in password field");
            } else if("auth/invalid-credential") {
                setError("Invalid login or password")
            } else {
                setError("Failed to login");
            }
        }
    };

    const loginUserWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider)
            navigate("/");
        } catch (error: any) {
            console.log(error.message);
            setError("Failed to login woth google");
        }
    }

    const logOut = (): Promise<void> => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                useUser.setState({user});
            } else {
                useUser.setState({user: null});
            }
        });

        return () => unsubscribe();
    }, []);


    return { error, registerNewUser, loginExistingUser, loginUserWithGoogle, logOut };
};
