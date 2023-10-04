import Link from "next/link";
import getUser from "../../../../lib/getUser";

type Params = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);

  const user = await userData;

  const content = (
    <section>
      <h2>
        <Link href="/">Voltar</Link>
      </h2>
      <br />
      <p key={user.id}>{user.name}</p>
      <br />
    </section>
  );

  return content;
}
