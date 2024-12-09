import { Review } from './review.tsx';
import {ReviewType} from '../internal/types/review-type.tsx';

type ReviewListProps = {
  reviews: ReviewType[];
}

export function ReviewList({reviews: reviewList}: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviewList.map((review) => (
        <Review key={review.id} review={review}/>
      ))}
    </ul>
  );
}
