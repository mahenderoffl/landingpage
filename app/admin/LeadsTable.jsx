function formatDate(value) {
  try {
    return new Date(value).toLocaleString();
  } catch {
    return value;
  }
}

export default function LeadsTable({ leads }) {
  if (!leads.length) {
    return (
      <p className="mt-8 text-[color:var(--muted)]">No leads yet — they will show up here as soon as someone submits the form.</p>
    );
  }

  return (
    <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-white/5 text-xs uppercase tracking-wider text-[color:var(--muted)]">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Message</th>
            <th className="px-4 py-3">Received</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-t border-white/5 align-top">
              <td className="px-4 py-3 font-medium">{lead.name}</td>
              <td className="px-4 py-3 text-[color:var(--muted)]">
                <a href={`mailto:${lead.email}`} className="hover:text-[color:var(--text)]">
                  {lead.email}
                </a>
              </td>
              <td className="px-4 py-3 max-w-md whitespace-pre-wrap text-[color:var(--muted)]">{lead.message}</td>
              <td className="px-4 py-3 whitespace-nowrap text-[color:var(--muted)]">{formatDate(lead.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
