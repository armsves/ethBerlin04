"use client";

import { useMbWallet } from "@mintbase-js/react";
import { useRouter } from "next/navigation";
import { LeaderboardPage } from "./pages/leaderboard";

export const HomePage = () => {
  const { connect, isConnected } = useMbWallet();
  const router = useRouter();

  return (
    <main className="px-4 lg:px-12 mx-auto flex flex-col items-center justify-center space-y-4">
      <LeaderboardPage />
    </main>
  );
};
