'use client'

import { useAppContext } from '@/context'
import styles from './page.module.css'

export default function Home() {
    const { users, onLoadUsers } = useAppContext()

    return (
      <main className={styles.main}>
        <h2>Generic Types with Users</h2>

        {
          users.map((user) => (
            <article key={user.id}>{user.name}</article>
          ))
        }

        <button onClick={() => {
          onLoadUsers()
        }}>Load Users</button>
      </main>
    )
}
