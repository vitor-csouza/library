import Link from "next/link";
import getAllUser from "../../../lib/getAllUsers";

export default async function User() {
  const usersData: Promise<User[]> = getAllUser();

  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href="/">Voltar</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
}
