import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";
import Score from "./score";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
  review
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {/* <Avatar author={author} /> */}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 relative">
        <CoverImage title={title} coverImage={coverImage} />
        {
          review && <Score review={review}/>
        }
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {/* <Avatar author={author} /> */}
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
}
