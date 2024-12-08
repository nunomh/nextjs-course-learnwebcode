import qs from "qs";

async function fetchTeamMember(slug) {
  const ourQuery = qs.stringify({
    filters: {
      slug: slug,
    },
  });

  const membersPromise = await fetch(
    `http://localhost:1337/api/team-members?${ourQuery}`
  );
  const member = await membersPromise.json();
  return member.data[0];
}

export default async function Page({ params }) {
  const member = await fetchTeamMember(params.slug);

  return (
    <div>
      {member.name} <h3>{member.description}</h3>
    </div>
  );
}
