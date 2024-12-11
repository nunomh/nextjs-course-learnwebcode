import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import qs from "qs";
import Spoiler from "@/components/Spoiler";
import Testimonial from "@/components/Testimonial";

async function fetchTeamMember(slug) {
  const ourQuery = qs.stringify({
    filters: {
      slug: slug,
    },
    populate: {
      photo: "*",
      bodyContent: {
        on: {
          "features.rich-text": {
            populate: "*",
          },
          "features.spoiler": {
            populate: "*",
          },
          "features.testimonial": {
            populate: "*",
          },
        },
      },
    },
  });

  const membersPromise = await fetch(
    `http://localhost:1337/api/team-members?${ourQuery}`
  );
  const member = await membersPromise.json();
  return member.data[0];
}

function OurRenderer(item, index) {
  if (item.__component === "features.testimonial") {
    return <Testimonial data={item} />;
  }
  if (item.__component === "features.spoiler") {
    return <Spoiler />;
  }
  if (item.__component === "features.rich-text") {
    return <BlocksRenderer content={item.content} />;
  }
}

export default async function Page({ params }) {
  const member = await fetchTeamMember(params.slug);
  console.log(member);

  return (
    <div>
      {member.name} <h3>{member.description}</h3>
      <div className="prose max-w-none">
        {member.bodyContent.map((item, index) => OurRenderer(item, index))}
      </div>
    </div>
  );
}
