import "./button.styles.scss";

const Button = ({ children, buttonType, ...otherProps }) => {
    const buttonTypesClasses = {
        google: "google-sign-in",
        inverted: "inverted",
    };

    return (
        <button
            className={`button-container ${buttonTypesClasses[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
