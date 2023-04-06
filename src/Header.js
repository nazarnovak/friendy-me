import React from "react";

export const Header: React.Component = () => {
  return (
    <React.Fragment>
      <header id="header">
        <div id="logo">friendy</div>
        <SignInButton />
      </header>
    </React.Fragment>
  );
};

const SignInButton = () => {
  const handleClick = () => {
    window.location.href = "/signin";
  };

  return (
    <button id="sign-in" onClick={handleClick}>
      Sign in
    </button>
  );
};

// const ContactUsModal = ({ isOpen, closeModal }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return <div id="contact-us-modal" onClick={closeModal}></div>;
// };

// const Status = ({ text }) => {
//   return <div id="status">{text}</div>;
// };

// let statusText = "Make a friend";
//  if (window.location.pathname == 'you') {
//    statusText = 'Your values';
//  }

// <Status text={statusText} />