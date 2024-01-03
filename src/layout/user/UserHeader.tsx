import Link from 'next/link';

const UserHeader = () => {
  return (
    <>
      Header user
      <div>
        <Link href={'/dashboard'}>dashborad</Link>
      </div>
      <div>
        <Link href={'/user'}>user</Link>
      </div>
    </>
  );
};
export default UserHeader;
