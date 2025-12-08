import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <a href="/api/auth/login">
        <button className="bg-white rounded-md py-2 px-4 flex items-center gap-2 justify-center cursor-pointer">
          <div>
            {/*<Image
              src="/assets/google-icon.ico"
              width={24}
              height={24}
              alt="Google Logo"
            />*/}
          </div>
          <div className="text-black">Sign in with Google</div>
        </button>
      </a>
    </div>
  );
}
