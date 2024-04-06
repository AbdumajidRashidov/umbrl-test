import MainLayout from "@/layouts/main";
import { Pricing } from "@/pages/pricing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainLayout>
        <Pricing />
      </MainLayout>
    </main>
  );
}
