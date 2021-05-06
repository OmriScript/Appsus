import { utilService } from '../../../services/util-service.js'
export const mailService = {
  loadItems,
  deleteItem,
  saveItem
};


function saveItem (newItem) {
  let items = outMails;
  items.push(newItem);
  alert('Mail Sent')
  
}


function deleteItem(items , id) {

 const itemIdx = items.findIndex(item => {
   return (item.id === id)
 })
 items = items.splice(itemIdx, 1);
 alert('deleted');
 
}

function loadItems(items) {
  if (items === 'inMails') return Promise.resolve(inMails);
  if (items === 'outMails') return Promise.resolve(outMails);
}



// function loadOutMails() {
//   console.log('load');
//   return Promise.resolve(outMails);
// }

const inMails = [
  {
    from: 'Omri',
    subject: 'INMAIL',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    receivedTime: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
  {
    from: 'Omri',
    subject: 'INBOX',
    message: 'Hi idan, the sprint 3 delivery is at May 6 20:30 AM lorem 100 ' ,
    receivedTime: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
];

const outMails = [{
  to: 'Omri',
  subject: 'SENT',
  message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
  sendTime: new Date().toLocaleDateString(),
  id: utilService.makeId(),
  type:'outMails'
},
{
  to: 'Omri',
  subject: 'SENT2',
  message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
  sendTime: new Date().toLocaleDateString(),
  id: utilService.makeId(),
  type:'outMails'
}];
