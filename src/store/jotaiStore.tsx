import { atom } from "jotai";
import { FormData } from "../interfaces";

const currentStepAtom = atom(0)

const formAtom = atom<FormData>({
    billing: 'monthly',
    planForm: {
      plan: 'arcade',
      billing: {
        monthly: 9,
        yearly: 90,
      },
    },
    addonsForm: [],
  });

  // Create a derived atom for 'total'
  const totalAtom = atom((get) => {
    const $formAtom = get(formAtom);
    const planCost = $formAtom.planForm.billing[$formAtom.billing as 'monthly' | 'yearly'];
    const addonsCost = $formAtom.addonsForm.reduce(
      (total, addson) => total + addson.billing[$formAtom.billing as 'monthly' | 'yearly'],
      0
    );
    return planCost + addonsCost;
  });

export {currentStepAtom, formAtom, totalAtom};