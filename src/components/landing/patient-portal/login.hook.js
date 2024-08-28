import { useState } from "react";

export default function usePatientLogin() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError(true);
      return;
    } else if (!emailRegex.test(email)) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    try {
      const results = await fetch(
        "https://dev.primalzone.com.au/patient-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, role: "PATIENT" }),
        }
      );
      if (results.status == 200) {
        setEmail("");
        e.target.reset();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    email,
    setEmail,
    error,
    handleSubmit,
    loading,
  };
}
