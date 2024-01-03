import Link from 'next/link';

const AdminHeader = () => {
  return (
    <>
      Header admin
      <div>
        <Link href={'/dashboard'}>dashborad</Link>
      </div>
      <div>
        <Link href={'/history'}>history</Link>
      </div>
    </>
  );
};
export default AdminHeader;
