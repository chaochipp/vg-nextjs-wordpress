export default function Score({
  review
}) {
  return (
    <div className="score z-10 h-20 w-20 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full p-4 bg-gradient-to-tr
     from-blue-600 to-blue-300 ">
        <h2 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 mb-0 text-white text-4xl font-bold">
        {review.vgReviewScore}
        </h2>
    </div>
  );
}
