import Link from "next/link";

function BlogCard(props) {
  return (
    <div className="card card-compact m-8 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.cardData.title}</h2>
        <p>{props.cardData.subject}</p>
        <div className="card-actions justify-end">
          <Link href={"/blogs/" + props.cardData.id}>
            <div className="font-semibold text-md btn btn-primary rounded-sm text-white">
              Read More
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;