import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Score from "./score";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  review
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16 relative">
        {coverImage && (
          <>
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
            <Score review={review}/>
          </>
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight font-bold">
            <Link
              href={`/reviews/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          {/* <Avatar author={author} /> */}
        </div>
      </div>
    </section>
  );
}
