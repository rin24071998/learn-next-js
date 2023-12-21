import { SUCCESS, WAITING } from '@/constant/common';
import { IToken } from '@/interface/interface';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useAuth(): IToken {
  const [token, setToken] = useState<IToken>({
    status: WAITING,
    token: '',
  });
  const pathname = usePathname();
  useEffect(() => {
    const getToken = localStorage?.getItem('token') || '';
    setToken({
      status: SUCCESS,
      token: getToken,
    });
  }, [pathname]);
  return token;
}
