document
  .getElementById('decideBuy')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const orderData = {
      id: id,
      ccount: cartCounts,
      total: totalPrice,
    };
    console.log(orderData);
    fetch('/buy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    }).then((response) => {
      if (response.ok) {
        const cartItemsElement = document.getElementById('cart-items');
        const decide = document.getElementById('decideBuy');
        const receipt = document.getElementById('receipt');
        alert('구매가 완료되었습니다.');
        cartItemsElement.innerHTML = '';
        cartCounts = {};
        document.getElementById('total-price').textContent = `0원`;
        let firstDiv = document.createElement('div');
        let tagH3 = document.createElement('h3');
        let secondDiv = document.createElement('div');
        let thirdDiv = document.createElement('div');
        let btn1 = document.createElement('button');
        let btn2 = document.createElement('button');

        tagH3.textContent = '영수증';

        firstDiv.appendChild(tagH3);

        btn1.setAttribute('id', 'returnMain');
        btn1.addEventListener('click', () => {
          receipt.style.display = 'none';
          receipt.innerHTML = '';
        });
        btn1.textContent = '더 구매할래';

        let innerCon = orderData.ccount;
        let content = '';
        for (key in innerCon) {
          content += `<div>${innerCon[key].Pname} ${innerCon[key].count}개 ${
            innerCon[key].price * innerCon[key].count
          }원</div>`;
        }
        let totalmoney = document.createElement('div');
        let allmoney = Object.keys(innerCon);
        let result = allmoney.reduce((sum, item) => {
          return sum + innerCon[item].price * innerCon[item].count;
        }, 0);

        totalmoney.textContent = `합계금액 : ${result}원`;

        secondDiv.innerHTML = content;
        secondDiv.appendChild(totalmoney);

        btn2.setAttribute('id', 'goExit');
        btn2.addEventListener('click', () => {
          window.open('/exit.html', '_self');
        });
        btn2.textContent = '상점나가기';

        thirdDiv.appendChild(btn1);
        thirdDiv.appendChild(btn2);

        receipt.appendChild(firstDiv);
        receipt.appendChild(secondDiv);
        receipt.appendChild(thirdDiv);

        receipt.style.display = 'block';
        receipt.style.position = 'absolute';

        function updateMoney() {
          const xhr = new XMLHttpRequest();
          xhr.open('POST', '/searchuserAcc');
          xhr.send(JSON.stringify({ id: id }));
          xhr.addEventListener('load', () => {
            const startmoney = JSON.parse(xhr.responseText);
            nowmoney.textContent = `${startmoney.AccBalance}원`;
          });
        }

        updateMoney();
      } else {
        alert('구매 중 오류가 발생했습니다.');
      }
    });
  });
