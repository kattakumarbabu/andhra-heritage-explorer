import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Mail, Sparkles } from "lucide-react";
import toast from "react-hot-toast";

import api from "../api/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await api.post("/auth/login", form);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            toast.success("Welcome aboard ✨");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-shell">
            <Navbar />
            <div style={{ minHeight: "82vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 20px" }}>
                <motion.form initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="glass-card" style={{ width: "100%", maxWidth: "480px", padding: "40px", borderRadius: "28px" }}>
                    <div style={{ textAlign: "center", marginBottom: "28px" }}>
                        <div style={{ width: "68px", height: "68px", margin: "0 auto 18px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg,#2563EB,#38BDF8)", color: "white" }}>
                            <Sparkles size={24} />
                        </div>
                        <h1 style={{ fontSize: "32px", marginBottom: "8px", color: "#f8fafc" }}>Create your account</h1>
                        <p style={{ color: "#cbd5e1" }}>Join a polished travel experience for Andhra Pradesh.</p>
                    </div>

                    <label style={labelStyle}>Email Address</label>
                    <div style={inputWrapStyle}>
                        <Mail size={18} color="#64748B" />
                        <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required style={inputStyle} />
                    </div>

                    <label style={labelStyle}>Password</label>
                    <div style={inputWrapStyle}>
                        <Lock size={18} color="#64748B" />
                        <input type="password" name="password" placeholder="Create a password" value={form.password} onChange={handleChange} required style={inputStyle} />
                    </div>

                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", padding: "15px", marginTop: "10px", border: "none", borderRadius: "15px", cursor: loading ? "wait" : "pointer", fontSize: "17px", fontWeight: "600" }}>
                        {loading ? "Creating account..." : "Register"}
                    </motion.button>

                    <p style={{ textAlign: "center", marginTop: "22px", color: "#cbd5e1" }}>
                        Already have an account? <Link to="/login" style={{ color: "#2563EB", fontWeight: "700" }}>Login</Link>
                    </p>
                </motion.form>
            </div>
            <Footer />
        </div>
    );
}

const labelStyle = { display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600" };
const inputWrapStyle = { display: "flex", alignItems: "center", gap: "10px", padding: "15px 18px", borderRadius: "14px", border: "1px solid rgba(148,163,184,0.26)", background: "rgba(15,23,42,0.9)", marginBottom: "20px" };
const inputStyle = { width: "100%", border: "none", outline: "none", background: "transparent", fontSize: "16px", color: "#f8fafc" };

export default Register;