import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [form, setForm] = useState({ email: "", password: ""});
    const [error, setError] = useState("");
    const { login } =useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectTo = location.state?.from?.pathname || "/dashboard";

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        const success = login(form.email, form.password);
        if (success) {
            navigate(redirectTo, {replace: true});
        } else {
            setError("Email dan password wajib diisi.");
        }

    }
    return (
        <section className="login">
            <h2>
                Masuk ke Akun
            </h2>
            <form onSubmit={handleSubmit} className="login">
                <label>
                    Email
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} />
                
                <label>
                    password
                </label>
                    <input type="password" name="password" value={form.password} onChange={handleChange}/>
                
                <button type="submit">Masuk</button>
            </form>
            {error && <p className="error">{error}</p>}
        </section>
    );
}

export default Login;