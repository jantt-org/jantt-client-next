import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import paths from '@/utils/paths';

const Navbar = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const handleLogout = async () => {
    //? TODO: API CALL
    router.push('/');
  };
  return (
    <header className="h-16 border-b border-gray-800 flex justify-between items-center px-6 font-medium">
      <Link href={paths.home}>
        <a className="font-bold text-xl">LOGO</a>
      </Link>
      <div className="space-x-3">
        <Link href={paths.works}>
          <a className="font-semibold hover:underline">Works</a>
        </Link>
        <Link href={paths.blogs}>
          <a className="font-semibold hover:underline">Blogs</a>
        </Link>
        <Link href={paths.academics}>
          <a className="font-semibold hover:underline">Academics</a>
        </Link>
      </div>
      <div className="space-x-3">
        {isLogin ? (
          <>
            <Link href={paths.profile}>
              <a className="font-semibold hover:underline">Profile</a>
            </Link>
            <button onClick={handleLogout} className="font-semibold hover:underline">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href={paths.signin}>
              <a className="font-semibold hover:underline">Sign In</a>
            </Link>
            <Link href={paths.contact}>
              <a className="font-semibold hover:underline">Contact</a>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
