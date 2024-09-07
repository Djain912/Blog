import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-xl rounded-lg">
      <h1 className="text-4xl font-semibold mb-4 text-primary">Disclaimer</h1>
      <div className="text-base-content leading-loose">
        <p>
          The information provided on this website is for educational and
          informational purposes only and should not be construed as investment
          advice. I, Sumit Jain, am not a SEBI-registered analyst or advisor.
        </p>
        <p>
          The content shared here, including stock picks, market analysis, and
          investment ideas, is based on my personal experience and research.
        </p>
        <p>
          Please note that all investments carry risk, and readers are advised
          to conduct their own due diligence and consult with a SEBI-registered
          financial advisor before making any investment decisions.
        </p>
        <p>
          The website does not guarantee accuracy, completeness, or reliability
          of the information provided, and I am not responsible for any losses
          incurred as a result of the information posted here.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
