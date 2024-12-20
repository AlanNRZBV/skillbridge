declare interface ICourse {
  _id: string;
  img: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  length: string;
  author: string;
}
