import { useState } from "react";

import {
    signInWithGooglePopup,
    signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignInContainer, ButtonContainer } from "./sign-in-form.styles";

const SignInForm = () => {
    const defaultFormField = {
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState(defaultFormField);
    const { email, password } = formData;

    // * To handle field input
    const handleFieldChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFromData) => ({
            ...prevFromData,
            [name]: value,
        }));
    };

    // * Submit Button
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInUserWithEmailAndPassword(email, password);

            // Reset form
            setFormData(defaultFormField);
        } catch (err) {
            switch (err.code) {
                case "auth/wrong-password":
                    alert("Incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("No user associated with this email.");
                    break;
                default:
                    console.log("Error: ", err);
            }
        }
    };

    // * Google Sign In Button
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleFieldChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleFieldChange}
                    name="password"
                    value={password}
                />

                <ButtonContainer>
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        buttonType="google"
                        onClick={signInWithGoogle}
                    >
                        Google Sign In
                    </Button>
                </ButtonContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;
