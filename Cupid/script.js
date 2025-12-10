function calculateLove() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const resultDiv = document.getElementById('result');
    const loadingDiv = document.getElementById('loading');

    if (name1 && name2) {
        resultDiv.innerHTML = '';
        loadingDiv.style.display = 'block';

        setTimeout(() => {
            const compatibility = Math.floor(Math.random() * 51) + 50; // 50-100
            let message = '';

            if (compatibility >= 90) {
                message = "🥰 Cinta yang sempurna berasal dari dua orang yang tidak sempurna dan mereka tak saling menyerah.";
            } else if (compatibility >= 70) {
                message = "😍 Butuh waktu sebentar untuk menyatakan cinta, tetapi perlu seumur hidup untuk membuktikannya.";
            } else {
                message = "😊 Jangan menghabiskan waktu untuk mencari yang sempurna, tapi lengkapilah kekurangannya.";
            }

            const loveMessages = [
                "Cinta sejati tidak pernah berakhir. Ia hanya tumbuh lebih kuat setiap hari.",
                "Cinta adalah saat kamu selalu memiliki alasan untuk kembali meski sudah berjalan terlalu jauh.",
                "Cinta itu sederhana, jika kamu tidak mampu membuatnya tertawa, cukup tidak membuatnya berduka.",
                "Cinta mungkin akan membuatmu terluka, tapi ia akan membuatmu semakin dewasa.",
                "Cinta mungkin hadir karena takdir tapi tak ada salahnya untuk saling memperjuangkan."
            ];
            const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];

            resultDiv.innerHTML = `
                <h2>Hasil Love Meter untuk ${name1} dan ${name2}</h2>
                <p>Tingkat kecocokan kalian adalah: ${compatibility}%</p>
                <p>${message}</p>
                <p><em>"${randomMessage}"</em></p>
            `;

            loadingDiv.style.display = 'none';
        }, 3000);
    } else {
        resultDiv.innerHTML = '<p style="color: red;">Mohon isi kedua nama.</p>';
    }
}