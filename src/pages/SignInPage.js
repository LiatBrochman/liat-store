import React from 'react';
import GoogleButton from 'react-google-button'

function handleGoogleSignIn() {
    window.location.href = 'http://localhost:5000/google'
}

function SignInPage() {

    return (
        <GoogleButton
            onClick={handleGoogleSignIn}
        />
    );
}

export default SignInPage;