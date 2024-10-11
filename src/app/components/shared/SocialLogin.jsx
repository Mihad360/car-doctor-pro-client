import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider, { redirect: false });
  };
  if (session.status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center gap-10">
      <button
        onClick={() => handleSocialLogin("google")}
        className="text-4xl btn border border-gray-300"
      >
        <FcGoogle />
      </button>
      <button
        onClick={() => handleSocialLogin("github")}
        className="text-4xl btn border border-gray-300"
      >
        <FaGithub />
      </button>
    </div>
  );
};

export default SocialLogin;
