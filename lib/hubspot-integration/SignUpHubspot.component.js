"use client";
import { useEffect } from 'react';

export const SignUpHubspot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "7759219",
          formId: "9d7306b9-fa2b-473d-8fb8-4ea4ba6a4bab",
          target: '#formHubspot',
        });
      }
    });
  }, []);

  return <div id="formHubspot" className="signUpForm"></div>;
};

