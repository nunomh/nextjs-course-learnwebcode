import Link from "next/link";

async function getAllTeamMemebers() {
  const membersPromise = await fetch("http://localhost:1337/api/team-members");
  const members = await membersPromise.json();
  return members.data;
}

export default async function Page() {
  const members = await getAllTeamMemebers();

  return (
    <div>
      <h1>Our Team</h1>
      <div>
        {members.map((member) => {
          return (
            <div>
              <Link href={`/our-team/${member.slug}`}>{member.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
