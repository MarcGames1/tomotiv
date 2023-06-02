'use client'
import { useRouter } from "next/navigation";

const ActiveLink = ({ href, children }) => {
  const router = useRouter();

  return (
    <Link className={router.asPath === href ? 'active' : null} href={href}>
      {children}
    </Link>
  );
};

export default ActiveLink