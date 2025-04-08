// server/solution.js
const generateSolution = (content) => {
    content = content.toLowerCase();
    if (content.includes('stres') || content.includes('pekerjaan')) {
        return 'Cobalah untuk mengatur waktu kerja dan istirahat dengan lebih baik. Luangkan waktu untuk relaksasi seperti meditasi atau olahraga ringan.';
    } else if (content.includes('pacar') || content.includes('cinta')) {
        return 'Komunikasi adalah kunci. Cobalah untuk berbicara secara terbuka dengan pasanganmu tentang perasaanmu.';
    } else {
        return 'Terima kasih telah berbagi. Cobalah untuk tetap tenang dan cari dukungan dari teman atau keluarga.';
    }
};

module.exports = { generateSolution };