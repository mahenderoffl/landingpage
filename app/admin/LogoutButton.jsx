"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-[color:var(--muted)] transition hover:border-white/30 hover:text-[color:var(--text)]"
    >
      Log out
    </button>
  );
}
