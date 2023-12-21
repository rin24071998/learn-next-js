import * as React from 'react';
import Button from '@mui/material/Button';
import { ReactElement } from 'react';
interface ButtonProps {
  disable?: boolean;
  className?: string;
  onClick?: () => void;
  variant?: string;
  children: ReactElement;
}
export default function AppButton(props: ButtonProps) {
  const { disable, className, onClick, variant, children } = props;
  return <Button variant="contained" onClick={onClick}>{children}</Button>;
}
