import { utilService } from '../../../services/util-service.js'
export const mailService = {
  loadInMails,
  deleteItem,
  saveItem
};

function deleteItem(id) {
let items= inMails
 const itemIdx = items.findIndex(item => {
   return (item.id === id)
 })
 items = items.splice(itemIdx, 1);
 alert('deleted');
 console.log(inMails);
}

function saveItem (newItem) {
let items = outMails;
items.push(newItem);
alert('Mail Sent')
console.log(outMails);
}

function loadInMails() {
  return Promise.resolve(inMails);
}

const inMails = [
  {
    from: 'Omri',
    subject: 'sprint 3 kick of',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    receivedTime: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId()
  },
  {
    from: 'Omri',
    subject: 'sprint 3 delivery time',
    message: 'Hi idan, the sprint 3 delivery is at May 6 20:30 AM',
    receivedTime: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId()
  },
];

const outMails = [{
  to: 'Omri',
  subject: 'sprint 3 kick of',
  message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
  sendTime: new Date().toLocaleDateString(),
  id: utilService.makeId()
}];
