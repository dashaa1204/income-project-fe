import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <main>{children}</main>
    </div>
  );
}
