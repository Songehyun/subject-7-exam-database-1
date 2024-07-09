import {
  purchaseHis,
  receipt,
  id,
  createPurchaseHistoryElements,
} from './geteleid';
import { positionReceiptAboveSnappers } from './goExit';

interface PurchaseItem {
  Pname: string;
  Pprice: number;
  Quantity: number;
}

export let cartCounts: { [key: string]: PurchaseItem } = {};

function pcH(Htext: string) {
  purchaseHis.removeEventListener('click', handlePurchase, true);
  const { firstDiv, tagH3, secondDiv, thirdDiv, btn1, btn2 } =
    createPurchaseHistoryElements();

  tagH3.textContent = Htext;
  firstDiv.appendChild(tagH3);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/readHistory');
  xhr.send(JSON.stringify({ id: id }));
  xhr.addEventListener('load', () => {
    const result: PurchaseItem[] = JSON.parse(xhr.responseText);
    console.log(result);

    result.forEach((item) => {
      const pTag = document.createElement('p');
      pTag.textContent = `${item.Pname} ${item.Pprice}원 ${item.Quantity}개`;
      secondDiv.appendChild(pTag);
    });
  });

  btn1.setAttribute('id', 'returnMain');
  btn1.addEventListener('click', () => {
    purchaseHis.addEventListener('click', handlePurchase, true);
    receipt.style.display = 'none';
    receipt.innerHTML = '';
  });
  btn1.textContent = '더 구매할래';

  thirdDiv.appendChild(btn1);

  receipt.appendChild(firstDiv);
  receipt.appendChild(secondDiv);
  receipt.appendChild(thirdDiv);

  receipt.style.display = 'block';
  positionReceiptAboveSnappers();
}

function handlePurchase() {
  pcH('구매목록');
}

purchaseHis.addEventListener('click', handlePurchase, true);
