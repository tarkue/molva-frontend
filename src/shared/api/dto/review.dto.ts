import { PageOffsetOptions } from '../types/page';
import { ResolveAction } from '../types/resolve';
import { ReviewStatus } from '../types/review_status';
import { SortForDiscipline } from '../types/sort-for-discipine';
import { Vote } from '../types/vote';
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
    likes: number;
    dislikes: number;
    total_rating: number;
    user_vote?: Vote;
  };

export interface Status {
  status: ReviewStatus;
}

export type UpdateReviewDTO = OnlyId & Status;
export type VoteReviewDTO = OnlyId & { vote: Vote };
export type ResolveComplaintDTO = OnlyId & { action: ResolveAction };
export type GetReviewOptions = PageOffsetOptions & {
  teacher_id?: string;
  sort_by?: SortForDiscipline;
};
