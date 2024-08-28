import Card from "@/common/components/steper-card";

const Medication = () => {
    return (
      <div className="mt-7">
        <p className="text-white text-sm mb-5">
          Please provide details about Medications for consideration.{" "}
        </p>
        <div className="flex gap-[26px]">
          <div className="w-[50%]">
            <p className="text-white font-medium opacity-[0.8] mb-5">
              Please select the Medications you would like our team the consider
            </p>
  
            <div className="mb-4">
              <input
                id="orange-checkbox1"
                type="checkbox"
                class="w-4 h-4 accent-[#6122B34D] focus:border focus:border-[red] text-white"
              />
              <label
                for="orange-checkbox1"
                class="ms-2 text-base font-medium text-white"
              >
                Testosterone Enanthate/Cypionate
              </label>
            </div>
  
            <div className="mb-4">
              <input
                id="orange-checkbox2"
                type="checkbox"
                class="w-4 h-4 accent-[#6122B34D] focus:border focus:border-[red] text-white"
              />
              <label
                for="orange-checkbox2"
                class="ms-2 text-base font-medium text-white"
              >
                Testosterone E+Cypionate in MCT Oil
              </label>
            </div>
  
            <div>
              <input
                id="orange-checkbox3"
                type="checkbox"
                class="w-4 h-4 accent-[#6122B34D] focus:border focus:border-[red] text-white"
              />
              <label
                for="orange-checkbox3"
                class="ms-2 text-base font-medium text-white"
              >
                Melotonin
              </label>
            </div>
          </div>
          <div className="w-[50%]">
            <p className="text-white font-medium opacity-[0.8]">
              Dave Lee Email Protocol
            </p>
            <Card>
              <h6 className="text-white opacity-[0.8] text-xs font-semibold mb-3">
                Copy and paste the email you received from Dave with your protocol
                here...
              </h6>
            </Card>
          </div>
        </div>
      </div>
    );
};

export default Medication;