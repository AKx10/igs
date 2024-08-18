"use client";

import TextInput from "../textarea/TextInput";
import FormLayout from "./FormLayout";
import ExpDatePicker from "../textarea/ExpDatePicker";

const PaymentInfoForm = ({
  onPressNext = () => {},
  onPressGoBack = () => {},
}) => {
  return (
    <FormLayout
      title={"Payment Information"}
      isNextButton={true}
      isPrevButton={true}
      nextButtonText="Next"
      prevButtonText="GO BACK"
      onPressNext={onPressNext}
      onPressPrev={onPressGoBack}
    >
      <section className="flex">
        <TextInput
          label="Card number"
          placeholder="Enter card number"
          formError=""
        />
      </section>
      <section className="flex">
        <ExpDatePicker label="Expiry date" />
      </section>
      <section className="flex w-full">
        <TextInput label="CVV" formError="" />
      </section>
    </FormLayout>
  );
};

export default PaymentInfoForm;
