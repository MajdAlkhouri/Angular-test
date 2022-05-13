export class Threads {
  
    public text: string = '';
    public chatId: string  = '';
  
    public id: string  = ''; //User ID From FIRESTORE COLLECTION USERS

    message: String;
    author: string;
    chatChannelId: string;
   

    constructor(obj?: any) {
        this.author = obj ? obj.author : '';
        this.text = obj ? obj.text : '';
        this.chatId = obj ? obj.chatId : '';
   
        this.id = obj ? obj.id : '';

        this. message = obj ? obj. message : '';
        this. author = obj ? obj. author : '';
        this. chatChannelId = obj ? obj. channelChatId : '';
     
    }


    public toJson() {
        return {
            author: this.author,
            text: this.text,
            chatId: this.chatId,
         
            id: this.id,

            message: this. message,
            
            chatChannelId: this.chatChannelId,
            
      
        };
    }

}