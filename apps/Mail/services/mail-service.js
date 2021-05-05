import {utilService} from '../../../services/util-service.js'
export const mailService = {
  getInMails,
};

function getInMails() {
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
    id:utilService.makeId()
  },
];

const outMails = {
  to: 'Omri',
  subject: 'sprint 3 kick of',
  message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
  sendTime:new Date().toLocaleDateString(),
  id:utilService.makeId()
};
