import LoginPage from "./login/page";
import Dashboard from "./dashboard/page";
import Toast from "./Components/Toast";
import { NextUIProvider } from "@nextui-org/system";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Dashboard />
      </NextUIProvider>

      {/* <LoginPage /> */}
    </>
  );
}
