"use client"
import Link from 'next/link';
import LandingFooter from '@/common/components/landing-components/footer.component';

export default function TreatmentPage() {
    return (
        <>

            <section class="hero-section treatment-page flex items-center">
                <div class="max-w-[1250px] mx-auto mt-5 pt-4">
                    <div class="flex flex-wrap items-center mt-5 wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="lg:w-[48%] w-full">
                            <div class="max-w-[540px]">
                                <h1 class="ff_helvetica treatment-heading text-white">Welcome <span class="text_purple">[Back]</span></h1>
                                <div class="mt-4">
                                    <h2 class="ff_helvetica text-xl font-bold text-white">Verify Your Email </h2>
                                    <p class="ff_helvetica text-lg font-light text-white">Verify your email address and we’ll log you in to your secure account area to begin or resume your treatment application.</p><br />
                                    <h2 class="ff_helvetica text-xl font-bold text-white">Getting Started?</h2>
                                    <p class="ff_helvetica text-lg font-light text-white">Once you are in your secure account area, you’ll be able to safely apply for treatments, buy approved medications and manage your re-order process.</p><br/>
                                    <h2 class="ff_helvetica text-xl font-bold text-white">Been Here Before?</h2>
                                    <p class="ff_helvetica text-lg font-light text-white">Simply re-verify your email address to authorise this device and get back into your secure account area. </p>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-[48%] w-full mt-4 mt-md-0">
                            <div class="treatment-hero-card ms-auto">
                                <h2 class="ff_helvetica instruction-heading text-3xl font-normal text-white">Instructions</h2>
                                <p class="mt-2 instruction-text ff_helvetica text-lg font-normal">Enter your email address and click submit, check your email and click the verify account email button.</p>
                                <form action="" class="email-verification-form">
                                    <input class="text-lg font-normal text-black bg-white border-0 w-full" type="email" id="email" name="email" placeholder="Email Address" />
                                    {/* <button type="submit" class="submit-button w-full text-center border-0 text-white lh-normal font-normal">Submit for Email Verification</button> */}
                                    <Link href="/patient" class="submit-button w-full block text-center border-0 text-white lh-normal font-normal">Submit for Email Verification</Link>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <LandingFooter/>
        </>
    );
}