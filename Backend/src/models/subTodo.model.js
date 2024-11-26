import mongoose, {Schema} from "mongoose";

const subTodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    todoId: {
        type: Schema.Types.ObjectId,
        ref: 'Todo',
        required: true
    },
}, {timestamps: true});


export const SubTodo = mongoose.model('SubTodo', subTodoSchema);