import Geld from "@/components/logos/Geld";
import Vector from "@/components/logos/Vector";
import Balance from "@/components/steps/Balance";
import Currency from "@/components/steps/Currency";
import { useState } from "react";
import { useStepData } from "@/context/stepsContext";
export default function SignUpDetail() {
  const { steps } = useStepData();
  return <div>{steps}</div>;
}
