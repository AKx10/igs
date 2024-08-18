import { useState } from "react";
import AddressDetailsForm from "../login/AddressDetailsForm";
import PaymentInfoForm from "../login/PaymentInfoForm";
import PersonalInfoForm from "../login/PersonalInfoForm";
import ReviewNSubmitForm from "../login/ReviewNSubmitForm";
import Stepper from "../stepper/Stepper";
import { motion } from "framer-motion";

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const formVariants = {
    active: {
      x: 0,
      opacity: 1,
      pointerEvents: "auto",
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
      zIndex: 2,
    },
    inactive: (current, direction) => {
      const moveLeft = current > direction ? "100%" : "-100%";
      return {
        x: `${moveLeft}%`,
        pointerEvents: "none",
        scale: 0.7,
        transition: { type: "spring", stiffness: 300, damping: 30 },
        zIndex: 1,
      };
    },
  };
  return (
    <div className="flex h-full flex-col items-center justify-between py-10 bg-[#E6E6E6] gap-7">
      <section className="flex w-full lg:px-24 sm:px-2">
        <Stepper currentStep={currentStep} totalStep={4} />
      </section>

      <div className="flex flex-1 w-[100%] h-[100%] bg-transparent rounded-[18px] px-[50px]  flex-row ">
        {[
          <PersonalInfoForm onPressNext={nextStep} />,
          <AddressDetailsForm
            onPressNext={nextStep}
            onPressGoBack={prevStep}
          />,
          <PaymentInfoForm onPressNext={nextStep} onPressGoBack={prevStep} />,
          <ReviewNSubmitForm
            onPressSubmit={() => {}}
            onPressGoBack={prevStep}
          />,
        ].map((Form, index) => (
          <motion.div
            key={index}
            custom={index + 1}
            variants={formVariants}
            animate={currentStep === index + 1 ? "active" : "inactive"}
            initial="inactive"
            className=" w-full"
          >
            {Form}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FormContainer;
