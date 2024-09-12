"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import "./login.css";

// Images
import etdLogo from "../../public/Images/ETD.svg";
import google from "../../public/Images/Icons/Google.png";
import apple from "../../public/Images/Icons/appleLogo.png";
import facebook from "../../public/Images/Icons/fbLogo.png";
import showPassword from "../../public/Images/Icons/view.png";
import hidePassword from "../../public/Images/Icons/closed-eye.png";
import User from "../../public/Images/Icons/user.png";
import Password from "../../public/Images/Icons/password.png";
import { usePostLoginApiMutation } from "@/Redux/Query/login";
import { redirect, useRouter } from "next/navigation";
import { Input } from "@nextui-org/input";
import { Button, Divider } from "@nextui-org/react";
import { toast, Toaster } from "sonner";

type Inputs = {
  username: string;
  password: string;
};

type PostResponse = {
  data: {
    created_at: string;
    id: number;
    role_id: number;
    updated_at: string;
    username: string;
  };
  message: string;
  token: string;
};

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [postLogin, { data: postData, isLoading: postLoading, error: postError }] = usePostLoginApiMutation();

  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>();

  const onSubmitHandler: SubmitHandler<Inputs> = async (data) => {
    try {
      const res: any = await postLogin(data).unwrap();

      // alert(res.message);
      console.log(res);
      localStorage.setItem("token", res.token);
      toast.success(res.message);
      return router.push("/dashboard");
    } catch (err: any) {
      console.error(err);
      const errorMessage = (err as Error).message || "An unknown error occurred";
      // toast.error(err.data?.message);
    }
  };

  const handleShowPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="login h-screen flex flex-col w-full">
      <div className="flex flex-col item-center justify-center w-full h-full">
        <div className="flex flex-row justify-center items-center mx-auto h-[80%]">
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="flex flex-col items-center gap-6 rounded-3xl w-[min(auto,90%)] p-8 bg-white"
          >
            <div className="flex flex-col justify-center items-center gap-1">
              <Image src={etdLogo} alt="etd logo" className="w-[230px] pb-4" priority={true} />
              <span className="text-sm font-medium">Please enter your credentials</span>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center w-full">
              <div className="flex flex-col gap-3 w-full">
                <div>
                  <label className="input input-md input-bordered flex items-center gap-2 focus-within:outline-primary">
                    <Input
                      {...register("username", { required: true })}
                      type="text"
                      size="lg"
                      placeholder="Username / Phone Number"
                      startContent={<Image src={User} alt="Show/Hide Password" className="w-5 mx-1" />}
                    />
                  </label>
                  {/* {errors.username && <p className="text-xs text-red-500 pt-1">Username is required</p>} */}
                </div>

                <div>
                  <label className="input input-md input-bordered flex items-center gap-2">
                    <Input
                      {...register("password", { required: true })}
                      type={passwordVisible ? "text" : "password"}
                      size="lg"
                      placeholder="Password"
                      startContent={<Image src={Password} alt="Show/Hide Password" className="w-5 mx-1" />}
                      endContent={
                        <Button
                          // onClick={handleShowPassword}
                          onClick={() =>
                            toast("Event has been created", {
                              action: {
                                label: "Undo",
                                onClick: () => console.log("Undo"),
                              },
                            })
                          }
                          disableRipple
                          className="bg-transparent w-[10px]"
                          size="sm"
                          isIconOnly
                        >
                          {passwordVisible ? (
                            <Image src={showPassword} alt="Show/Hide Password" className="w-5" />
                          ) : (
                            <Image src={hidePassword} alt="Show/Hide Password" className="w-5" />
                          )}
                        </Button>
                      }
                    />
                  </label>
                  {/* {errors.password && <p className="text-xs text-red-500 pt-1">Password is required</p>} */}
                </div>

                <Button
                  color="primary"
                  variant="shadow"
                  type="submit"
                  isLoading={postLoading}
                  disabled={!isValid || postLoading}
                >
                  {postLoading ? "Signing In..." : "Sign In"}
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-center items-center gap-5 pb-5">
                <Divider className="w-10" />
                <p className="text-xs">Or Sign in with</p>
                <Divider className="w-10" />
              </div>
              <div className="flex gap-2 justify-center items-center flex-wrap">
                <Button variant="bordered" className="max-w-[120px]">
                  <Image src={google} alt="Google" width={20} />
                  Google
                </Button>
                <Button variant="bordered" className="max-w-[120px]">
                  <Image src={apple} alt="Apple ID" width={20} />
                  Apple ID
                </Button>
                <Button variant="bordered" className="max-w-[120px]">
                  <Image src={facebook} alt="Facebook" width={20} />
                  Facebook
                </Button>
              </div>
              <span className="self-center text-sm py-4 flex-wrap">
                Don't have an account?
                <Button className="font-bold bg-transparent ml-[-5px]" disableRipple>
                  Request Now
                </Button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
