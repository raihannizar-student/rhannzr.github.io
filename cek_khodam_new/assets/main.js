function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Namamu Cokk!')
    } else {
        let status = [
            'isi',
            'kosong'
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus == 0) {
            let khodam = [
                'Jalangkung Naik Maxim',
                'Kunti Boti',
                'Tuyul Gondrong',
                'Pocong Berenang',
                'Genderuwo Nyanyi Dangdut',
                'Kuntilanak The Nuruls',
                'Wewe Gombel Suka Seblak',
                'Jinn Cilik Pencinta Upin Ipin',
                'Adudu Kepala Kotak',
                'Kuyang Main Bola',
                'Nenek Ember BTS',
                'Nenek Gayung Pengemar K - Pop',
                'Wewe Gombel jual Gorengan',
                'Aing Macan Saha Eta?',
                'Tuyul Pencinta Es Krim',
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        } else {
            $('#result').html(`${nama.toUpperCase()} - Kodam Kamu 'KOSONG'`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
})