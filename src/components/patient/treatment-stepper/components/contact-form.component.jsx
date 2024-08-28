import InputField from "@/common/components/input/input";
import calender from "@/common/assets/svgs/calendar-2.svg"
import Image from "next/image";

const ContactForm = () => (
    <div className="mt-7">
      <p className="text-white text-sm mb-5">
        Please provide the exact name, date of birth and address as it appears on
        your license.
      </p>
      <div className="flex gap-5">
        <div className="w-[50%]">
          <div className="mb-4">
            <InputField
              type="text"
              id="first name"
              label="First Name *"
              name="first name"
            />
          </div>
  
          <div className="mb-4">
            <InputField
              type="text"
              id="last name"
              label="Last Name *"
              name="last name"
            />
          </div>
  
          <div className="mb-4">
            <InputField
              type="text"
              id="email"
              label="Email Address *"
              name="email"
            />
          </div>
          <div className="mb-4">
            <InputField
              type="text"
              id="mobile"
              label="Mobile Phone *"
              name="mobile"
            />
          </div>
          <div className="mb-4">
            <InputField
              type="text"
              id="occupation"
              label="Occupation *"
              name="occupation"
            />
          </div>
        </div>
        <div className="w-[20%]">
          <div className="mb-4">
            <InputField type="text" id="date" label="Date of Birth *" name="last name" icon={<Image src={calender} alt="" />} />
          </div>
          <div className="mb-4">
            <InputField type="text" id="height" label="Height *" name="height" icon={"cm"} />
          </div>
          <div className="mb-4">
            <InputField
              type="text"
              id="weight*"
              label="weight *"
              name="weight*"
              icon={"kg"}
            />
          </div>
          <div className="mb-4">
            <InputField
              type="text"
              id="body_fat"
              label="Body Fat *"
              name="body_fat"
              icon={"%"}
            />
          </div>
          <div className="mb-4">
            <InputField
              type="text"
              id="weekly_work"
              label="Weekly Work *"
              name="weekly_work"
              icon={"hrs"}
            />
          </div>
        </div>
      </div>
    </div>
  );


export default ContactForm;