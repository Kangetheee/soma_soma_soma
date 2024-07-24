import React from 'react'
import Image from "next/image";
import { redirect } from "next/navigation";
import RegisterForm from '@/components/forms/RegisterForm'
import { getStudent, getUser } from "@/lib/actions/student.actions";


const Register = async ({ params: { userId } }: SearchParamProps) => {
    const user = await getUser(userId);
    const student = await getStudent(userId);
  
    if (student) redirect(`/students/${userId}/new-appointment`);
  
    return (
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt="kusoma"
              className="mb-12 h-10 w-fit"
            />
  
            <RegisterForm user={user} />
  
            <p className="copyright py-12">© 2024 Kusoma</p>
          </div>
        </section>
  
        <Image
          src="/assets/images/register-img.png"
          height={1000}
          width={1000}
          alt="student"
          className="side-img max-w-[390px]"
        />
      </div>
    );
  };
  
  export default Register;