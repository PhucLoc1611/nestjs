import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPosts() {
    return 'All post';
  }
  createPost(body: any) {
    return body;
  }
  getPost(id: string) {
    return id;
  }
  UpdatePost(id: string, body: any) {
    return `update post${id}`;
  }
  deletePost(id: string) {
    return `Deleted post ${id}`;
  }
}
