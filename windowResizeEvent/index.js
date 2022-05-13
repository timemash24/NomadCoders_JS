// 브라우저 너비에 따라 배경 색상 변경

const body = document.querySelector("body");

function handleWindowResize() {
  const width = window.innerWidth;
  const size = ["small", "medium", "large"];
  if (width > 900) {
    body.classList.remove(size[1]);
    body.classList.add(size[2]);
  } else if (width > 600) {
    if (body.classList.contains(size[0])) {
      body.classList.remove(size[0]);
      body.classList.add(size[1]);
    } else if (body.classList.contains(size[2])) {
      body.classList.remove(size[2]);
      body.classList.add(size[1]);
    }
  } else {
    body.classList.remove(size[1]);
    body.classList.add(size[0]);
  }
}

handleWindowResize(); // 사이즈에 맞는 배경 색상으로 초기화

window.addEventListener("resize", handleWindowResize);
