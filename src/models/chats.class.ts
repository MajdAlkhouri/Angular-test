export class Chat {
    message: String;
    author: string;
    channelChatId: string;
    constructor(obj?: any) {
      this. message = obj ? obj. message : '';
      this. author = obj ? obj. author : '';
      this. channelChatId = obj ? obj. channelChatId : '';
    }
    public toJson() {
      return {
      message: this. message,
      author: this. author,
      chatChannelId: this. author,

      }
    }
  }