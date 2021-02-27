var n = 1;

var cont = document.getElementById("cont");
var text = document.getElementById("text");

var title1 = "";
var text1 =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quasi, quos ea a est commodi et qui? Amet maxime consequatur, repudiandae officiis praesentium recusandae omnis et ex numquam asperiores consequuntur corporis provident, iure assumenda? Suscipit ducimus molestiae, consequuntur voluptatem ullam quibusdam. Qui, unde pariatur voluptatum impedit ut delectus et ipsa";
var title2 = "";
var text2 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa odit ducimus placeat impedit quos assumenda debitis deserunt? Quis doloremque veniam vitae dicta sit ducimus dignissimos consequatur mollitia facilis quo laboriosam quidem at, beatae maxime itaque earum quas soluta ullam corrupti unde necessitatibus eveniet! Atque, molestiae voluptatum aliquid aperiam minima unde quasi eos omnis placeat, expedita similique ab ipsum laboriosam accusantium dolore et blanditiis rem quaerat in porro nostrum voluptatibus repudiandae sapiente iusto. Maiores ad voluptatem placeat, provident ipsam vero optio? Beatae provident placeat laudantium nemo laborum, commodi labore accusantium. Error accusantium magni culpa? Dolor distinctio quibusdam pariatur cum, sit vitae.";
var title3 = "";
var text3 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at minima quasi, sapiente nisi officia natus deleniti tempore dignissimos earum consequuntur alias quaerat possimus consequatur ipsam, praesentium porro sed odio unde veritatis. Beatae ipsum repellendus molestiae eligendi voluptates, officia nostrum. Maiores placeat totam magni consequatur laudantium odio porro quae, alias similique, quidem quis excepturi omnis ipsum quia facere fugit maxime? Nobis voluptas quo ducimus a repellat id distinctio inventore asperiores voluptates esse natus, earum ad facilis autem perferendis rerum. Dolore ipsa consectetur numquam, libero qui culpa officiis nesciunt cum nihil placeat quasi dolorem harum excepturi magnam facere sint distinctio temporibus reiciendis veritatis. Laborum quia debitis qui voluptas delectus hic, nostrum porro. Ratione quia sapiente fugiat ipsum, id velit ducimus praesentium tempore sunt, aperiam delectus nihil quo? Cupiditate autem voluptatibus adipisci saepe neque minima omnis, animi ducimus non architecto vel explicabo velit maxime reiciendis voluptates odit, quo at quisquam tempora dolorum.";

function boton() {
  cont.innerHTML = title1;
  text.innerHTML = text1;
}
function boton1() {
  cont.innerHTML = title2;
  text.innerHTML = text2;
}
function boton2() {
  cont.innerHTML = title3;
  text.innerHTML = text3;
}

var b1 = document.getElementById("b1");
b1.addEventListener("click", boton, true);

var b2 = document.getElementById("b2");
b2.addEventListener("click", boton1, true);

var b3 = document.getElementById("b3");
b3.addEventListener("click", boton2, true);
