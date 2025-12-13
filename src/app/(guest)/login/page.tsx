import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-neutral-900">
      <a href="/api/auth/login">
        <button className="bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 shadow-2xl rounded-md py-2 px-4 flex items-center gap-2 justify-center cursor-pointer">
          <div>
            <Image
              src="/assets/google-icon.png"
              width={24}
              height={24}
              alt="Google Logo"
            />
          </div>
          <div className="text-black dark:text-neutral-300">Sign in with Google</div>
        </button>
      </a>
    </div>
  );
}
