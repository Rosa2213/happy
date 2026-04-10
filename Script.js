const mensaje = "Javi...!FELIZ CUMPLEAÑOS! Que hoy y siempre la vida te regale momentos llenos de felicidad, amor y sueños cumplidos💖 QuE LA vIdA tE sOrPrEnDa cOn Lo MeJoR, qUe NuNcA tE fAlTeN mOtIvOs PaRa SoNrEiR  y QuE tOdOs TuS sUeÑoS sE cOmIeNcEn A hAcErSe ReAliDaD✨ TE AMOOOOO💕 Gracias por cada momento juntos, por tu cariño y por ser tú 🌎";

let i = 0;

function escribirTexto() {
  if (i < mensaje.length) {
    document.getElementById("texto").innerHTML += mensaje.charAt(i);
    i++;
    setTimeout(escribirTexto, 40);
  }
}

window.onload = escribirTexto;

function mostrarGaleria() {
  document.getElementById("galeria").classList.remove("hidden");
}

function mostrarFinal() {
  document.getElementById("final").classList.remove("hidden");

  // 🎉 Confeti bonito
  for (let i = 0; i < 70; i++) {
    let confeti = document.createElement("div");
    confeti.innerHTML = ["💖","✨","🎉","💕"][Math.floor(Math.random()*4)];
    confeti.style.position = "fixed";
    confeti.style.left = Math.random() * 100 + "vw";
    confeti.style.top = "-10px";
    confeti.style.fontSize = "20px";
    confeti.style.animation = "caer 4s linear";

    document.body.appendChild(confeti);
  }
}

// animación caída
const style = document.createElement('style');
style.innerHTML = `
@keyframes caer {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);