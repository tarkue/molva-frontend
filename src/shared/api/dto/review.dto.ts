import { ReviewStatus } from '../types/review_status';
import { OnlyId } from './shared.dto';
import { Teacher } from './teacher.dto';
import { User } from './user.dto';

export interface CreateReviewDTO {
  discipline_id: string;
  grade: number;
  comment: string;
  is_anonymous: boolean;
  lector_id?: string;
  practic_id?: string;
}

export type Review = Omit<
  CreateReviewDTO,
  'lector_id' | 'practic_id'
> &
  OnlyId & {
    author: Omit<User, 'email'>;
    lector?: Teacher;
    practic?: Teacher;
    status: ReviewStatus;
    created_at: string;
    offensive_score: number;
  };

export interface Status {
  status: ReviewStatus;
}

export type UpdateReviewDTO = OnlyId & Status;
