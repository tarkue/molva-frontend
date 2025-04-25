export interface OnlyReviewId {
  review_id: string;
}

export interface CreateReviewDTO {
  discipline_id: string;
  grade: 1 | 2 | 3 | 4 | 5;
  comment: string;
  is_anonymous: boolean;
  lector_id: string;
  practic_id: string;
}

interface ReviewNames {
  user_name?: string;
  lector_name?: string;
  practic_name?: string;
}

export type Review = CreateReviewDTO &
  OnlyReviewId &
  ReviewNames & {
    created_at: string;
    rating: number;
    likes_count: number;
  };
