declare interface ICourse {
  _id: string;
  img: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  length: string;
  author: string;
}

declare interface ITestimonial {
  _id: string;
  img: string;
  author: string;
  content: string;
}
