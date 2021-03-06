import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleChatDetailPage } from './single-chat-detail';

@NgModule({
    declarations: [
        SingleChatDetailPage,
    ],
    imports: [
      IonicPageModule.forChild(SingleChatDetailPage),
    ],
  })
  export class SingleChatDetailPageModule {}




// import { Chat } from './chat';
// import { ChatService } from "../../providers/chat-service";
// import { RelativeTime } from "../../pipes/relative-time";
// import { EmojiPickerComponentModule } from "../../components/emoji-picker/emoji-picker.module";
// import { EmojiProvider } from "../../providers/emoji";

// @NgModule({
//   declarations: [
//     Chat,
//     RelativeTime
//   ],
//   imports: [
//     EmojiPickerComponentModule,
//     IonicPageModule.forChild(Chat),
//   ],
//   exports: [
//     Chat
//   ],
//   providers: [
//     ChatService,
//     EmojiProvider
//   ]
// })
