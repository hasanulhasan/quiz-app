export default interface IUser {
  id?: number;
  name: string;
  email: string;
  role: string;
}

export default interface IQuiz {
  id?: number;
  name: string;
  img: string;
  questions?: string[]
}


export default interface IQuestion {
  id?: number;
  question:      String;
  options:       String[];
  correctAnswer: String;
  topicId:       number
}

export default interface IScore {
  id?: number;
  userEmail: String;
  topic:     String;
  score:     String;
}
