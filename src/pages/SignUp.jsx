import SignUp from "@/components/signUp";
import { StepsProvider } from "@/context/StepsContext";

export default function signUp() {
  return (
    <div>
      <StepsProvider>
        <SignUp />
      </StepsProvider>
    </div>
  );
}
