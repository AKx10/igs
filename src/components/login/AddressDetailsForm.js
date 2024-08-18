"use client";

import { useState } from "react";
import SelectInput from "../textarea/SelectInput";
import TextInput from "../textarea/TextInput";
import FormLayout from "./FormLayout";

const AddressDetailsForm = ({
  onPressNext = () => {},
  onPressGoBack = () => {},
}) => {
  const [state, setState] = useState("");
  const listOfstates = [
    {
      id: 1,
      value: "Tamil Nadu",
    },
    {
      id: 2,
      value: "Karnataka",
    },
    {
      id: 3,
      value: "Kerala",
    },
    {
      id: 4,
      value: "Andrapradesh",
    },
  ];
  return (
    <FormLayout
      title={"Address Details"}
      isNextButton={true}
      isPrevButton={true}
      nextButtonText="Next"
      prevButtonText="GO BACK"
      onPressNext={onPressNext}
      onPressPrev={onPressGoBack}
    >
      <section className="flex">
        <TextInput label="Address" placeholder="Enter address" formError="" />
      </section>
      <section className="flex">
        <TextInput label="City" placeholder="Enter city" formError="" />
      </section>
      <section className="flex">
        <SelectInput
          label="State"
          placeholder="Choose your state"
          options={listOfstates}
          value={state}
          handleChange={(e, value) => {
            setState(value);
          }}
        />
      </section>
      <section className="flex w-full">
        <TextInput
          label="Postal code"
          placeholder="Enter postal code"
          formError=""
        />
      </section>
    </FormLayout>
  );
};

export default AddressDetailsForm;
