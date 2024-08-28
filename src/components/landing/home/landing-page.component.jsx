"use client"
import Image from 'next/image';
import Link from 'next/link';
import player from '@/common/assets/images/landing-page/player.png';
import scrollTop from '@/common/assets/images/landing-page/icons/scroll-top.svg';
import scrollBottom from '@/common/assets/images/landing-page/icons/scroll-bottom.svg';
import hCard1 from '@/common/assets/images/landing-page/h_card_1.png';
import hCard2 from '@/common/assets/images/landing-page/h_card_2.png';
import hCard3 from '@/common/assets/images/landing-page/h_card_3.png';
import medication from '@/common/assets/images/landing-page/Medications_Considered_im.png';
import universityOfCanberra from '@/common/assets/images/landing-page/university-of-canberra.png';
import customerProfile from '@/common/assets/images/landing-page/icons/customer-profile.png';
import reviewStar from '@/common/assets/images/landing-page/icons/reviews_stars.png';
import google from '@/common/assets/images/landing-page/icons/google.png';
import fileIcon from '@/common/assets/images/landing-page/icons/upload_file_icon.png';
import instagramIcon from '@/common/assets/images/landing-page/Instagram_icon.png';
import footerInstagram from '@/common/assets/images/landing-page/icons/footer_instagram.png';
import footerLinkedIn from '@/common/assets/images/landing-page/icons/footer_linkdin.png';
import footerFacebook from '@/common/assets/images/landing-page/icons/footer_facebook.png';
import footerYoutube from '@/common/assets/images/landing-page/icons/footer_youtube.png';
import footerLogo from '@/common/assets/images/landing-page/footer_logo.png';
import FeelingCard from '../../../common/components/landing-components/feeling-card.component';
import PricingCard from '../../../common/components/landing-components/treatment-card.component';
import TreatmentCard from '../../../common/components/landing-components/treatment-process-card.component';
import InternalLinkButton from '../../../common/components/landing-components/button-link.component';
import InputField from '../../../common/components/landing-components/input.component';
import JourneyCard from '../../../common/components/landing-components/journey-card.component';
import ReviewCard from '../../../common/components/landing-components/review-card.component';
import SocialMediaCard from '../../../common/components/landing-components/social-media-card.component';
import VideoPopUp from '../../../common/components/landing-components/video-popup';
import { useState } from 'react';
import { landingFaqs } from './faqs.constant';
import LandingFooter from '@/common/components/landing-components/footer.component';

