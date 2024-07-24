import { Models } from "node-appwrite";

export interface Student extends Models.Document {
    userId: string;
    birthDate: Date;
    gender: Gender;
    address: string;
    occupation: string;
    parentContact: string;
    parentContactNumber: string;
    classTeacher: string;
    insuranceProvider: string;
    insurancePolicyNumber: string;
    upiCode: string;
    currentClass: string | undefined;
    schoolHistory: string | undefined;
    gradesHistory: string | undefined;
    identificationType: string | undefined;
    identificationNumber: string | undefined;
    identificationDocument: FormData | undefined;
    privacyConsent: boolean;
}

export interface Appointment extends Models.Document {
  student: Student;
  schedule: Date;
  status: Status;
  classTeacher: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}