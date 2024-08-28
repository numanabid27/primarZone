import { ADD_NEW_TREATMENT } from "@/components/patient/add-new-treatment/add-treatment.constant";
import TreatmentForm from "@/components/patient/treatment-stepper/treatment-stepper.component";

export async function generateMetadata({ params }) {
    const treatment = ADD_NEW_TREATMENT.find((item) => item.slug.toString() === params.slug);

    return {
        title: treatment ? `Primal Zone | ${treatment.title}` : 'Primal Zone | Not Found',
    };
}

export default function TreatmentFormPage({ params }) {

    const treatment = ADD_NEW_TREATMENT.find((item) => item.slug.toString() === params.slug);
  
    if (!treatment) {
        return <div>Not Found</div>;
    }

    return (
        <TreatmentForm treatment={treatment} />
       
    );
}


