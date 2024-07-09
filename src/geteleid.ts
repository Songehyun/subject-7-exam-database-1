export const clickDiv = document.querySelector<HTMLDivElement>('.spanppers');
export const itemContainer =
  document.querySelector<HTMLDivElement>('.item-container');
export const historyContainer =
  document.querySelector<HTMLDivElement>('.history');
export const welcomeImage =
  document.querySelector<HTMLImageElement>('.welcome-image');
export const textOverlay =
  document.querySelector<HTMLDivElement>('.text-overlay');
export const itemImages = document.querySelectorAll<HTMLImageElement>(
  '.item-container img',
);
export const decideBuyBtn = document.getElementById(
  'decideBuy',
) as HTMLButtonElement;
export const receipt = document.getElementById('receipt') as HTMLDivElement;
export const purchaseHis = document.getElementById(
  'purchase-history',
) as HTMLDivElement;
export const nowmoney = document.getElementById('nowmoney') as HTMLSpanElement;

export const id = localStorage.getItem('id');
export const name = localStorage.getItem('name');

export function createPurchaseHistoryElements() {
  const firstDiv = document.createElement('div');
  const tagH3 = document.createElement('h3');
  const secondDiv = document.createElement('div');
  const thirdDiv = document.createElement('div');
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');

  return { firstDiv, tagH3, secondDiv, thirdDiv, btn1, btn2 };
}
