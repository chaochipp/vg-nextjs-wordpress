import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Score from "./score";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  review
}) {
  return (
    <div>
      <div className="mb-5 relative">
        {coverImage && (
          <>
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
          {
            review && <Score review={review}/>
          }
          </>
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      {/* <Avatar author={author} /> */}
    </div>
  );
}
