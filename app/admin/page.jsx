import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { listLeads } from "@/lib/db";
import AdminLogin from "./AdminLogin";
import LogoutButton from "./LogoutButton";
import LeadsTable from "./LeadsTable";

export const metadata = {
  title: "Admin — Waveseed",
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  const session = await verifySessionToken(token);

  if (!session) {
    return (
      <main className="relative flex min-h-screen w-full items-start justify-center overflow-hidden px-6">
        <div className="glow-orb -top-10 -left-10 h-72 w-72" />
        <AdminLogin />
      </main>
    );
  }

  const leads = await listLeads();

  return (
    <main className="relative min-h-screen w-full overflow-hidden px-6 py-16">
      <div className="glow-orb -top-10 -left-10 h-72 w-72" />

      <div className="fade-up relative mx-auto w-full max-w-4xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">Leads</h1>
            <p className="mt-1 text-sm text-[color:var(--muted)]">
              Signed in as {session.sub}
            </p>
          </div>
          <LogoutButton />
        </div>

        <LeadsTable leads={leads} />
      </div>
    </main>
  );
}
