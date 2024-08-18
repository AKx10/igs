"use client";

import FormLayout from "./FormLayout";

const ReviewNSubmitForm = ({
  onPressGoBack = () => {},
  onPressSubmit = () => {},
}) => {
  return (
    <FormLayout
      title={"Review & Submit"}
      isNextButton={true}
      isPrevButton={true}
      nextButtonText="SUBMIT"
      prevButtonText="GO BACK"
      onPressPrev={onPressGoBack}
      onPressNext={onPressSubmit}
    >
      <section className="flex">
        <ViewAllInfo title="Personal Information">
          <KeyNValueText title="Name" value="Arjun Kumar" />
          <KeyNValueText title="Name" value="Arjun Kumar" />
          <KeyNValueText title="Name" value="Arjun Kumar" />
        </ViewAllInfo>
      </section>
      <section className="flex">
        <ViewAllInfo title="Address Details">
          <KeyNValueText title="Name" value="Arjun Kumar" />
          <KeyNValueText title="Name" value="Arjun Kumar" />
          <KeyNValueText title="Name" value="Arjun Kumar" />
        </ViewAllInfo>
      </section>
      <section className="flex">
        <ViewAllInfo title="Payment Information">
          <KeyNValueText title="Name" value="Arjun Kumar" />
          <KeyNValueText title="Name" value="Arjun Kumar" />
          <KeyNValueText title="Name" value="Arjun Kumar" />
        </ViewAllInfo>
      </section>
      <section className="flex w-full text-black text-[10px]">
        <span>
          Please review your information before submitting. You can navigate
          back to previous steps to make changes if necessary.
        </span>
      </section>
    </FormLayout>
  );
};

export default ReviewNSubmitForm;

const ViewAllInfo = ({ title = "", children }) => {
  return (
    <div className="flex flex-col gap-2 text-black">
      <span className="text-[20px] font-medium">{title}</span>
      {children}
    </div>
  );
};

const KeyNValueText = ({ title = "", value = "" }) => {
  return (
    <div className="flex flex-row text-[12px] font-inter font-medium text-black">
      <span>{title}: </span>
      <span> {value}</span>
    </div>
  );
};
