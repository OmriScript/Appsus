import { utilService } from '../../../services/util-service.js'
export const mailService = {
  loadItems,
  deleteItem,
  saveItem
};


function saveItem (newItem) {
 
  const item = newItem;
  item.type = 'outMails';
  item.date = new Date().toLocaleDateString();
  const id = utilService.makeId();
  item.id = id;
  mailList.push(item);
  alert('Mail Sent');
  return Promise.resolve(id);
}


function deleteItem(id) {
   const itemIdx = mailList.findIndex(item => {
     return (item.id === id)
   })
   mailList.splice(itemIdx, 1);
   alert('deleted');
   return Promise.resolve();
}

function loadItems(type) {
  return Promise.resolve(mailList.filter((item) => item.type === type));
}



// function loadOutMails() {
//   console.log('load');
//   return Promise.resolve(outMails);
// }

const mailList = [
  {
    from: 'Omri',
    subject: 'INMAIL',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM lorem100 ',
    date: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
  {
    from: 'Tal Barak',
    subject: 'Thank you for choosing coding acadmy!',
    message: `Hi Idan,

    We just want to take the opportunity to thank you for choosing [company name] as your provider of [product(s) or service(s) you provide]. We are proud of our satisfied clientele and look forward to many years of working together.
    
    You’ll be getting an email soon from your account representative, but if you have any questions in the meantime, you can respond to this email or call us at [phone number].
    
    Thank you for your business and [well wishes relevant to your offering]!
    
    The [company name] Team ` ,
    date: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
  {
    from: 'Omri',
    subject: 'INBOX',
    message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore assumenda non est repudiandae reprehenderit, error mollitia nihil doloremque a quasi voluptatum, minus saepe cumque,
     quam dicta blanditiis magni aut! Saepe maiores harum atque, voluptate quisquam consequuntur est itaque fuga doloremque necessitatibus consectetur. Praesentium assumenda reiciendis, est neque libero
      qui aut modi repellat nostrum blanditiis voluptatum enim rerum numquam ipsa optio beatae mollitia error, animi eveniet vitae fuga reprehenderit vero cum. Qui ipsum molestiae dignissimos. Optio ipsa 
      vitae consequatur provident. Quibusdam eaque accusantium earum voluptatum necessitatibus dolores, doloribus, dolore laudantium quam veniam repellat neque distinctio quod dolor. Cumque, adipisci quibusdam?
    Hi idan, the sprint 3  delivery is at May 6 20:30 AM lorem 100 ` ,
    date: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
  {
    from: 'Omri',
    subject: 'INBOX',
    message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore assumenda non est repudiandae reprehenderit, error mollitia nihil doloremque a quasi voluptatum, minus saepe cumque,
     quam dicta blanditiis magni aut! Saepe maiores harum atque, voluptate quisquam consequuntur est itaque fuga doloremque necessitatibus consectetur. Praesentium assumenda reiciendis, est neque libero
      qui aut modi repellat nostrum blanditiis voluptatum enim rerum numquam ipsa optio beatae mollitia error, animi eveniet vitae fuga reprehenderit vero cum. Qui ipsum molestiae dignissimos. Optio ipsa 
      vitae consequatur provident. Quibusdam eaque accusantium earum voluptatum necessitatibus dolores, doloribus, dolore laudantium quam veniam repellat neque distinctio quod dolor. Cumque, adipisci quibusdam?
    Hi idan, the sprint 3  delivery is at May 6 20:30 AM lorem 100 ` ,
    date: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
  {
    from: 'Omri',
    subject: 'INBOX',
    message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore assumenda non est repudiandae reprehenderit, error mollitia nihil doloremque a quasi voluptatum, minus saepe cumque,
     quam dicta blanditiis magni aut! Saepe maiores harum atque, voluptate quisquam consequuntur est itaque fuga doloremque necessitatibus consectetur. Praesentium assumenda reiciendis, est neque libero
      qui aut modi repellat nostrum blanditiis voluptatum enim rerum numquam ipsa optio beatae mollitia error, animi eveniet vitae fuga reprehenderit vero cum. Qui ipsum molestiae dignissimos. Optio ipsa 
      vitae consequatur provident. Quibusdam eaque accusantium earum voluptatum necessitatibus dolores, doloribus, dolore laudantium quam veniam repellat neque distinctio quod dolor. Cumque, adipisci quibusdam?
    Hi idan, the sprint 3  delivery is at May 6 20:30 AM lorem 100 ` ,
    date: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
  {
    from: 'Omri',
    subject: 'INBOX',
    message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore assumenda non est repudiandae reprehenderit, error mollitia nihil doloremque a quasi voluptatum, minus saepe cumque,
     quam dicta blanditiis magni aut! Saepe maiores harum atque, voluptate quisquam consequuntur est itaque fuga doloremque necessitatibus consectetur. Praesentium assumenda reiciendis, est neque libero
      qui aut modi repellat nostrum blanditiis voluptatum enim rerum numquam ipsa optio beatae mollitia error, animi eveniet vitae fuga reprehenderit vero cum. Qui ipsum molestiae dignissimos. Optio ipsa 
      vitae consequatur provident. Quibusdam eaque accusantium earum voluptatum necessitatibus dolores, doloribus, dolore laudantium quam veniam repellat neque distinctio quod dolor. Cumque, adipisci quibusdam?
    Hi idan, the sprint 3  delivery is at May 6 20:30 AM lorem 100 ` ,
    date: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
  {
    from: 'Omri',
    subject: 'INBOX',
    message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore assumenda non est repudiandae reprehenderit, error mollitia nihil doloremque a quasi voluptatum, minus saepe cumque,
     quam dicta blanditiis magni aut! Saepe maiores harum atque, voluptate quisquam consequuntur est itaque fuga doloremque necessitatibus consectetur. Praesentium assumenda reiciendis, est neque libero
      qui aut modi repellat nostrum blanditiis voluptatum enim rerum numquam ipsa optio beatae mollitia error, animi eveniet vitae fuga reprehenderit vero cum. Qui ipsum molestiae dignissimos. Optio ipsa 
      vitae consequatur provident. Quibusdam eaque accusantium earum voluptatum necessitatibus dolores, doloribus, dolore laudantium quam veniam repellat neque distinctio quod dolor. Cumque, adipisci quibusdam?
    Hi idan, the sprint 3  delivery is at May 6 20:30 AM lorem 100 ` ,
    date: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
  {
    from: 'Omri',
    subject: 'INBOX',
    message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore assumenda non est repudiandae reprehenderit, error mollitia nihil doloremque a quasi voluptatum, minus saepe cumque,
     quam dicta blanditiis magni aut! Saepe maiores harum atque, voluptate quisquam consequuntur est itaque fuga doloremque necessitatibus consectetur. Praesentium assumenda reiciendis, est neque libero
      qui aut modi repellat nostrum blanditiis voluptatum enim rerum numquam ipsa optio beatae mollitia error, animi eveniet vitae fuga reprehenderit vero cum. Qui ipsum molestiae dignissimos. Optio ipsa 
      vitae consequatur provident. Quibusdam eaque accusantium earum voluptatum necessitatibus dolores, doloribus, dolore laudantium quam veniam repellat neque distinctio quod dolor. Cumque, adipisci quibusdam?
    Hi idan, the sprint 3  delivery is at May 6 20:30 AM lorem 100 ` ,
    date: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
  {
    from: 'Omri',
    subject: 'INBOX',
    message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore assumenda non est repudiandae reprehenderit, error mollitia nihil doloremque a quasi voluptatum, minus saepe cumque,
     quam dicta blanditiis magni aut! Saepe maiores harum atque, voluptate quisquam consequuntur est itaque fuga doloremque necessitatibus consectetur. Praesentium assumenda reiciendis, est neque libero
      qui aut modi repellat nostrum blanditiis voluptatum enim rerum numquam ipsa optio beatae mollitia error, animi eveniet vitae fuga reprehenderit vero cum. Qui ipsum molestiae dignissimos. Optio ipsa 
      vitae consequatur provident. Quibusdam eaque accusantium earum voluptatum necessitatibus dolores, doloribus, dolore laudantium quam veniam repellat neque distinctio quod dolor. Cumque, adipisci quibusdam?
    Hi idan, the sprint 3  delivery is at May 6 20:30 AM lorem 100 ` ,
    date: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
  {
    to: 'Omri',
    subject: 'SENT',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },
  {
    to: 'Omri',
    subject: 'SENT2',
    message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore assumenda non est repudiandae reprehenderit, error mollitia nihil doloremque a quasi voluptatum, minus saepe cumque,
  quam dicta blanditiis magni aut! Saepe maiores harum atque, voluptate quisquam consequuntur est itaque fuga doloremque necessitatibus consectetur. Praesentium assumenda reiciendis, est neque libero
   qui aut modi repellat nostrum blanditiis voluptatum enim rerum numquam ipsa optio beatae mollitia error, animi eveniet vitae fuga reprehenderit vero cum. Qui ipsum molestiae dignissimos. Optio ipsa 
   vitae consequatur provident. Quibusdam eaque accusantium earum voluptatum necessitatibus dolores, doloribus, dolore laudantium quam veniam repellat neque distinctio quod dolor. Cumque, adipisci quibusdam?
 Hi idan, the sprint 3  delivery is at May 6 20:30 AM lorem 100 ` ,
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT2',
    message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore assumenda non est repudiandae reprehenderit, error mollitia nihil doloremque a quasi voluptatum, minus saepe cumque,
  quam dicta blanditiis magni aut! Saepe maiores harum atque, voluptate quisquam consequuntur est itaque fuga doloremque necessitatibus consectetur. Praesentium assumenda reiciendis, est neque libero
   qui aut modi repellat nostrum blanditiis voluptatum enim rerum numquam ipsa optio beatae mollitia error, animi eveniet vitae fuga reprehenderit vero cum. Qui ipsum molestiae dignissimos. Optio ipsa 
   vitae consequatur provident. Quibusdam eaque accusantium earum voluptatum necessitatibus dolores, doloribus, dolore laudantium quam veniam repellat neque distinctio quod dolor. Cumque, adipisci quibusdam?
 Hi idan, the sprint 3  delivery is at May 6 20:30 AM lorem 100 ` ,
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT2',
    message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore assumenda non est repudiandae reprehenderit, error mollitia nihil doloremque a quasi voluptatum, minus saepe cumque,
  quam dicta blanditiis magni aut! Saepe maiores harum atque, voluptate quisquam consequuntur est itaque fuga doloremque necessitatibus consectetur. Praesentium assumenda reiciendis, est neque libero
   qui aut modi repellat nostrum blanditiis voluptatum enim rerum numquam ipsa optio beatae mollitia error, animi eveniet vitae fuga reprehenderit vero cum. Qui ipsum molestiae dignissimos. Optio ipsa 
   vitae consequatur provident. Quibusdam eaque accusantium earum voluptatum necessitatibus dolores, doloribus, dolore laudantium quam veniam repellat neque distinctio quod dolor. Cumque, adipisci quibusdam?
 Hi idan, the sprint 3  delivery is at May 6 20:30 AM lorem 100 ` ,
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT2',
    message: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed tempore assumenda non est repudiandae reprehenderit, error mollitia nihil doloremque a quasi voluptatum, minus saepe cumque,
  quam dicta blanditiis magni aut! Saepe maiores harum atque, voluptate quisquam consequuntur est itaque fuga doloremque necessitatibus consectetur. Praesentium assumenda reiciendis, est neque libero
   qui aut modi repellat nostrum blanditiis voluptatum enim rerum numquam ipsa optio beatae mollitia error, animi eveniet vitae fuga reprehenderit vero cum. Qui ipsum molestiae dignissimos. Optio ipsa 
   vitae consequatur provident. Quibusdam eaque accusantium earum voluptatum necessitatibus dolores, doloribus, dolore laudantium quam veniam repellat neque distinctio quod dolor. Cumque, adipisci quibusdam?
 Hi idan, the sprint 3  delivery is at May 6 20:30 AM lorem 100 ` ,
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    date: new Date(2020, 11, 24, 10).toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  },{
    to: 'Omri',
    subject: 'SENT',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM',
    date: new Date().toLocaleDateString(),
    id: utilService.makeId(),
    type:'outMails'
  }
];

