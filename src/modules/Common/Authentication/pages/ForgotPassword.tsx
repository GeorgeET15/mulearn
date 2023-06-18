import React, { useState } from "react";
import { forgetPassword } from "../services/apis";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import styles from "./Login.module.css"
import { PulseLoader } from "react-spinners";

type Props = {};

const ForgotPassword = (props: Props) => {
    const [muid, setMuid] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [showLoader, setShowLoader] = useState(false)
    const navigate = useNavigate();
    const toast = useToast();

    return (
        <div className={styles.login_page}>
            <div className={styles.login_container}>
                <div className={styles.login_form}>
                    <h1>Forgot Password</h1>
                    <p className={styles.p_welcome}>
                        Don't worry, enter your muid to reset your password
                    </p>
                    <form>
                        <input
                            type="text"
                            placeholder="Enter your µID or Email"
                            required
                            value={muid}
                            onChange={e => setMuid(e.target.value)}
                        />
                        <br />
                        <br />
                        <button
                            onClick={e => {
                                e.preventDefault();
                                if (muid.length > 0) {
                                    forgetPassword(
                                        muid,
                                        toast,
                                        navigate,
                                        setShowLoader
                                    );
                                }
                            }}
                            type="submit"
                        >
                            {
                                !showLoader ?
                                    " Reset password"
                                    :
                                    <div className={styles.otp_loader}>
                                        <PulseLoader size={10} color="#fff" />
                                    </div>
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ForgotPassword;
