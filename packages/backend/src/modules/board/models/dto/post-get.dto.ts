import { ApiProperty } from "@nestjs/swagger"
import { PostProcessingStatus } from "src/modules/board/entities/post-processing-status.enum"
import { Post } from "src/modules/board/entities/post.entity"
import {
  BoardGet,
  toBoardGet,
} from "src/modules/board/models/dto/board-get.dto"
import { PostDecision } from "src/modules/board/models/dto/post-decision.dto"

export class PostGet {
  id: string
  title: string
  description: string

  @ApiProperty({
    enum: PostProcessingStatus,
    enumName: "PostProcessingStatusEnum",
  })
  processingStatus: PostProcessingStatus
  decision?: PostDecision
  board: BoardGet
  postCreatedAt: Date
  externalId: string
  createdAt: Date
  updatedAt: Date
}

export function toPostGet(post: Post): PostGet {
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    processingStatus: post.processingStatus,
    decision: post.decision ?? undefined,
    board: toBoardGet(post.board),
    postCreatedAt: post.postCreatedAt,
    externalId: post.externalId,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  }
}
