import { Post } from "../discussion/discussion.model";

export class PostsFakeDb {
    public static posts: Post[] = [
        {
            'id': 1,
            'from': {
                'name': 'John due',
                'username': 'Jdue99'
            },
            'time': '10 min',
            'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            'noOfLikes': 99,
            'noOfComments': 33
        },
        {
            'id': 2,
            'from': {
                'name': 'Alice Freeman',
                'username': 'Jdue99'
            },
            'time': '10 min',
            'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            'noOfLikes': 99,
            'noOfComments': 33
        }
    ];
}
