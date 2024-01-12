import { SUCCESS, WAITING } from '@/constant/common';
import { IToken } from '@/interface/interface';
import { useAppSelector } from '@/redux/hooks';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useAuth(): IToken {
  const [token, setToken] = useState<IToken>({
    status: WAITING,
    token: '',
  });
  const pathname = usePathname();
  const { accesstoken } = useAppSelector((state) => state?.user);
  useEffect(() => {
    setToken({
      status: SUCCESS,
      token: accesstoken,
    });
  }, [pathname]);
  return token;
}
