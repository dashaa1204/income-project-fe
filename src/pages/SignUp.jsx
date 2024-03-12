import Vector from "@/components/logos/Vector";
import Router, { useRouter } from "next/router";
import { nanoid } from "nanoid";

export default function signUp() {
  const router = useRouter();
  const beUrl = "http://localhost:3000/add-user";
  const id = nanoid(4);
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      repassword: e.target.repassword.value,
      id: nanoid(),
    };
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    if (
      data.name &&
      data.email &&
      data.password &&
      data.password === data.repassword
    ) {
      const fetchedData = await fetch(beUrl, option);
      const fetchedJson = await fetchedData.text();
      router.push("/signUpDetail");
      console.log("user added successfully");
    } else {
      alert("Inputs can not be empty");
    }
  }
  return (
    <div className="w-full bg-color-white flex">
      <div className="h-screen w-1/2 inline-flex flex-col items-center gap-10 justify-center">
        <div className="flex p-[5px] item-center gap-[9px] items-center">
          <Vector />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="18"
            viewBox="0 0 49 18"
            fill="none"
          >
            <path
              d="M8.16707 8.63249H15.7556V15.0752C14.2206 16.567 11.8857 17.3453 9.16158 17.3453C3.86473 17.3453 0.535278 14.2969 0.535278 9.38918C0.535278 4.48149 3.86473 1.41148 8.83728 1.41148C11.6046 1.41148 13.7017 2.25465 15.1719 3.6167L13.2477 5.77868C12.21 4.87065 10.6317 4.28691 8.8589 4.28691C5.76727 4.28691 3.71339 6.25431 3.71339 9.38918C3.71339 12.6322 5.85375 14.5347 9.26968 14.5347C10.6317 14.5347 11.8641 14.2969 12.8802 13.5402V11.3133H8.16707V8.63249Z"
              fill="black"
            />
            <path
              d="M29.4901 11.1404C29.4901 11.335 29.4901 11.789 29.4685 12.0268H20.3017C20.626 13.778 21.8367 14.7725 23.7825 14.7725C25.1661 14.7725 26.3985 14.2536 27.1984 13.2591L29.0793 14.859C27.9983 16.3508 26.2688 17.2804 23.5663 17.2804C19.6099 17.2804 17.2749 14.859 17.2749 11.0971C17.2749 7.35692 19.8044 4.91389 23.4149 4.91389C27.4795 4.91389 29.4901 7.50826 29.4901 11.1404ZM23.4149 7.40016C21.9016 7.40016 20.6908 8.15686 20.3233 9.86482H26.5714C26.3985 8.56763 25.4688 7.40016 23.4149 7.40016Z"
              fill="black"
            />
            <path
              d="M31.4359 17.0426V0.654785H34.4194V17.0426H31.4359Z"
              fill="black"
            />
            <path
              d="M42.3221 17.302C38.863 17.302 36.6145 14.9022 36.6145 11.1188C36.6145 7.3353 38.8846 4.95713 42.1924 4.95713C43.4031 4.95713 44.8517 5.30304 45.8245 6.25431V0.654785H48.7648V17.0426H45.8678V15.8967C44.9381 17.021 43.468 17.302 42.3221 17.302ZM42.9707 14.6212C44.095 14.6212 45.2624 14.1672 45.8678 13.0646V9.15137C45.2624 8.17848 44.0517 7.63798 42.9059 7.63798C41.0249 7.63798 39.6845 8.89193 39.6845 11.1188C39.6845 13.3024 40.9817 14.6212 42.9707 14.6212Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Create Geld account</p>
          <p>Sign up below to create your Wallet account</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              className="w-[384px] rounded-lg border h-12 pl-4"
              placeholder="Name"
            />
            <input
              name="email"
              type="email"
              className="w-[384px] rounded-lg border h-12 pl-4"
              placeholder="Email"
            />
            <input
              name="password"
              type="password"
              className="w-[384px] rounded-lg border h-12 pl-4"
              placeholder="Password"
            />
            <input
              name="repassword"
              type="password"
              className="w-[384px] rounded-lg border h-12 pl-4"
              placeholder="Re-password"
            />
            <input
              type="submit"
              value={"Sign up"}
              className="flex w-[384px] h-12 justify-center border rounded-lg bg-blue-600 text-white"
            />
          </form>
        </div>
        <div className="flex items-baseline gap-2">
          <p>Already have account?</p>
          <button
            className="text-blue-600"
            onClick={() => router.push("/login")}
          >
            Sign in
          </button>
        </div>
      </div>
      <div className=" bg-blue-600 w-1/2 h-screen"></div>
    </div>
  );
}
