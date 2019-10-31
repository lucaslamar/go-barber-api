import moongoose from 'mongoose';

const NotificationSchema = new moongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        user: {
            type: Number,
            required: true,
        },
        read: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);
export default moongoose.model('Notification', NotificationSchema);