export default function HomeView() {
    const [open, setOpen] = useState(false);
    const [videoId, setVideoId] = useState('');
    const [isHide, setIsHide] = useState();
    const handleButtonClick = (id) => {
        setVideoId(id);
        setOpen(true);
    }
    

    return (
        <>


            <section className="hero-section">
                <div className="container mt-5 pt-4">
                    <div className="hero-sec-card mt-5 flex flex-col wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <h1 className="ff_helvetica md:text-[38px] text-2xl font-medium text-white text-center">Men’s Hormone & Holistic Health </h1>
                        <div className="over__hiden relative text-center youtube-btn-wrapper" onClick={() => handleButtonClick('bpGB5Y-pzG0')}>
                            <button type="button" className="absolute youtube-btn bg-transparent border-0">
                                <svg width="44" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" fill="#FFF" />
                                </svg>
                            </button>
                            <Image
                                src={player}
                                alt="Picture of the author"
                                width={280}
                                height={180}
                                className="max-w-[280px] w-full"
                                layout="responsive"
                            />
                        </div>

                        <p className="ff_helvetica text-2xl text-center font-light text-white">We’ll provide you a personalised hormone and holistic health plan to get you back in your prime. </p>
                        <a className="nav-item text-xl fw-normal lh-noraml text-white btn-gradient flex items-center justify-center" href="#">SIGNUP</a>
                    </div>
                </div>
            </section>

            <section className="feeling-section relative pb-0">
                <div className="container background-logo ">
                    <div className="flex items-center justify-center lg:justify-between lg:flex-nowrap flex-wrap gap-4">
                        <div className="cards-wraper flex flex-wrap flex-lg-nowrap justify-center wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                            <div className="flex flex-col gap-y-[23px]">
                                <FeelingCard
                                    imageUrl="/assets/moon.svg"
                                    imgWidth={35}
                                    imgHeight={37}
                                    heading="Constantly Tired?"
                                    text="Are you sleeping more than ever?"
                                />
                                <FeelingCard
                                    imageUrl="/assets/battery.svg"
                                    imgWidth={23}
                                    imgHeight={38}
                                    heading="Low/No Energy?"
                                    text="Constantly running on empty?"
                                />


                            </div>
                            <div className="mt-[45px] flex flex-col gap-y-[23px] ">
                                <FeelingCard
                                    imageUrl="/assets/no-sex.svg"
                                    imgWidth={41}
                                    imgHeight={47}
                                    heading="No Sex Drive?"
                                    text="No desire or urge to get on the job?"
                                />
                                <FeelingCard
                                    imageUrl="/assets/muscles.svg"
                                    imgWidth={40}
                                    imgHeight={40}
                                    heading="No Muscle Mass?"
                                    text="Can’t put on muscle no matter what?"
                                />

                            </div>
                        </div>
                        <div className="mt-4 mt-lg-0 content-wraper w-full flex flex-col wow slideInUp max-w-[469px]" data-wow-duration="1.5s" data-wow-delay="0s">
                            <p className="text-base text-white font-normal"><span className="gridient__span"> </span> Listen to your instincts</p>
                            <h2 className="ff_helvetica text-[44px] font-normal text-white mt-3">Not <span className="gridient__txt">Feeling</span> Yourself?</h2>
                            <p className="ff_helvetica text-lg font-light text-white mt-33">Onset of symptoms like this can happen to Men of any age.  Hormone Health is one of the biggest Men’s Health issues not spoken about.  If you aren’t feeling yourself and are experiencing these type of symptoms, then your Hormone Health is worth evaluating.</p>
                            <a className="nav-item text-xl fw-normal lh-noraml text-white btn-gradient flex items-center justify-center w-full mt-33 Start_Treatment__btn wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s" href="#">Start Treatment</a>
                        </div>
                    </div>

                </div>
                <div className="Our_Treatments_sec" id='our-treatments'>
                    <div className="container wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s">
                        <p className="text-base text-white font-normal text-center ff_helvetica"><span className="gridient__span"></span> Transparent & Upfront</p>
                        <div className="Our_Treatments_main">
                            <h2 className="ff_helvetica text-[44px] font-normal text-white text-center mt-1">Our <span className="gridient__txt">Treatments</span></h2>
                            <p className="ff_helvetica text-lg font-light text-white text-center mt-10 max-w-[525px] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="flex flex-wrap mt-5 justify-center gap-4">
                                <PricingCard
                                    title="Cannabis & Peptides"
                                    price="$100"
                                    gstInfo="+GST"
                                    refundPolicy="If you don’t qualify, we’ll refund your money."
                                    buttonText="Get Started"
                                    whatsIncludedTitle="What’s Included"
                                    whatsIncludedItems={[
                                        "Medical Evaluation",
                                        "Protocol Creation",
                                        "Doctor Consultation",
                                    ]}
                                    medicationTitle="Medication Considered"
                                    medicationItems={[
                                        "Cannabis Flower, Oil & Wafers",
                                        "All Available Peptides",
                                    ]}
                                />
                                <PricingCard
                                    title="Cannabis & Peptides"
                                    price="$250"
                                    gstInfo="+GST"
                                    refundPolicy="If you don’t qualify, we’ll refund your money."
                                    buttonText="Get Started"
                                    whatsIncludedTitle="What’s Included"
                                    whatsIncludedItems={[
                                        "Medical Evaluation",
                                        "Protocol Creation",
                                        "Doctor Consultation",
                                    ]}
                                    medicationTitle="Medication Considered"
                                    medicationItems={[
                                        "Cannabis Flower, Oil & Wafers",
                                        "All Available Peptides",
                                    ]}
                                />
                                <PricingCard
                                    title="Cannabis & Peptides"
                                    price="$175"
                                    gstInfo="+GST"
                                    refundPolicy="If you don’t qualify, we’ll refund your money."
                                    buttonText="Get Started"
                                    whatsIncludedTitle="What’s Included"
                                    whatsIncludedItems={[
                                        "Medical Evaluation",
                                        "Protocol Creation",
                                        "Doctor Consultation",
                                    ]}
                                    medicationTitle="Medication Considered"
                                    medicationItems={[
                                        "Cannabis Flower, Oil & Wafers",
                                        "All Available Peptides",
                                    ]}
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container background-logo-left pb-5 wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s" id="how-it-works">

                    <div className="mx-auto mt-[151px] max-w-[1029px] w-full">
                        <p className="text-base text-white font-normal text-center ff_helvetica"><span className="gridient__span"></span> How it Works</p>
                        <h2 className="ff_helvetica text-[44px] font-normal text-white text-center mt-1">Quick Start <span className="gridient__txt">Treatment Process</span></h2>
                        <p className="ff_helvetica text-lg font-light text-white text-center mt-30 mx__921">Eager to get started right away? Our 3-step, self-service and fully guided process is designed to make your Hormone and Holistic health journey as quick and seamless as possible. We’ll evaluate your hormone health issues and provide a bespoke treatment plan. </p>

                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mt-5 pt-2 pb-2 mb-5">
                        <TreatmentCard
                            count="1"
                            heading="Information"
                            items={[
                                "Provide Contact Details",
                                "Complete Health Survey",
                                "Upload ID & Bloodwork",
                                "Pay Consulting Fee"
                            ]} />
                        <TreatmentCard
                            count="2"
                            heading="Evaluation"
                            items={[
                                "Data Analysis",
                                "Patient Diagnosis",
                                "Medicine Protocol",
                                "Speak with Doctor"
                            ]} />
                        <TreatmentCard
                            count="3"
                            heading="Medication"
                            items={[
                                "Receive Scripts",
                                "Pay for Medicine",
                                "Receive Medication",
                                "Take first Dose"
                            ]} />

                    </div>
                    <InternalLinkButton href="#" children="Start Treatment" className='max-w-[413px] mt-10' />
                    {/* <a className="ff_helvetica nav-item text-[26px] font-light lh-noraml text-white btn-gradient flex items-center justify-center w-full mt-33 Start_Treatment__btn m-auto mx_413 wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s" href="#">Start Treatment</a> */}
                </div>
            </section>

            <div className="scroll-margin" id="talk-to-us">
                <section className="talk_us_sec">
                    <div className="container">
                        <div className="talk_us_main">
                            <div className="talk_us_content wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                                <p className="text-base text-white font-normal ff_helvetica"><span className="gridient__span"></span> Need a helping hand?</p>
                                <h2 className="ff_helvetica text-[44px] font-normal text-white mt-1"><span className="gridient__txt">Talk </span>to Us</h2>
                                <p className="ff_helvetica text-lg font-light text-white mt-30 mx__525">Still not sure, have some questions about the process or need some clarity?  Book a call with our clinician team to walk you through our process and get you ready to undertake our onboarding workflow. </p>
                            </div>
                            <div className="talk_us_fields wow slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                                <div>
                                    <InputField
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="NAME e.g. John Appleseed"
                                        className=""
                                    />
                                    <InputField
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="EMAIL e.g. john@appleseed.com"
                                        className="mt-2"
                                    />
                                    <InputField
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="PHONE eg. 0412 345 678"
                                        className="mt-2"
                                    />
                                </div>
                                {/* <div className="date_time_picker">
                                    <div id="datepicker"></div>

                                    <div className="timeslot-container">
                                        <div className="scroll-container">
                                            <div className="scroll-button scroll-up flex justify-center items-center">
                                                <Image
                                                    src={scrollTop}
                                                    alt="scroll to"
                                                    width={17}
                                                    height={10}
                                                    className='max-w-[17px]'
                                                    layout="responsive"
                                                />
                                            </div>
                                            <div className="timeslot">
                                                <InputField
                                                    type="radio"
                                                    name="timeslot"
                                                    id="slot1"
                                                />
                                                <label for="slot1">10:00 AM</label>
                                                <InputField
                                                    type="radio"
                                                    name="timeslot"
                                                    id="slot2"
                                                />
                                                <label for="slot2">10:30 AM</label>
                                                <InputField
                                                    type="radio"
                                                    name="timeslot"
                                                    id="slot3"
                                                />
                                                <label for="slot3">11:00 AM</label>
                                                <InputField
                                                    type="radio"
                                                    name="timeslot"
                                                    id="slot4"
                                                />
                                                <label for="slot4">11:30 AM</label>
                                                <InputField
                                                    type="radio"
                                                    name="timeslot"
                                                    id="slot5"
                                                />
                                                <label for="slot1">12:00 AM</label>
                                                <InputField
                                                    type="radio"
                                                    name="timeslot"
                                                    id="slot6"
                                                />
                                                <label for="slot2">12:30 AM</label>
                                                <InputField
                                                    type="radio"
                                                    name="timeslot"
                                                    id="slot7"
                                                />
                                                <label for="slot3">01:00 AM</label>
                                                <InputField
                                                    type="radio"
                                                    name="timeslot"
                                                    id="slot8"
                                                />
                                                <label for="slot4">01:30 AM</label>

                                            </div>
                                            <div className="scroll-button scroll-down flex justify-center items-center">
                                                <Image
                                                    src={scrollBottom}
                                                    alt="scroll to"
                                                    width={17}
                                                    height={10}
                                                    className='max-w-[17px]'
                                                    layout="responsive"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="scroll-margin" id="journey">
                <section className="Health_Journeys_sec">
                    <div className="container">
                        <div className="Health_Journeys_main">
                            <p className="text-base text-white font-normal text-center ff_helvetica"><span className="gridient__span"></span> Get Inspired, Get Started</p>
                            <h2 className="ff_helvetica text-[44px] font-normal text-white text-center mt-2">Health <span className="gridient__txt">Journeys</span></h2>
                            <p className="ff_helvetica text-lg font-light text-white text-center mt-30 mx__525">Everybody’s journey to good health is unique and inspirational.  </p>
                            <div className="Health_Journeys_cards">
                                <JourneyCard
                                    videoId="bpGB5Y-pzG0"
                                    imgSrc={hCard1}
                                    h2Text="Allan B - Executive"
                                    pText="George the real-estate king of the Southern Highlands kept his sharp edge. George the real-estate king of the Southern Highlands kept."
                                    onClick={handleButtonClick}
                                />
                                <JourneyCard
                                    videoId="Jw7s42Op2ao"
                                    imgSrc={hCard2}
                                    h2Text="Allan B - Executive"
                                    pText="George the real-estate king of the Southern Highlands kept his sharp edge. George the real-estate king of the Southern Highlands kept."
                                    onClick={handleButtonClick}
                                />
                                <JourneyCard
                                    videoId="Jw7s42Op2ao"
                                    imgSrc={hCard3}
                                    h2Text="Allan B - Executive"
                                    pText="George the real-estate king of the Southern Highlands kept his sharp edge. George the real-estate king of the Southern Highlands kept."
                                    onClick={handleButtonClick}
                                />

                            </div>
                            <InternalLinkButton href="#" children="Start Treatment" className='max-w-[632px] mt-10' />
                            {/* <a className="nav-item mx-auto text-xl fw-normal lh-noraml text-white btn-gradient flex items-center justify-center w-full mt-[33px] Start_Treatment__btn max-w-[632px]" data-wow-duration="1.5s" data-wow-delay="0s" href="#">Start Treatment</a> */}
                        </div>
                    </div>
                </section>
            </div>

            <section className="Medications_Considered_sec">
                <div className="container background-logo-left second">
                    <div className="Medications_Considered_main">
                        <div className="Medications_Considered_image wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                            <Image
                                src={medication}
                                alt="Picture of the author"
                                width={433}
                                height={396}
                                className="max-w-[433px] mx-auto"
                                layout="responsive"
                            />
                        </div>
                        <div className="Medications_Considered_content wow slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                            <p className="text-base text-white font-normal ff_helvetica"><span className="gridient__span"></span> Sterile Compounding Labs </p>
                            <h2 className="ff_helvetica text-[44px] font-normal text-white mt-2"><span className="gridient__txt">Medications </span>Considered </h2>
                            <p className="ff_helvetica text-lg font-light text-white mt-30 mx__525">Our team have a deep understanding and extensive clinical experience with Men’s Hormone Health.  Our Practitioners and Doctor’s will consider a variety of complimentary medications that are known to support Men’s Hormone Health.</p>
                            <InternalLinkButton href="#" children="See All our Treatments" className='mt-10' />
                            {/* <a className="nav-item text-xl fw-normal lh-noraml text-white btn-gradient flex items-center justify-center w-full mt-[33px] Start_Treatment__btn wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s" href="#">See All our Treatments</a> */}

                        </div>
                    </div>
                </div>
            </section>

            <section className="Clinical_Data_sec">
                <div className="container background-logo">
                    <div className="Clinical_Data_main">
                        <div className="Clinical_Data_content wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                            <p className="text-base text-white font-normal ff_helvetica"><span className="gridient__span"></span> AI Powered Data-Driven Approach </p>
                            <h2 className="ff_helvetica text-[44px] font-normal text-white mt-2">Clinical<span className="gridient__txt"> Data  </span>is Everything</h2>
                            <p className="ff_helvetica text-lg font-light text-white mt-30">At Primal Zone, we are working with experts in the field to ensure we are using clinical data to drive the best outcomes, personalised for you.   In conjunction with the University of Canberra, our team are conducting studies about TRT.  If you a TRT patient, please consider taking the anonymous survey.  </p>
                            <InternalLinkButton href="#" children="Take the Anonymous Survey" className='mt-10' />
                            {/* <a className="nav-item text-xl fw-normal lh-noraml text-white btn-gradient flex items-center justify-center w-full mt-[33px] Start_Treatment__btn wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s" href="#">Take the Anonymous Survey</a> */}
                        </div>
                        <div className="Clinical_Data_im wow slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                            <Image
                                src={universityOfCanberra}
                                alt="University"
                                width={319}
                                height={319}
                                className="max-w-[319px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div class="scroll-margin" id="faqs">
                <section class="faqs-section position-relative">
                    <div class="container">
                        <div class="faqs_main">
                            <div class="faqs_content wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                                <p className="text-base text-white font-normal ff_helvetica"><span className="gridient__span"></span> Educate yourself</p>
                                <h2 className="ff_helvetica text-[44px] leading-none font-normal text-white mt-2">Frequently Asked <span className="gridient__txt">Questions</span></h2>
                                <p className="ff_helvetica text-lg font-light text-white mt-30">Here is a quick list of all the frequent questions our team receive and our responses for your conveneience.</p>
                            </div>
                            <div class="faqs-container lg:w-[50%] w-ful">
                                <div>
                                    {landingFaqs.map((item) => {
                                        return (
                                            <div
                                                key={item.id}
                                                className={`mb-2 border-b-[1px] border-[#c32b7dbf] py-[14px] px-4 cursor-pointer faq-item ${isHide === item.id ? "expanded" : ""
                                                    }`}
                                                onClick={() => {
                                                    setIsHide(isHide === item.id ? null : item.id);
                                                }}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <h4 className="text-white md:text-lg text-base font-semibold">{item.title}</h4>
                                                    <span className="text-white text-lg">
                                                        {isHide === item.id ? "-" : "+"}
                                                    </span>
                                                </div>
                                                {isHide === item.id && (
                                                    <div className="pt-3 pl-5">
                                                        {item.desc.map((innerItem) => {
                                                            return <p className="text-white pb-5 md:text-base text-sm">{innerItem}</p>;
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="reviews-section">
                <div className="container background-logo-left third wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s">
                    <div className="max-w-[761px] mx-auto w-full text-center">
                        <p className="text-base text-white font-normal ff_helvetica"><span className="gridient__span"></span> We value your feedback </p>
                        <h2 className="ff_helvetica text-[44px] font-normal text-white mt-2">Customer <span className="gridient__txt">Reviews</span></h2>
                        <p className="ff_helvetica text-lg font-light text-white mt-30">We started Primal Zone as patients ourselves.  Our prime directive is delivering the easiest, most convenient and highest quality experience possible with great economy.  Patients are at the centre of our universe and we are obsessed with making the experience outstanding. </p>
                    </div>
                    <div className="review-card_main">

                        <ReviewCard
                            count="5"
                            reviewStar={reviewStar}
                            customerProfile={customerProfile}
                            googleIcon={google}
                        />
                        <ReviewCard
                            count="5"
                            reviewStar={reviewStar}
                            customerProfile={customerProfile}
                            googleIcon={google}
                        />
                        <ReviewCard
                            count="5"
                            reviewStar={reviewStar}
                            customerProfile={customerProfile}
                            googleIcon={google}
                        />
                    </div>
                    <InternalLinkButton href="#" children="Write a Google Review" className='max-w-[553px] mt-10' />
                    {/* <a className="nav-item text-xl fw-normal lh-noraml text-white btn-gradient flex items-center justify-center w-full mt-[33px] Start_Treatment__btn max-w-[553px] mx-auto" href="#">Write a Google Review</a> */}
                </div>
            </section>

            <div className="scroll-margin" id="contact">
                <section className="Contact_Form_sec">
                    <div className="container">
                        <div className="Contact_Form_main">
                            <div className="Contact_Form_content wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                                <p className="text-base text-white font-normal ff_helvetica"><span className="gridient__span"></span> Get in touch </p>
                                <h2 className="ff_helvetica text-[44px] font-normal text-white mt-2"><span className="gridient__txt">Contact </span>Form</h2>
                                <p className="ff_helvetica text-lg font-light text-white mt-30">Got a questions or inquiry?  Fill out the form here and our team will respond in short order. </p>
                            </div>
                            <div className="Contact_Form wow slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                                <div className="talk_us_fields">
                                    <InputField
                                        type="text"
                                        name="name"
                                        id="name1"
                                        placeholder="NAME e.g. John Appleseed"
                                        className=""
                                    />
                                    <InputField
                                        type="email"
                                        name="email"
                                        id="email1"
                                        placeholder="EMAIL e.g. john@appleseed.com"
                                        className="mt-2"
                                    />
                                    <InputField
                                        type="text"
                                        name="phone1"
                                        id="phone1"
                                        placeholder="PHONE eg. 0412 345 678"
                                        className="mt-2"
                                    />
                                    <textarea className="mt-2" name="message" id="message" placeholder="Please leave a detailed message about your enquiry here. "></textarea>
                                    <div action="/upload" method="post" enctype="multipart/form-data">
                                        <label for="file-upload" className="custom-file-upload font-light text-lg ff_helvetica">

                                            <Image
                                                src={fileIcon}
                                                alt='file'
                                                width={29}
                                                height={22}
                                            />
                                            Upload File
                                        </label>
                                        <input id="file-upload" type="file" hidden name="file" />
                                    </div>
                                    <button type="button" className="nav-item text-xl fw-normal lh-noraml text-white btn-gradient flex items-center justify-center w-full mt-2 Start_Treatment__btn border-0">Submit</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="Social_Media_sec">
                <div className="container wow slideInUp" data-wow-duration="1.5s" data-wow-delay="0s">
                    <div className="Social_Media_main">
                        <div className="w-full mx-auto max-w-[547px] text-center">
                            <p className="text-base text-white font-normal ff_helvetica"><span className="gridient__span"></span> Stay in touch </p>
                            <h2 className="ff_helvetica text-[44px] font-normal text-white mt-2"><span className="gridient__txt">Social </span>Media </h2>
                            <p className="ff_helvetica text-lg font-light text-white mt-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>

                        </div>
                        <div className="Social_Media_cards">

                            <SocialMediaCard
                                cardImage={hCard1}
                                instagramIcon={instagramIcon}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                            <SocialMediaCard
                                cardImage={hCard2}
                                instagramIcon={instagramIcon}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                            <SocialMediaCard
                                cardImage={hCard3}
                                instagramIcon={instagramIcon}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            />
                        </div>
                        <div className="Social_Media_footer">
                            <a className='Social_Media_bx' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={footerInstagram}
                                    alt='Instagram'
                                    width={25}
                                    height={25}
                                />
                            </a>

                            <a className='Social_Media_bx' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={footerLinkedIn}
                                    alt='Instagram'
                                    width={23}
                                    height={23}
                                />
                            </a>

                            <a className='Social_Media_bx' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={footerFacebook}
                                    alt='Instagram'
                                    width={23}
                                    height={23}
                                />
                            </a>

                            <a className='Social_Media_bx' href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={footerYoutube}
                                    alt='Instagram'
                                    width={27}
                                    height={19}
                                />
                            </a>

                        </div>
                    </div>
                </div>
            </section>

            <LandingFooter/>



            <VideoPopUp setOpen={setOpen} open={open} videoId={videoId} />
        </>
    );
}