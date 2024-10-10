import { Button } from '@nextui-org/button'

import { auth, signOut } from '@/auth'

export default async function Home() {
  const session = await auth()
  return (
    <section className="flex h-full items-center justify-center p-4 align-middle">
      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <form
            action={async () => {
              'use server'

              await signOut()
            }}
          >
            <Button type="submit" color="danger">
              Sair
            </Button>
          </form>
        </div>
      ) : (
        <div>Not signed in</div>
      )}
    </section>
  )
}
