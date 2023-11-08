document.getElementById('createInvoiceBtn').addEventListener('click', createInvoice);

async function createInvoice() {
  try {
    // Ganti URL_API_INVOICE dengan URL sebenarnya dari API GPN untuk pembuatan invoice
    const apiUrl = 'URL_API_INVOICE';

    // Ganti 'YOUR_API_KEY' dengan kunci API yang diberikan oleh GPN
    const apiKey = 'YOUR_API_KEY';

    // Data untuk permintaan pembuatan invoice
    const invoiceData = {
      // Data invoice yang diperlukan (contoh: jumlah, deskripsi, dll.)
      amount: 100.0,
      description: 'Deskripsi Invoice',
      // ... lainnya sesuai dengan kebutuhan API GPN
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(invoiceData)
    });

    const data = await response.json();
    displayInvoiceResult(data); // Tampilkan hasil pembuatan invoice
  } catch (error) {
    console.error('Error creating invoice:', error);
    displayInvoiceResult('Ada kesalahan saat membuat invoice, silahkan coba lagi');
  }
}

function displayInvoiceResult(result) {
  const invoiceResult = document.getElementById('invoiceResult');
  invoiceResult.innerHTML = JSON.stringify(result, null, 2);
}
