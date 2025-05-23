import React, { createContext, useEffect, useState } from "react";
import app from "../Firebese/Firebese.config";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

// Create Context
export const AuthContext = createContext();

// Firebase Auth Instance
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signup Function
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login Function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout Function
  const logout = () => {
    return signOut(auth);
  };

  // Google SignIn Function
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Auth State Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Data to Share
  const authData = {
    user,
    setUser,
    signup,
    login,
    logout,
    googleSignIn,
    loading,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
