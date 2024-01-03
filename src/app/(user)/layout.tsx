import UserHeader from '@/layout/user/UserHeader';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <UserHeader />
      <>{children}</>
    </section>
  );
}
