"use client";

interface FooterItemProps {
  onClick: () => void;
  label: string;
}

export const FooterItem: React.FC<FooterItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className='text-primary my-2 uppercase text-xs font-normal opacity-60 hover:opacity-100 hover:text-sky transition duration-300 ease-in-out cursor-pointer'
    >
      {label}
    </div>
  );
};
