import Exclamation from '@/common/components/excalmation'
import InputField from '@/common/components/input/input'
import Card from '@/common/components/steper-card'

export default function ConsultingFee({treatmentPrice}) {
  return (
    <div>
        <h6 className="text-white text-xl mb-2 font-semibold">
          Blood Test Results
        </h6>
        <p className="text-white text-sm mb-5">
          Your Blood Test is key to evaluating and determining your eligibility for Testosterone.
        </p>
        <div className='flex items-center'>
            
            <div className='w-[50%]'>
                <Card>
                    <div className="flex gap-4 items-center mb-5">
                        <div className="block">
                        <Exclamation />
                        </div>
                        <h6 className="text-white font-semibold text-base">
                            Your payment information is secure with 3d security system to make you safe.
                        </h6>
                    </div>
                </Card>
                <div>
                    <InputField
                        type="number"
                        id="cardNumber"
                        label="Credit card number"
                        name="cardNumber"
                    />
                </div>
                <div className='flex'>
                    <InputField
                        type="text"
                        id="holderName"
                        label="Card holder name"
                        name="holderName"
                    />
                    <InputField
                        type="text"
                        id="expireDate"
                        label="Expiry date"
                        name="expireDate"
                    />
                    <InputField
                        type="text"
                        id="cvv"
                        label="CVV"
                        name="cvv"
                    />
                </div>
            </div>

            <div className='w-[50%]'>
                <Card>
                    <div className='bg-[#1C1F2D] w-fit m-auto py-6 px-8'>
                        <div className='text-center'>
                            <h5 className='text-white text-base font-medium'>Consulting Fee</h5>
                            <h2 class="text-white text-[36px] py-2">$350<span class="text-lg">+GST</span></h2>
                            <p className='text-[#FFFFFF99] text-sm font-medium'>GST will be applied based upon region.</p>
                        </div>
                        <div className='border-t border-b border-[#89909D33]'>
                            <h6 className='flex justify-between text-[#FFFFFFCC] text-sm font-medium'>Sub Total <span className='text-white'>$350.00</span></h6>
                            <h6 className='flex justify-between text-[#FFFFFFCC] text-sm font-medium'>Sub Total <span className='text-white'>$350.00</span></h6>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        
        
    </div>
  )
}
