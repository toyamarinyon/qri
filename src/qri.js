(function() {
  var MAX_QRI_SIZE = 547;
  var qriSize = window.innerWidth < MAX_QRI_SIZE ? window.innerWidth : MAX_QRI_SIZE;
  var qri = document.createElement('img');
  qri.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'chart.googleapis.com/chart?cht=qr&chs='+qriSize+'x'+qriSize+'&chl='+location.href;

  var qriShow = false;
  var qriOpener = document.createElement('div');
  qriOpener.id = "qriOpener";
  qriOpener.innerHTML = "このページのQRコードを表示";
  qriOpener.style.margin = "0 auto";
  qriOpener.style.textAlign = "center";
  qriOpener.style.color = "#aaa";
  qriOpener.onclick = function() {
    var qriContainer = document.getElementById('qriContainer');
    if ( qriShow ) {
      qriContainer.style.display = 'none';
      this.innerHTML = "QRコードを表示";
      qriShow = false;
    }
    else {
      qriContainer.style.display = 'block';
      this.innerHTML = "QRコードを隠す";
      qriShow = true;
    }
  };
  var qriContainer = document.createElement('div');
  qriContainer.id = "qriContainer";
  qriContainer.style.display = 'none';
  qriContainer.style.textAlign = 'center';
  qriContainer.appendChild(qri);
  var s = document.getElementsByTagName('body')[0];
  s.appendChild(qriOpener);
  s.appendChild(qriContainer);
})();

