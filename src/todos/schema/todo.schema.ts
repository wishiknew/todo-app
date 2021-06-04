import * as mongoose from 'mongoose';
const { Schema } = mongoose;
export const TodoSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  todoItem: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'InProgress', 'Completed'],
    default: 'Pending',
  },
});
