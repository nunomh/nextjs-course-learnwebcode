export default function Testimonial(props) {
  return (
    <div className="bg-gray-200 rounded-lg py-6 px-16 pb-20 not-prose mb-24 relative text-center">
      <p className="text-2xl italic text-gray-600">
        &ldquo;{props.data.quote}&rdquo;
      </p>
      <div>
        <img
          src={`http://localhost:1337${props.data.photo.formats.medium.url}`}
          alt={props.data.authorName}
        />
        <h4>{props.data.authorName}</h4>
      </div>
    </div>
  );
}
