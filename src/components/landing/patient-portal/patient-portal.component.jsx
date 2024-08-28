"use client";

import usePatientLogin from "./login.hook";

export default function PatientPortal() {
  const { email, setEmail, error, handleSubmit, loading } = usePatientLogin();
  return (
    <>
      <section class="pateint-hero-section flex items-center">
        <div class="container">
          <div class="pateint-content max-w-[700px] mx-auto">
            <h1 class="ff_helvetica treatment-heading font-normal text-white text-center">
              Start Your <span class="text_purple">Treatment</span>
            </h1>
            <p class="mt-3 pt-1 ff_helvetica text-base font-normal text-white text-center">
              Hello, You need to be an active member to access the Patient
              Portal. If you are a patient and need to (re)validate this device
              for access to the Patient Portal, please put submit your email and
              we will send you a verification link.{" "}
            </p>
            <form
              id="patientLogin"
              class="email-verification-form flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <div class="w-full max-w-[598px] mx-auto">
                <input
                  className="text-lg font-normal mx-auto text-black bg-white border-0 w-full"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error &&
                  (!email ? (
                    <p className="text-red-600 mt-3">Email is required</p>
                  ) : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? (
                    <p className="text-red-600 mt-3">Invalid email format</p>
                  ) : null)}
              </div>
              <button
                disabled={loading}
                type="submit"
                class="submit-button mx-auto text-center border-0 text-white lh-normal font-normal"
              >
                {loading ? "Submitting..." : "Submit for Email Verification"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
