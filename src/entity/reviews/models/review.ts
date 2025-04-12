export interface Review {
  id: string;
  descipline_id: string;
  created_at: string;
  comment: string;
  rating: number;
  grade: 1 | 2 | 3 | 4 | 5;
  user_id?: string;
  user_name?: string;
  lector_name?: string;
  practic_name?: string;
  likes_count: number;
}
