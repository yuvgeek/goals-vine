export interface Idea {
  name: string;
  description: string;
  status: string;
  visibility: string;
  target: Date;
}

export interface AddIdea extends Idea {}
