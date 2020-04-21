export type db = {
  screams: Scream[];
};

export type Scream = {
  userHanle: string;
  body: string;
  createdAt: string;
  likeCount: number;
  commentCount: number;
};
