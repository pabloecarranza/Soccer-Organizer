const addPlayers = $(".addTask");
const player = $("#abc");
const adding = $(".addTask span");
const cancel = $("#cancel");
const nextStep = $("#next");
const showCountDown = $("#timeCountDown");

addPlayers.hide();
adding.hide();
$("#Cancelbtn").hide();
$("#matchStart").hide();

const jugadores = [];

$("#Addbtn").on("click", () => {
  $(".addTask").fadeIn();
});

$("#addPlayer").on("click", () => {
  adding.fadeIn();
  let def = player.val();
  jugadores.push(def);

  console.log(jugadores);
  $(":text").val("");
  adding.fadeOut();
});

cancel.on("click", () => {
  $(".addTask").fadeOut();
  for (let i = jugadores.length; i > 0; i--) {
    jugadores.pop();
  }
});

nextStep.on("click", () => {
  let timeSelect = $("input:checked").attr("value");
  $(".addTask").fadeOut();
  $("#Addbtn").hide();
  $("#Cancelbtn").show();
  $("#matchStart").show();
  mostrarEquipos();

  $("#countD").on("click", () => {
    CountDownStart(timeSelect);
  });
});

$("#Cancelbtn").on("click", () => {
  for (let i = jugadores.length; i > 0; i--) {
    jugadores.pop();
  }

  $("#Addbtn").show();
  $("#Cancelbtn").hide();
  $("#matchStart").fadeOut();
});

function mostrarEquipos() {
  let randoms = _.shuffle(jugadores);
  let m1 = randoms.splice(0, randoms.length / 2);
  let m2 = randoms.splice(0, randoms.length);

  for (const m of m1) {
    $("#tm1").append(`<h3>${m}</h3>`);
  }

  for (const b of m2) {
    $("#tm2").append(`<h3>${b}</h3>`);
  }
}

function CountDownStart(SelectTime) {
  $("#countD").fadeOut();
  let minutos = SelectTime / 2 - 1;
  let segundos = 60;
  setInterval(() => {
    $("#timeCountDown").html(`
    <div id="NumersCount">
    Tiempo Restante
    <div id="Numers">
    ${minutos} ${segundos} 
    </div>
    Minutos   Segundos
    </div>`);

    if (segundos !== 0) {
      segundos--;
    } else {
      minutos--;
      segundos = 60;
    }
  }, 1000);
}
