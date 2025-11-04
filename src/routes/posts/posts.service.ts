import { Injectable } from '@nestjs/common'
import envConfig from 'src/shared/config'
import { PrismaService } from 'src/shared/services/prisma.service'

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}
  getPosts() {
    console.log(envConfig.ACCESS_TOKEN_SECRET)

    return this.prismaService.post.findMany()
  }
  createPost(body: any) {
    return this.prismaService.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: 1,
      },
    })
  }
  getPost(id: string) {
    return id
  }
  UpdatePost(id: string, body: any) {
    return `update post${id}`
  }
  deletePost(id: string) {
    return `Deleted post ${id}`
  }
}
