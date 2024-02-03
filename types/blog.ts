import { Post, Tag } from "@/prisma/client";

export interface IPost extends Post{
  tags: Tag[]
}