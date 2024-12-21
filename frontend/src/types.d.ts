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

declare interface IFeature {
  _id: string;
  name: string;
  title: string;
  value: boolean;
}

declare interface IPricingPlan {
  _id: string;
  type: 'free' | 'pro';
  perMonth: number;
  perYear: number;
  features: IFeature[];
}
