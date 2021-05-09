import { utilService } from '../../../services/util-service.js'
export const mailService = {
  loadItems,
  deleteItem,
  createItem,
  updateItem,
  countUnRead
};


function createItem (newItem) {
 
  const item = newItem;
  item.type = 'outMails';
  item.date = new Date().toLocaleDateString();
  const id = utilService.makeId();
  item.id = id;
  mailList.push(item);
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

function updateItem(id,updatedItem) {
  const itemIdx = mailList.findIndex(item => {
    return (item.id === id)
  })
  mailList[itemIdx] = updatedItem;
  return Promise.resolve(mailList[itemIdx]);
}

function countUnRead () {
  const counter = mailList.filter(mail=>{
    return mail.type === 'inMails' && !mail.isRead; 
  });
  return Promise.resolve(counter.length);

}

const mailList = [
  {
    from: 'Migración Colombia',
    subject: 'Centro Virtual de Atencion al Ciudadano CVAC',
    message: `Su solicitud No. 20212410024782 ha sido contestada.

    Si desea consultar el estado de su trámite por favor ingrese a http://www.migracioncolombia.gov.co
    
    
    Dando cumplimiento al Decreto No. 417 de 2020 que declara el Estado de Emergencia Económica, Social y Ecológica en todo el territorio colombiano debido a la pandemia del Coronavirus COVID-19, y a los lineamientos establecidos en el artículo 5 del Decreto Legislativo No. 491 de 2020, su petición será atendida en un término de treinta y cinco (35) días hábiles, contados a partir del día hábil siguiente a la recepción.
    
    
    Recuerde que el primer control contra el Coronavirus es usted. Mayor información en nuestra página web www.migracioncolombia.gov.co, o en la página web www.coronaviruscolombia.gov.co
    
    Este mensaje y sus adjuntos se dirigen exclusivamente a su destinatario, puede contener información privilegiada o confidencial y es para uso exclusivo de la persona o entidad de destino. Si no es usted el destinatario indicado, queda notificado de la lectura, utilización, divulgación y/o copia sin autorización puede estar prohibida en virtud de la legislación vigente. Si ha recibido este mensaje por error, le rogamos que nos lo comunique inmediatamente por esta misma vía y proceda a su destrucción.` ,
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
    from: 'Migración Colombia',
    subject: 'Centro Virtual de Atencion al Ciudadano CVAC',
    message: `Su solicitud No. 20212410024782 ha sido contestada.

    Si desea consultar el estado de su trámite por favor ingrese a http://www.migracioncolombia.gov.co
    
    
    Dando cumplimiento al Decreto No. 417 de 2020 que declara el Estado de Emergencia Económica, Social y Ecológica en todo el territorio colombiano debido a la pandemia del Coronavirus COVID-19, y a los lineamientos establecidos en el artículo 5 del Decreto Legislativo No. 491 de 2020, su petición será atendida en un término de treinta y cinco (35) días hábiles, contados a partir del día hábil siguiente a la recepción.
    
    
    Recuerde que el primer control contra el Coronavirus es usted. Mayor información en nuestra página web www.migracioncolombia.gov.co, o en la página web www.coronaviruscolombia.gov.co
    
    Este mensaje y sus adjuntos se dirigen exclusivamente a su destinatario, puede contener información privilegiada o confidencial y es para uso exclusivo de la persona o entidad de destino. Si no es usted el destinatario indicado, queda notificado de la lectura, utilización, divulgación y/o copia sin autorización puede estar prohibida en virtud de la legislación vigente. Si ha recibido este mensaje por error, le rogamos que nos lo comunique inmediatamente por esta misma vía y proceda a su destrucción.` ,
    date: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
  {
    from: 'Omri',
    subject: 'Sprint 3',
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
    from: 'GitHub',
    subject: 'OmriScript invited you to OmriScript/Appsus',
    message: `OmriScript has invited you to collaborate on the
    OmriScript/Appsus repository ` ,
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
    from: 'Migración Colombia',
    subject: 'Centro Virtual de Atencion al Ciudadano CVAC',
    message: `Su solicitud No. 20212410024782 ha sido contestada.

    Si desea consultar el estado de su trámite por favor ingrese a http://www.migracioncolombia.gov.co
    
    
    Dando cumplimiento al Decreto No. 417 de 2020 que declara el Estado de Emergencia Económica, Social y Ecológica en todo el territorio colombiano debido a la pandemia del Coronavirus COVID-19, y a los lineamientos establecidos en el artículo 5 del Decreto Legislativo No. 491 de 2020, su petición será atendida en un término de treinta y cinco (35) días hábiles, contados a partir del día hábil siguiente a la recepción.
    
    
    Recuerde que el primer control contra el Coronavirus es usted. Mayor información en nuestra página web www.migracioncolombia.gov.co, o en la página web www.coronaviruscolombia.gov.co
    
    Este mensaje y sus adjuntos se dirigen exclusivamente a su destinatario, puede contener información privilegiada o confidencial y es para uso exclusivo de la persona o entidad de destino. Si no es usted el destinatario indicado, queda notificado de la lectura, utilización, divulgación y/o copia sin autorización puede estar prohibida en virtud de la legislación vigente. Si ha recibido este mensaje por error, le rogamos que nos lo comunique inmediatamente por esta misma vía y proceda a su destrucción.` ,
    date: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },
  {
    from: 'Omri',
    subject: 'Sprint 3',
    message: 'Hi idan, the sprint 3 kick of will start at May 4 08:30 AM lorem100 ',
    date: new Date().toLocaleDateString(),
    isRead: false,
    id: utilService.makeId(),
    type:'inMails'
  },  
  {
    from: 'Amit',
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

