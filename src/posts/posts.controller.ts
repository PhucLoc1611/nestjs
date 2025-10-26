import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  @Get()
  getPosts() {
    return this.postService.getPosts();
  }
  @Post()
  createPost(@Body() body: any) {
    return this.postService.createPost(body);
  }
  @Get(':id')
  getPost(@Param('id') id: string) {
    return this.postService.getPost(id);
  }
  @Put(':id')
  updatePost(@Body() body: any, @Param('id') id: string) {
    return this.postService.UpdatePost(id, body);
  }
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postService.deletePost(id);
  }
}
