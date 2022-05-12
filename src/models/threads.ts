export class Threads {
    public author: string = '';
    public text: string = '';
    public chatId: string  = '';
  
    public id: string  = ''; //User ID From FIRESTORE COLLECTION USERS
   

    constructor(obj?: any) {
        this.author = obj ? obj.author : '';
        this.text = obj ? obj.text : '';
        this.chatId = obj ? obj.chatId : '';
   
        this.id = obj ? obj.id : '';
     
    }


    public toJson() {
        return {
            author: this.author,
            text: this.text,
            chatId: this.chatId,
         
            id: this.id,
      
        };
    }

}