type ActivityAction = 'created' | 'updated' | 'deleted';

export interface Activity {
  user_id: string;
  goal_id: string;
  category_id: string;
  action: ActivityAction;
}

export interface ActivityInView {
  goal_name: string;
  category_name: string;
  action: ActivityAction;
}
