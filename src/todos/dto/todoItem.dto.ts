import { ApiProperty } from '@nestjs/swagger';

export class TodoItemDto {
  @ApiProperty({
    description: 'unique id for a user',
  })
  readonly userId: string;
  @ApiProperty()
  readonly todoItem: string;
  @ApiProperty()
  readonly status: string;
}