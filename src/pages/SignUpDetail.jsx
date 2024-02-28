import Geld from "@/components/logos/Geld";
import Vector from "@/components/logos/Vector";
import Currency from "@/components/steps/Currency";
import { useState } from "react";

export default function SignUpDetail() {
  const [steps, setSteps] = useState(<Currency />);
  return <Currency />;
}
