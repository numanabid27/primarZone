import Card from "@/common/components/steper-card";

const DavLee = () => {
    return (
      <div className="mt-7">
        <p className="text-white text-sm mb-5">
          If you are an existing client of Dave Lee, please fill out the
          following.
        </p>
        <div className="flex gap-[26px]">
          <div className="w-[50%]">
            <p className="text-white font-medium opacity-[0.8] mb-5">
              Please answer the following questions
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
                Are you currently on TRT through another clinic?
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
                Are you a current patient of David Lee?
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
                Was your last protocol written for you within the last 3 months?
              </label>
            </div>
          </div>
          <div className="w-[50%]">
            <p className="text-white font-medium opacity-[0.8]">
              Dave Lee Email Protocol
            </p>
            <Card>
                <h6 className="text-white opacity-[0.8] text-xs font-semibold mb-3">
                    Fatigue
                </h6>
                <ul className="ml-4">
                    <li className="text-white mb-3 font-medium">
                    Lorem Ipsum Sevire Dio Sapere Venturi Angulari Leviosa Del Mondo
                    Carnivale. Lorem Ipsum Sevire Dio Sapere Venturi Angulari
                    Leviosa Del Mondo Carnivale.Lorem Ipsum Sevire Dio Sapere
                    Venturi Angulari Leviosa Del Mondo Carnivale.Lorem Ipsum Sevire
                    Dio Sapere Venturi Angulari Leviosa Del Mondo Carnivale.Lorem
                    Ipsum Sevire Dio Sapere Venturi Angulari Leviosa Del Mondo
                    Carnivale.
                    </li>
                    <li className="text-white font-medium">
                    Lorem Ipsum Sevire Dio Sapere Venturi Angulari Leviosa Del Mondo
                    Carnivale. Lorem Ipsum Sevire Dio Sapere Venturi Angulari
                    Leviosa Del Mondo Carnivale.Lorem Ipsum Sevire Dio Sapere
                    Venturi Angulari Leviosa Del Mondo Carnivale.Lorem Ipsum Sevire
                    Dio Sapere Venturi Angulari Leviosa Del Mondo Carnivale.Lorem
                    Ipsum Sevire Dio Sapere Venturi Angulari Leviosa Del Mondo
                    Carnivale.
                    </li>
                </ul>
            </Card>
          </div>
        </div>
      </div>
    );
};

export default DavLee;