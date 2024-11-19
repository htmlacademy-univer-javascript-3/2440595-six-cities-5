import { Review } from './review.tsx';
import { ReviewListProps } from '../props/review-list-props.tsx';

export function ReviewList({reviews: reviewList}: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviewList.map((review) => (
        <Review key={review.id} review={review}/>
      ))}
    </ul>
  );
}
