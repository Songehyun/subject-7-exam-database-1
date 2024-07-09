import { decideBuyBtn, receipt } from './geteleid';

decideBuyBtn.addEventListener('click', () => {
  receipt.style.display = 'block';
  positionReceiptAboveSnappers(); // receipt를 snappersImage 위에 위치시키는 함수 호출
});

const goExit = document.getElementById('goExit');

// goExit.addEventListener("click", () => {
//   window.open("/exit.html", "_self");
// });

export function positionReceiptAboveSnappers() {
  receipt.style.position = 'absolute';
  // 예시로 위치를 조정하는 코드 추가 가능
}
