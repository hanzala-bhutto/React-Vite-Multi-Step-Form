import { AddsonData, PlanData } from ".";

export interface FormData {
    billing: string;
    planForm: PlanData;
    addonsForm: AddsonData[];
}
  