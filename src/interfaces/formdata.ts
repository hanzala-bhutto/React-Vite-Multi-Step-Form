import { AddsonData, PlanData } from ".";

export interface FormData {
    billing: string;
    infoForm: {
        name: string,
        email: string,
        phone: string,
    };
    planForm: PlanData;
    addonsForm: AddsonData[];
}
  