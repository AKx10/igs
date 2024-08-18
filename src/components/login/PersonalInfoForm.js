"use client";

import TextInput from "../textarea/TextInput";
import FormLayout from "./FormLayout";

const PersonalInfoForm = ({ onPressNext = () => {} }) => {
  return (
    <FormLayout
      title={"Personal Information"}
      isNextButton={true}
      nextButtonText="Next"
      onPressNext={onPressNext}
    >
      <section className="flex">
        <TextInput label="Name" placeholder="Enter Name" formError="" />
      </section>
      <section className="flex">
        <TextInput label="Email" placeholder="Enter Email" formError="" />
      </section>
      <section className="flex w-full">
        <TextInput
          label="Phone number."
          placeholder="Enter Phone number"
          formError=""
        />
      </section>
    </FormLayout>
  );
};

export default PersonalInfoForm;
