import {fetchUserAttributes, signOut, getCurrentUser} from 'aws-amplify/auth';
import {useState} from "react";
import {Placeholder} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

export default function App() {

    const [userName, setUserName] = useState("");

    async function handleSignOut() {
        await signOut();
    }

    fetchUserAttributes().then(user => {
        setUserName(user.preferred_username);
    });

    return (
        <>
            <h1>{userName || <Placeholder size={"large"}/>}</h1>
            <button onClick={handleSignOut}>Sign out</button>
        </>
    );
}