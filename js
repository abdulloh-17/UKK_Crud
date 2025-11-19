document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        const nama = document.querySelector("input[name='nama']").value.trim();
        const tahun = document.querySelector("input[name='tahun_lulus']").value.trim();
        const pekerjaan = document.querySelector("input[name='pekerjaan_saat_ini']").value.trim();
        const telepon = document.querySelector("input[name='nomor_telepon']").value.trim();
        const email = document.querySelector("input[name='email']").value.trim();
        const alamat = document.querySelector("textarea[name='alamat']").value.trim();

        if (!nama || !tahun || !pekerjaan || !alamat) {
            alert("Harap isi semua field wajib!");
            e.preventDefault();
            return;
        }

        // Validasi nomor telepon
        if (telepon !== "" && !/^[0-9]+$/.test(telepon)) {
            alert("Nomor telepon harus berisi angka saja!");
            e.preventDefault();
            return;
        }

        // Validasi email sederhana
        if (email !== "" && !email.includes("@")) {
            alert("Format email tidak valid!");
            e.preventDefault();
            return;
        }
    });
});
