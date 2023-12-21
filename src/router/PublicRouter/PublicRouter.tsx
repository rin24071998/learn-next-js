import AppCircularProgress from "@/components/AppCircularProgress/AppCircularProgress";
import { SUCCESS, WAITING } from "@/constant/common";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PublicRouter({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const {status, token} = useAuth();
    const router = useRouter();
    useEffect(()=>{
        if(status === SUCCESS && token){
          router.push('/dashboard');
        }
    },[status, token])
    if(status === WAITING || token){
        return <></>
    }
    return (
      <>
        <div>{children}</div>
      </>
    );
  }
  