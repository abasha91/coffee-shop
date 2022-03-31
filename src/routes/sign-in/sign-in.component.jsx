import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <button onClick={logGoogleUser}>SignIn with Google</button>
        </div>
    );
};

export default SignIn