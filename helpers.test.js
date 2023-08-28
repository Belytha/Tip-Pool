describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 50;
      tipAmtInput.value = 10;
      submitPaymentInfo();
    });
  
    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(10);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 25;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(35);
    });
  
    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(50);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 25;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(150);
    });
  
    it('should sum total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 25;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(45);
    });
  
    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
      expect(calculateTipPercent(100, 30)).toEqual(30);
      expect(calculateTipPercent(40, 8)).toEqual(20);
    });
  
    it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'newTd');
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('newTd');
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });