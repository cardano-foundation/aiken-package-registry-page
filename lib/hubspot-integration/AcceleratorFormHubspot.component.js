"use client";
import { useEffect } from 'react';

export const AcceleratorForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "7759219",
          formId: "55021061-2e72-402c-9882-404c0bf498a6",
          target: '#formHubspot',
        });
      }
    });
  }, []);

  return <div id="formHubspot" className="signUpForm"></div>;
};