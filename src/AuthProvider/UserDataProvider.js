import { async } from "@firebase/util";
import { doc, setDoc, collection, getDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import { useAuth } from "./AuthProvider";

const UserDataContext = React.createContext();

export function useData() {
    return useContext(UserDataContext);
}

const UserDataProvider = ({ children }) => {
    const { currentUser } = useAuth();
    const [userStatus, setUserStatus] = useState(1);
    const [userFillData, setUserFillData] = useState(0);

    //Add user to db with email and status 
    const setUserToDB = async (uid, email) => {
        console.log("Creating collection for user " + uid + "......");
        await setDoc(doc(db, "users", uid), {
            email: email,
            status: 0,
        }).then(() => setUserStatus(0));
    }

    //Add other registration details (name, school, organization etc.)
    const addDataToDB = async (uid, name, school) => {
        await updateDoc(doc(db, "users", uid), "name", name, "school", school).then(() => { setUserFillData(1) });
    }

    //Approve user
    const approveUser = async (uid) => {
        await updateDoc(doc(db, "users", uid), "status", 1).then(() => { setUserStatus(1) });
    }

    const value = {
        userStatus,
        userFillData,
        setUserToDB,
        approveUser,
        addDataToDB,
    };

    return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>;
};

export default UserDataProvider;
