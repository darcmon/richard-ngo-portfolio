import React from 'react';

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onContact?: () => void;
}

const ContactCTA: React.FC<ContactCTAProps> = ({
  title = "Let's Work Together",
  subtitle = 'Have a project in mind?',
  buttonText = 'Get In Touch',
  onContact,
}) => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <div className="text-4xl mb-4">📬</div>
      <h3 className="text-lg font-semibold text-cyan-100 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{subtitle}</p>
      <button
        onClick={onContact}
        className="
          px-5 py-2 rounded-lg
          bg-gradient-to-r from-pink-600/80 to-purple-600/80
          border border-pink-400/30
          text-white font-medium text-sm
          hover:from-pink-500/80 hover:to-purple-500/80
          hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]
          transition-all duration-300
        "
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ContactCTA;
