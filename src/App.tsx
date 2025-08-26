import {getCurrentUser} from 'aws-amplify/auth';

const {username, userId, signInDetails} = await getCurrentUser();
console.log("username", username);
console.log("user id", userId);
console.log("sign-in details", signInDetails);

function App() {

    return (
        <main>
        </main>
    );
}

export default App;
