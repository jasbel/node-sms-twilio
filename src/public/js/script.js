const socket = io();
const d = document;

/** Pedir permiso al usuario cuando inicie aplicacion */
Notification.requestPermission().then(function (result) {
    console.log(result);
  });

/** Notificacioes */
const notifyMe = (message =  "Hi there!") => {

    if (!("Notification" in window)) {
        alert("Este navegador no soporta Notificaciones");
    }

    else if (Notification.permission === "granted") {
        const notification = new Notification(message);
    }

    //para preguntar si necesita permiso
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          const notification = new Notification(message);
        }
      });
    }
}

/** Recive el mensaje desde el celular hasta la interfaz web  */
socket.on('new message', data =>{
    console.log(data);

    /** NOtificando el mensase */
    notifyMe("New Message received: ",data.Body)

    const msgList = d.getElementById('messages');

    const li = d.createElement('li');
    li.classList = 'list-group-item list-group-item-warning list-group-item-action';

    const body = d.createElement('p');
    body.appendChild(d.createTextNode(data.Body));

    /** Reemplazar los numeros con una x */
    // data.From = data.From.replace(/[0-9]/g, 'x');

    const _id = d.createElement('p');
    _id.appendChild(d.createTextNode(data._id));

    const from = d.createElement('span');
    from.appendChild(d.createTextNode(data.From));

    const createdAt = d.createElement('p');
    createdAt.appendChild(d.createTextNode(timeago.format(data.createdAt)));

    li.appendChild(body);
    li.appendChild(_id);
    li.appendChild(from);
    li.appendChild(createdAt);

    /* prepend : Aniade al inicio del lista */
    msgList.prepend(li);

})
