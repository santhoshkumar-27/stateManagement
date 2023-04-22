export interface Post {
    postLists: PostList[]
}

interface PostList {
    id: number;
    firstName: string,
    lastName: string
}