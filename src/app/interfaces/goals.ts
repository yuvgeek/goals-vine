export interface Goal {
  id: string;
  name: string;
  category_id: string;
  status: string;
  visibility: string;
  target: Date;
  category_name?: string;
}

export interface AddGoal extends Goal {
  user_id: string;
}
