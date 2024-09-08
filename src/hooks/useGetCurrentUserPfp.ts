import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import useUser from "../features/authentication/store";

const useGetCurrentUserPfp = () => {
    const [profilePicture, setProfilePicture] = useState("");
    const user = useUser().user;


    useEffect(() => {
        const photoRef = ref(db, "users/" + user?.uid + "/photoURL");
        onValue(photoRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            setProfilePicture(data);
        });
    }, []);
    
    return profilePicture
}

export default useGetCurrentUserPfp