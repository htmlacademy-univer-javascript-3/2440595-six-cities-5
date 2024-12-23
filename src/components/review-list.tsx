import { Review } from './review.tsx';
import {ReviewType} from '../internal/types/review-type.tsx';

type ReviewListProps = {
  reviews: ReviewType[];
}

export function ReviewList({reviews: reviewList}: ReviewListProps) {
  const sortedReviewList = reviewList
    .slice()
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    ).slice(0, 10);
  return (
    <ul className="reviews__list">
      {sortedReviewList.map((review) => (
        <Review key={review.id} review={review}/>
      ))}
    </ul>
  );
}
