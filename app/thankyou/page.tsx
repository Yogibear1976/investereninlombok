import React from "react";

interface ThankYouPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const ThankYouPage = ({ searchParams }: ThankYouPageProps) => {
  const emailAddress = searchParams.email;
  return (
    <div>
      <div>
        {emailAddress && typeof emailAddress === "string" ? (
          <div>I heb je een mail gestuurd naar: {emailAddress}</div>
        ) : null}
      </div>
    </div>
  );
};

export default ThankYouPage;
