import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}
export const CustomButton = ({
  children,
  onClick,
  disabled = false,
}: CustomButtonProps) => {
  return (
    <button type="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
