export class Post {
    id: number;
    from: {
        name: string,
        username: string
    };
    time: string;
    content: string;
    noOfLikes: number;
    noOfComments: number;
}

export class PostComments {
    id: number;
    comment: string;
    postId: number
}