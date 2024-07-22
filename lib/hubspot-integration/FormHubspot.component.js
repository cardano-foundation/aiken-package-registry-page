import { useEffect } from 'react';

export const FormHubspot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "7759219",
          formId: "e8be9059-f5cd-4082-80d4-aa620a20cbf4",
          target: '#formHubspot',
        });
      }
    });
  }, []);

  return <div id="formHubspot" className="contactForm"></div>;
};