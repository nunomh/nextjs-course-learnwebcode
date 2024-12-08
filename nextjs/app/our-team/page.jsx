import Link from "next/link";

async function getAllTeamMemebers() {
  const membersPromise = await fetch(
    "http://localhost:1337/api/team-members?populate=*"
  );
  const members = await membersPromise.json();
  return members.data;
}

export default async function Page() {
  const members = await getAllTeamMemebers();

  return (
    <div>
      <h1 className="text-4xl mb-6 font-bold text-gray-700">Our Team</h1>
      <div className="grid grid-cols-2 gap-6">
        {members.map((member) => {
          return (
            <Link
              className="grid grid-cols-[140px_1fr] bg-white shadow rounded-lg overflow-hidden"
              key={member.id}
              href={`/our-team/${member.slug}`}
            >
              <img
                src={`http://localhost:1337${member.photo.formats.medium.url}`}
              />
              <div>
                <p>{member.name}</p>
                <p>{member.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
