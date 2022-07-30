import { useState } from "react";

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-up-form.styles.scss";

const SignUpForm = () => {
    const defaultFormField = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [formData, setFormData] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formData;

    const handleFieldChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFromData) => ({
            ...prevFromData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        // const logGoogleUser = async () => {
        //     const response = await signInWithGooglePopup();
        //     const userDocRef = await createUserDocumentFromAuth(response.user);
        // };
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocumentFromAuth(user, { displayName });

            // Reset form fields
            setFormData(defaultFormField);
        } catch (err) {
            if (err.code == "auth/email-already-in-use") {
                alert("Email already exists");
            } else {
                console.log("Error: ", err);
            }
        }
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleFieldChange}
                    name="displayName"
                    value={displayName}
                />

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

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleFieldChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
