import { Eye, EyeClosed, Loader2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";
import Button from "../components/Button";
import Input from "../components/Input";
import SocialButton from "../components/SocialButton";

// Main Login Component
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLogginIng } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Login Form */}

      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        {/* Logo and Header */}

        <div className="w-full max-w-md space-y-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MessageCircle></MessageCircle>
              <span className="text-xl font-semibold text-text inline">
                Sandesh
              </span>
            </div>

            <h1 className="text-2xl font-bold text-text/80 mb-2">
              Login and connect with Loved ones
            </h1>
            <p className=" text-lg text-text/60">
              Chat, share moments and laugh together.
            </p>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="w-full max-w-md flex justify-center space-x-3 mb-6">
          <SocialButton
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285f4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34a853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#fbbc05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#ea4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            }
            provider="Google"
          />
        </div>

        {/* Divider */}
        <div className="w-full max-w-md space-y-8 mb-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-bg text-text/70">
                or continue with email
              </span>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="*************"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />

              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeClosed className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Remember Me and Forgot Password */}

            <Button type="submit" disabled={isLogginIng}>
              {isLogginIng ? (
                <>
                  <Loader2 className="size-5 animate-spin"></Loader2>
                  Loading....
                </>
              ) : (
                "Log In"
              )}
            </Button>
          </form>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-2">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            Sign Up
          </Link>
        </p>
      </div>

      {/* Right Side - Promotional Content */}
      <AuthImagePattern
        title={"Join our community"}
        subtitle={
          "Connect with frinds, share momnents, and saty in touch your loved ones"
        }
      ></AuthImagePattern>
    </div>
  );
};

export default Login;
