import { unauthorized } from 'next/navigation';

import { getSession } from '@/lib/auth/actions/get-session';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { user } = await getSession();

  if (!user) {
    unauthorized();
  }

  return <div>{children}</div>;
}
