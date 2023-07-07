function fetchData() {
  return new Promise((resolve, reject) => {
    // Contoh operasi asynchronous, misalnya pengambilan data dari API
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

async function asyncExample() {
  try {
    console.log("Mulai");
    const result = await fetchData();
    console.log("Data diterima:", result);
    console.log("Selesai");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

asyncExample();
