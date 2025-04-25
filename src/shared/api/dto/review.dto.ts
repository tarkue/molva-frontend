export interface CreateReviewDTO {
  discipline_id: string;
  grade: 1 | 2 | 3 | 4 | 5;
  comment: string;
  is_anonymous: boolean;
  lector_id: string;
  practic_id: string;
}
