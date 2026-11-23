// Isi mE-Book "Rattib wa Takallam". Teks Arab dibungkus <span class="ar">…</span> agar tampil dengan font Arab.
const A = s => `<span class="ar">${s}</span>`;
window.BOOK = {
title: "Rattib wa Takallam",
subtitle: "Multimedia Electronic Book (mE-Book) Berbasis Augmented Reality: Belajar Qawā'id Nahwu dengan Gerakan Tangan",
arTitle: "تَرْكِيْبُ الْجُمْلَةِ الْعَرَبِيَّةِ بِتَقْنِيَّةِ الْوَاقِعِ الْمُعَزَّزِ",
authors: ["Dra. Hj. Nur Anisah Ridwan, M.Pd.","Moh. Fery Fauzi, S.Pd., M.Pd.I.","Herlina Ike Oktaviani, S.Pd., M.Pd.","Alfiyah Husna Amalina Sugiardi","Elis Agustina Lestari","Nur Izzatul Islamiyah"],
collab: "Mi Guangli, Ph.D. (Shandong Youth University of Political Science, China)",
chapters: [
/* ============================ BAB 1 ============================ */
{ n:1, code:"AR-1", ar:"الْكَلِمَةُ وَأَقْسَامُهَا", id:"Kata dan Jenisnya", latin:"Al-Kalimah wa Aqsāmuhā",
  capaian:["Siswa dapat membedakan isim, fi'il, dan harf.","Siswa dapat mengenali ciri-ciri isim dan fi'il dalam kalimat."],
  qawaid:`<p>Kata dalam bahasa Arab (<i>kalimah</i>) terbagi tiga.</p>
  <table><tr><th>Jenis</th><th>Pengertian</th><th>Ciri yang mudah dikenali</th><th>Contoh</th></tr>
  <tr><td>Isim (${A("اِسْمٌ")})</td><td>Kata benda, nama, sifat</td><td>Ber-${A("ال")}, bertanwin, didahului harf jar</td><td>${A("الْمَسْجِدُ، كِتَابٌ، مُحَمَّدٌ")}</td></tr>
  <tr><td>Fi'il (${A("فِعْلٌ")})</td><td>Kata kerja yang terikat waktu</td><td>Didahului ${A("قَدْ")} atau ${A("سَـ")}; diawali ${A("يَـ / تَـ / أَـ / نَـ")} (mudhāri')</td><td>${A("كَتَبَ، يَذْهَبُ، جَلَسَ")}</td></tr>
  <tr><td>Harf (${A("حَرْفٌ")})</td><td>Kata tugas; maknanya muncul bila bersambung kata lain</td><td>Tidak menerima ciri isim maupun fi'il</td><td>${A("فِيْ، إِلَى، مِنْ، عَلَى، هَلْ")}</td></tr></table>`,
  contoh:[
    {ar:"ذَهَبَ مُحَمَّدٌ إِلَى الْمَدْرَسَةِ", id:"Muhammad pergi ke sekolah. (fi'il: ذَهَبَ · isim: مُحَمَّدٌ، الْمَدْرَسَةِ · harf: إِلَى)"},
    {ar:"يَجْلِسُ الطَّالِبُ عَلَى الْكُرْسِيِّ", id:"Siswa itu duduk di atas kursi. (fi'il: يَجْلِسُ · isim: الطَّالِبُ، الْكُرْسِيِّ · harf: عَلَى)"}],
  syahid:[{ayah:"اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِيْ خَلَقَ", ref:"QS. Al-'Alaq [96]: 1", s:96, a:1,
    note:`Fi'il: ${A("اِقْرَأْ، خَلَقَ")}; harf: ${A("بِـ")}; isim: ${A("اسْمِ، رَبِّ، الَّذِيْ")}. Wahyu pertama sudah memuat ketiga jenis kata.`}],
  langkah:["<b>Pendahuluan (10 menit).</b> Guru menulis kalimat contoh dan meminta siswa menebak mana kata benda, kata kerja, dan kata tugas.","<b>Video & kaidah (20 menit).</b> Putar Video Materi Bab 1, lalu jelaskan tabel jenis kata.","<b>Aktivitas AR (30 menit).</b> Siswa maju per kelompok; tiap anggota memasukkan dua kartu ke keranjang dan menyebutkan cirinya.","<b>Penutup (20 menit).</b> Latihan interaktif dan analisis syāhid QS. Al-'Alaq: 1."],
  latihan:[
    {q:`Jenis kata ${A("الْمَدْرَسَةُ")} adalah …`, opts:["isim","fi'il","harf"], ans:0},
    {q:`Jenis kata ${A("يَلْعَبُ")} adalah …`, opts:["isim","fi'il","harf"], ans:1},
    {q:`Jenis kata ${A("عَلَى")} adalah …`, opts:["isim","fi'il","harf"], ans:2},
    {q:`Jenis kata ${A("قَرَأَ")} adalah …`, opts:["isim","fi'il","harf"], ans:1},
    {q:`Jenis kata ${A("قَلَمٌ")} adalah …`, opts:["isim","fi'il","harf"], ans:0},
    {q:`Sebutkan isim, fi'il, dan harf dalam: ${A("ذَهَبَ أَحْمَدُ إِلَى الْمَسْجِدِ")}`, open:`Fi'il: ${A("ذَهَبَ")}; isim: ${A("أَحْمَدُ، الْمَسْجِدِ")}; harf: ${A("إِلَى")}`}]},
/* ============================ BAB 2 ============================ */
{ n:2, code:"AR-2", ar:"الْإِعْرَابُ وَعَلَامَاتُهُ", id:"Perubahan Akhir Kata", latin:"Al-I'rāb wa 'Alāmātuhu",
  capaian:["Siswa dapat menjelaskan bahwa harakat akhir kata berubah sesuai kedudukannya dalam kalimat.","Siswa dapat memilih harakat akhir yang tepat: dhammah, fathah, kasrah, atau sukun."],
  qawaid:`<p><i>I'rāb</i> adalah perubahan akhir kata karena perbedaan kedudukannya dalam kalimat. Kata yang akhirnya bisa berubah disebut <i>mu'rab</i>; yang tetap disebut <i>mabnī</i> (misalnya ${A("هٰذَا، هُوَ، فِيْ")}).</p>
  <table><tr><th>Keadaan</th><th>Tanda asli</th><th>Berlaku untuk</th><th>Contoh</th></tr>
  <tr><td>Rafa'</td><td>Dhammah</td><td>Isim dan fi'il mudhāri'</td><td>${A("جَاءَ الطَّالِبُ")}</td></tr>
  <tr><td>Nashab</td><td>Fathah</td><td>Isim dan fi'il mudhāri'</td><td>${A("رَأَيْتُ الطَّالِبَ")}</td></tr>
  <tr><td>Jar</td><td>Kasrah</td><td>Isim saja</td><td>${A("سَلَّمْتُ عَلَى الطَّالِبِ")}</td></tr>
  <tr><td>Jazm</td><td>Sukun</td><td>Fi'il mudhāri' saja</td><td>${A("لَمْ يَذْهَبْ")}</td></tr></table>
  <p>Kata ${A("الطَّالِب")} pada tiga contoh pertama sama, tetapi harakat akhirnya berbeda karena kedudukannya berbeda: pelaku, objek, dan sesudah harf jar.</p>`,
  contoh:[{ar:"جَاءَ الطَّالِبُ", id:"Siswa itu datang. (rafa')"},{ar:"رَأَيْتُ الطَّالِبَ", id:"Saya melihat siswa itu. (nashab)"},{ar:"سَلَّمْتُ عَلَى الطَّالِبِ", id:"Saya memberi salam kepada siswa itu. (jar)"},{ar:"لَمْ يَذْهَبْ أَحْمَدُ", id:"Ahmad tidak pergi. (jazm)"}],
  syahid:[{ayah:"لَمْ يَلِدْ وَلَمْ يُوْلَدْ", ref:"QS. Al-Ikhlāṣ [112]: 3", s:112, a:3, note:`Fi'il ${A("يَلِدْ")} dan ${A("يُوْلَدْ")} berharakat akhir sukun (majzūm) karena didahului ${A("لَمْ")}.`}],
  langkah:["<b>Pendahuluan (10 menit).</b> Guru menulis الطَّالِب tiga kali dengan harakat berbeda dan bertanya mengapa bisa berbeda.","<b>Video & kaidah (20 menit).</b> Putar Video Materi Bab 2, lalu jelaskan empat keadaan i'rāb dengan warna berbeda.","<b>Aktivitas AR (30 menit).</b> Siswa menyusun kalimat; teman sekelas menyebut keadaan i'rāb kartu yang dipilih.","<b>Penutup (20 menit).</b> Latihan interaktif dan pembacaan QS. Al-Ikhlāṣ dengan memperhatikan harakat akhir."],
  latihan:[
    {q:`${A("جَاءَ الْمُدَرِّسـ..")} — harakat akhir yang tepat:`, opts:["الْمُدَرِّسُ","الْمُدَرِّسَ","الْمُدَرِّسِ"], ar:true, ans:0},
    {q:`${A("رَأَيْتُ الْبَيْتـ..")} — harakat akhir yang tepat:`, opts:["الْبَيْتُ","الْبَيْتَ","الْبَيْتِ"], ar:true, ans:1},
    {q:`${A("ذَهَبْتُ إِلَى الْمَسْجِدـ..")} — harakat akhir yang tepat:`, opts:["الْمَسْجِدُ","الْمَسْجِدَ","الْمَسْجِدِ"], ar:true, ans:2},
    {q:`${A("لَمْ يَكْتُبـ..")} — harakat akhir yang tepat:`, opts:["يَكْتُبُ","يَكْتُبَ","يَكْتُبْ"], ar:true, ans:2},
    {q:`Keadaan i'rāb ${A("الْكِتَابَ")} dalam ${A("يَقْرَأُ الطَّالِبُ الْكِتَابَ")} adalah …`, opts:["rafa'","nashab","jar","jazm"], ans:1}]},
/* ============================ BAB 3 ============================ */
{ n:3, code:"AR-3", ar:"الْمَعْرِفَةُ وَالنَّكِرَةُ", id:"Kata Ganti dan Kata Tunjuk", latin:"Al-Ma'rifah wa al-Nakirah",
  capaian:["Siswa dapat membedakan isim ma'rifah (tertentu) dan nakirah (tak tentu).","Siswa dapat memakai dhamīr, isim isyarah, dan isim maushūl sesuai jenis (mudzakkar/muannats)."],
  qawaid:`<p><i>Nakirah</i> adalah isim yang belum tertentu, biasanya bertanwin: ${A("كِتَابٌ")} (sebuah buku). <i>Ma'rifah</i> adalah isim yang sudah tertentu. Di tingkat MTs, ma'rifah yang dipelajari ada lima.</p>
  <table><tr><th>Jenis ma'rifah</th><th>Contoh</th></tr>
  <tr><td>Dhamīr (kata ganti)</td><td>${A("أَنَا، نَحْنُ، أَنْتَ، أَنْتِ، هُوَ، هِيَ")}</td></tr>
  <tr><td>'Alam (nama)</td><td>${A("مُحَمَّدٌ، فَاطِمَةُ")}</td></tr>
  <tr><td>Isim isyarah (kata tunjuk)</td><td>${A("هٰذَا، هٰذِهِ، ذٰلِكَ، تِلْكَ")}</td></tr>
  <tr><td>Isim maushūl (kata sambung "yang")</td><td>${A("الَّذِيْ، الَّتِيْ")}</td></tr>
  <tr><td>Isim ber-${A("ال")}</td><td>${A("الْكِتَابُ، الْمَدْرَسَةُ")}</td></tr></table>
  <table><tr><th></th><th>Mudzakkar</th><th>Muannats</th></tr>
  <tr><td>Dia</td><td>${A("هُوَ")}</td><td>${A("هِيَ")}</td></tr><tr><td>Ini</td><td>${A("هٰذَا")}</td><td>${A("هٰذِهِ")}</td></tr>
  <tr><td>Itu</td><td>${A("ذٰلِكَ")}</td><td>${A("تِلْكَ")}</td></tr><tr><td>Yang</td><td>${A("الَّذِيْ")}</td><td>${A("الَّتِيْ")}</td></tr></table>`,
  contoh:[{ar:"هُوَ طَالِبٌ", id:"Dia (lk.) seorang siswa."},{ar:"هِيَ مُدَرِّسَةٌ", id:"Dia (pr.) seorang guru."},{ar:"هٰذِهِ حَقِيْبَةٌ", id:"Ini tas."},{ar:"ذٰلِكَ بَابٌ", id:"Itu pintu."},{ar:"الطَّالِبُ الَّذِيْ يَقْرَأُ أَحْمَدُ", id:"Siswa yang membaca itu Ahmad."}],
  syahid:[{ayah:"هُوَ الَّذِيْ خَلَقَ لَكُمْ مَا فِي الْأَرْضِ جَمِيْعًا", ref:"QS. Al-Baqarah [2]: 29", s:2, a:29, note:`Diawali dhamīr ${A("هُوَ")} dan isim maushūl ${A("الَّذِيْ")}: "Dialah yang menciptakan untukmu segala yang ada di bumi."`}],
  langkah:["<b>Pendahuluan (10 menit).</b> Guru menunjuk siswa laki-laki dan perempuan sambil berkata هُوَ طَالِبٌ dan هِيَ طَالِبَةٌ.","<b>Video & kaidah (20 menit).</b> Putar Video Materi Bab 3, lalu jelaskan tabel dhamīr, isyarah, dan maushūl.","<b>Aktivitas AR (30 menit).</b> Siswa menyusun kartu; kelompok lain menunjuk benda nyata di kelas yang sesuai.","<b>Penutup (20 menit).</b> Latihan interaktif dan pembahasan syāhid QS. Al-Baqarah: 29."],
  latihan:[
    {q:`.......... ${A("طَالِبَةٌ")}`, opts:["هُوَ","هِيَ"], ar:true, ans:1},
    {q:`.......... ${A("طُلَّابٌ")}`, opts:["أَنَا","نَحْنُ"], ar:true, ans:1},
    {q:`.......... ${A("سَيَّارَةٌ")} (jauh)`, opts:["ذٰلِكَ","تِلْكَ"], ar:true, ans:1},
    {q:`.......... ${A("قَلَمٌ")} (dekat)`, opts:["هٰذَا","هٰذِهِ"], ar:true, ans:0},
    {q:`${A("الطَّالِبَةُ .......... تَكْتُبُ فَاطِمَةُ")}`, opts:["الَّذِيْ","الَّتِيْ"], ar:true, ans:1}]},
/* ============================ BAB 4 ============================ */
{ n:4, code:"AR-4", ar:"الْمُبْتَدَأُ وَالْخَبَرُ", id:"Kalimat Nominal", latin:"Al-Mubtada' wa al-Khabar",
  capaian:["Siswa dapat menyusun jumlah ismiyyah dari mubtada' dan khabar.","Siswa dapat menyesuaikan khabar dengan jenis mubtada'.","Siswa dapat membedakan kalimat lengkap dari frasa sifat."],
  qawaid:`<p><i>Mubtada'</i> adalah pokok kalimat; <i>khabar</i> adalah keterangan yang menyempurnakannya. Keduanya marfū' (dhammah).</p>
  <ol><li>Mubtada' umumnya ma'rifah, khabar umumnya nakirah: ${A("الْمَسْجِدُ نَظِيْفٌ")} (Masjid itu bersih).</li>
  <li>Khabar mengikuti jenis mubtada': ${A("الْمَدْرَسَةُ كَبِيْرَةٌ")}.</li>
  <li>Khabar boleh berupa jar-majrūr: ${A("الْمُدَرِّسُ فِي الْفَصْلِ")} (Guru itu di kelas).</li>
  <li>Bila sifat juga ber-${A("ال")}, hasilnya baru frasa: ${A("الْمَسْجِدُ النَّظِيْفُ")} (masjid yang bersih), belum kalimat.</li></ol>`,
  contoh:[{ar:"هٰذَا الْكِتَابُ جَدِيْدٌ", id:"Buku ini baru."},{ar:"الْمَدْرَسَةُ كَبِيْرَةٌ", id:"Sekolah itu besar."},{ar:"الْمُدَرِّسُ فِي الْفَصْلِ", id:"Guru itu di kelas."}],
  syahid:[{ayah:"اَللّٰهُ الصَّمَدُ", ref:"QS. Al-Ikhlāṣ [112]: 2", s:112, a:2, note:`Mubtada' ${A("اَللّٰهُ")} dan khabar ${A("الصَّمَدُ")}.`},
          {ayah:"اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ", ref:"QS. Al-Fātiḥah [1]: 2", s:1, a:2, note:`Khabarnya berupa jar-majrūr (${A("لِلّٰهِ")}).`}],
  langkah:["<b>Pendahuluan (10 menit).</b> Guru bertanya: كَيْفَ الْفَصْلُ؟ Siswa menjawab dengan satu kata sifat.","<b>Video & kaidah (20 menit).</b> Putar Video Materi Bab 4, lalu jelaskan empat kaidah.","<b>Aktivitas AR (30 menit).</b> Lomba antarkelompok; kesalahan paling sedikit mendapat poin tambahan.","<b>Penutup (20 menit).</b> Latihan interaktif dan analisis syāhid."],
  latihan:[
    {q:`${A("الْفَصْلُ ..........")}`, opts:["وَاسِعٌ","وَاسِعَةٌ"], ar:true, ans:0},
    {q:`${A("الْحَدِيْقَةُ ..........")}`, opts:["جَمِيْلٌ","جَمِيْلَةٌ"], ar:true, ans:1},
    {q:`${A("الْمَسْجِدُ الْكَبِيْرُ")} adalah …`, opts:["kalimat lengkap","frasa"], ans:1},
    {q:`${A("الْمَسْجِدُ كَبِيْرٌ")} adalah …`, opts:["kalimat lengkap","frasa"], ans:0},
    {q:"Terjemahkan ke dalam bahasa Arab: Pena itu di atas meja.", open:A("الْقَلَمُ عَلَى الْمَكْتَبِ")}]},
/* ============================ BAB 5 ============================ */
{ n:5, code:"AR-5", ar:"كَانَ وَإِنَّ وَأَخَوَاتُهُمَا", id:"Kāna dan Inna beserta Saudaranya", latin:"Al-Nawāsikh",
  capaian:["Siswa dapat menjelaskan perubahan harakat mubtada'-khabar setelah dimasuki kāna atau inna.","Siswa dapat menyusun kalimat dengan kāna, inna, dan saudara-saudaranya."],
  qawaid:`<p><i>Nawāsikh</i> adalah kata yang masuk ke jumlah ismiyyah dan mengubah harakat akhirnya.</p>
  <table><tr><th>Kelompok</th><th>Anggota</th><th>Pengaruh</th><th>Contoh</th></tr>
  <tr><td>Kāna wa akhawātuhā</td><td>${A("كَانَ")} (dulu/adalah), ${A("أَصْبَحَ")} (menjadi), ${A("صَارَ")} (menjadi), ${A("لَيْسَ")} (bukan)</td><td>Isim <b>marfū'</b>, khabar <b>manshūb</b></td><td>${A("كَانَ الْجَوُّ حَارًّا")}</td></tr>
  <tr><td>Inna wa akhawātuhā</td><td>${A("إِنَّ")} (sesungguhnya), ${A("كَأَنَّ")} (seakan-akan), ${A("لٰكِنَّ")} (tetapi), ${A("لَعَلَّ")} (semoga), ${A("لَيْتَ")} (andai)</td><td>Isim <b>manshūb</b>, khabar <b>marfū'</b></td><td>${A("إِنَّ الْفَصْلَ نَظِيْفٌ")}</td></tr></table>
  <p>Cara mudah mengingatnya: <b>kāna mengubah khabar, inna mengubah isim</b>.</p>`,
  contoh:[{ar:"الْجَوُّ حَارٌّ", id:"Cuaca panas. (asal)"},{ar:"كَانَ الْجَوُّ حَارًّا", id:"Cuaca (tadi) panas."},{ar:"إِنَّ الْجَوَّ حَارٌّ", id:"Sesungguhnya cuaca panas."},{ar:"لَعَلَّ الْمُدَرِّسَ حَاضِرٌ", id:"Semoga guru itu hadir."}],
  syahid:[{ayah:"وَكَانَ اللّٰهُ عَلِيْمًا حَكِيْمًا", ref:"QS. An-Nisā' [4]: 17", s:4, a:17, note:`Isim kāna ${A("اللّٰهُ")} marfū', khabarnya ${A("عَلِيْمًا حَكِيْمًا")} manshūb.`},
          {ayah:"إِنَّ اللّٰهَ غَفُوْرٌ رَحِيْمٌ", ref:"QS. Al-Baqarah [2]: 173", s:2, a:173, note:`Isim inna ${A("اللّٰهَ")} manshūb, khabarnya marfū'.`}],
  langkah:["<b>Pendahuluan (10 menit).</b> Guru menulis الْجَوُّ حَارٌّ, lalu menambahkan كَانَ dan إِنَّ di depannya.","<b>Video & kaidah (20 menit).</b> Putar Video Materi Bab 5, lalu jelaskan tabel nawāsikh.","<b>Aktivitas AR (30 menit).</b> Siswa menyusun kartu; teman sekelas menunjuk kata yang harakatnya berubah.","<b>Penutup (20 menit).</b> Latihan interaktif dan analisis dua syāhid."],
  latihan:[
    {q:`Masukkan ${A("كَانَ")} ke dalam ${A("الْجَوُّ بَارِدٌ")}`, open:A("كَانَ الْجَوُّ بَارِدًا")},
    {q:`Masukkan ${A("إِنَّ")} ke dalam ${A("الْمَسْجِدُ نَظِيْفٌ")}`, open:A("إِنَّ الْمَسْجِدَ نَظِيْفٌ")},
    {q:`${A("لَيْسَ الطَّالِبُ ..........")}`, opts:["غَائِبٌ","غَائِبًا"], ar:true, ans:1},
    {q:`${A("لَعَلَّ .......... نَاجِحٌ")}`, opts:["أَحْمَدُ","أَحْمَدَ"], ar:true, ans:1}]},
/* ============================ BAB 6 ============================ */
{ n:6, code:"AR-6", ar:"الْفَاعِلُ وَنَائِبُ الْفَاعِلِ", id:"Pelaku dan Pengganti Pelaku", latin:"Al-Fā'il wa Nā'ib al-Fā'il",
  capaian:["Siswa dapat menyusun jumlah fi'liyyah dengan urutan fi'il → fā'il.","Siswa dapat menyesuaikan fi'il dengan jenis fā'il.","Siswa dapat mengubah kalimat aktif menjadi pasif."],
  qawaid:`<p><b>1. Fā'il</b> adalah pelaku pekerjaan. Letaknya sesudah fi'il dan selalu marfū': ${A("جَلَسَ الطَّالِبُ")}.</p>
  <p><b>2. Kesesuaian fi'il.</b> Bila fā'il perempuan, fi'il ditandai ta': ${A("تَقْرَأُ فَاطِمَةُ، قَرَأَتْ فَاطِمَةُ")}. Bila fā'il jamak dan letaknya sesudah fi'il, fi'il tetap tunggal: ${A("جَلَسَ الطُّلَّابُ")}.</p>
  <p><b>3. Nā'ib al-fā'il</b> adalah pengganti pelaku dalam kalimat pasif. Fi'ilnya berbentuk <i>majhūl</i> dan objek semula menjadi marfū'.</p>
  <table><tr><th>Aktif (ma'lūm)</th><th>Pasif (majhūl)</th><th>Arti pasif</th></tr>
  <tr><td>${A("كَتَبَ أَحْمَدُ الدَّرْسَ")}</td><td>${A("كُتِبَ الدَّرْسُ")}</td><td>Pelajaran itu ditulis.</td></tr>
  <tr><td>${A("فَتَحَ الْمُدَرِّسُ الْبَابَ")}</td><td>${A("فُتِحَ الْبَابُ")}</td><td>Pintu itu dibuka.</td></tr>
  <tr><td>${A("يَكْتُبُ أَحْمَدُ الدَّرْسَ")}</td><td>${A("يُكْتَبُ الدَّرْسُ")}</td><td>Pelajaran itu sedang ditulis.</td></tr></table>
  <p>Pola fi'il majhūl: māḍī → huruf pertama dhammah, huruf sebelum akhir kasrah (${A("كُتِبَ")}); mudhāri' → huruf pertama dhammah, huruf sebelum akhir fathah (${A("يُكْتَبُ")}). Fi'il juga mengikuti jenis nā'ib al-fā'il: ${A("كُتِبَتِ الرِّسَالَةُ")}.</p>`,
  contoh:[{ar:"يَكْتُبُ أَحْمَدُ الدَّرْسَ", id:"Ahmad menulis pelajaran."},{ar:"تَقْرَأُ فَاطِمَةُ الْكِتَابَ", id:"Fatimah membaca buku."},{ar:"جَلَسَ الطُّلَّابُ فِي الْفَصْلِ", id:"Para siswa duduk di kelas."},{ar:"فُتِحَ الْبَابُ", id:"Pintu itu dibuka."}],
  syahid:[{ayah:"قَدْ أَفْلَحَ الْمُؤْمِنُوْنَ", ref:"QS. Al-Mu'minūn [23]: 1", s:23, a:1, note:`Fā'il-nya ${A("الْمُؤْمِنُوْنَ")}; fi'il tetap tunggal walau fā'il-nya jamak.`},
          {ayah:"كُتِبَ عَلَيْكُمُ الصِّيَامُ", ref:"QS. Al-Baqarah [2]: 183", s:2, a:183, note:`Fi'il majhūl ${A("كُتِبَ")} dengan nā'ib al-fā'il ${A("الصِّيَامُ")}.`}],
  langkah:["<b>Pendahuluan (10 menit).</b> Guru memperagakan membuka pintu: فَتَحَ الْمُدَرِّسُ الْبَابَ, lalu bertanya bagaimana bila pelakunya tidak disebut.","<b>Video & kaidah (20 menit).</b> Putar Video Materi Bab 6, lalu jelaskan fā'il, kesesuaian fi'il, dan kalimat pasif.","<b>Aktivitas AR (30 menit).</b> Satu siswa menyusun kartu; siswa lain memperagakan kalimatnya.","<b>Penutup (20 menit).</b> Latihan interaktif dan analisis dua syāhid."],
  latihan:[
    {q:`Ubah menjadi pasif: ${A("فَتَحَ الْمُدَرِّسُ الْبَابَ")}`, open:A("فُتِحَ الْبَابُ")},
    {q:`Ubah menjadi pasif: ${A("كَتَبَ أَحْمَدُ الرِّسَالَةَ")}`, open:A("كُتِبَتِ الرِّسَالَةُ")},
    {q:`${A(".......... الطَّالِبَاتُ")}`, opts:["حَضَرَ","حَضَرَتْ"], ar:true, ans:1},
    {q:`Fā'il dalam ${A("ذَهَبَ الْمُدَرِّسُ إِلَى الْمَسْجِدِ")} adalah …`, opts:["ذَهَبَ","الْمُدَرِّسُ","الْمَسْجِدِ"], ar:true, ans:1}]},
/* ============================ BAB 7 ============================ */
{ n:7, code:"AR-7", ar:"الْمَفْعُوْلُ بِهِ وَالظَّرْفُ", id:"Objek serta Keterangan Waktu dan Tempat", latin:"Al-Maf'ūl bih wa al-Ẓarf",
  capaian:["Siswa dapat menentukan maf'ūl bih dalam kalimat.","Siswa dapat memakai keterangan waktu dan tempat (ẓarf) dengan harakat yang tepat."],
  qawaid:`<p><b>1. Maf'ūl bih</b> adalah objek yang dikenai pekerjaan. Letaknya umumnya sesudah fā'il dan selalu manshūb: ${A("يَشْرَبُ أَحْمَدُ اللَّبَنَ")}.</p>
  <p><b>2. Ẓarf (maf'ūl fīh)</b> adalah keterangan waktu atau tempat terjadinya pekerjaan, juga manshūb.</p>
  <table><tr><th>Ẓarf zamān</th><th>Arti</th><th>Ẓarf makān</th><th>Arti</th></tr>
  <tr><td>${A("صَبَاحًا")}</td><td>pagi hari</td><td>${A("أَمَامَ")}</td><td>di depan</td></tr>
  <tr><td>${A("مَسَاءً")}</td><td>sore hari</td><td>${A("خَلْفَ")}</td><td>di belakang</td></tr>
  <tr><td>${A("لَيْلًا")}</td><td>malam hari</td><td>${A("فَوْقَ")}</td><td>di atas</td></tr>
  <tr><td>${A("يَوْمَ الْجُمُعَةِ")}</td><td>hari Jumat</td><td>${A("تَحْتَ")}</td><td>di bawah</td></tr></table>
  <p>Urutan lengkap jumlah fi'liyyah: <b>fi'il → fā'il → maf'ūl bih → keterangan</b>, misalnya ${A("تَكْتُبُ فَاطِمَةُ الرِّسَالَةَ لَيْلًا")}.</p>`,
  contoh:[{ar:"أَقْرَأُ الْقُرْآنَ صَبَاحًا", id:"Saya membaca Al-Qur'an pagi hari."},{ar:"يَشْرَبُ أَحْمَدُ اللَّبَنَ", id:"Ahmad minum susu."},{ar:"يَقِفُ الْمُدَرِّسُ أَمَامَ الْفَصْلِ", id:"Guru berdiri di depan kelas."},{ar:"تَكْتُبُ فَاطِمَةُ الرِّسَالَةَ لَيْلًا", id:"Fatimah menulis surat malam hari."}],
  syahid:[{ayah:"يُرِيْدُ اللّٰهُ بِكُمُ الْيُسْرَ", ref:"QS. Al-Baqarah [2]: 185", s:2, a:185, note:`Maf'ūl bih-nya ${A("الْيُسْرَ")} (manshūb).`},
          {ayah:"وَسَبِّحُوْهُ بُكْرَةً وَأَصِيْلًا", ref:"QS. Al-Aḥzāb [33]: 42", s:33, a:42, note:`${A("بُكْرَةً")} (pagi) dan ${A("أَصِيْلًا")} (petang) adalah ẓarf zamān.`}],
  langkah:["<b>Pendahuluan (10 menit).</b> Guru meletakkan buku di atas, di bawah, dan di depan meja sambil menyebut فَوْقَ، تَحْتَ، أَمَامَ.","<b>Video & kaidah (20 menit).</b> Putar Video Materi Bab 7, lalu jelaskan maf'ūl bih dan ẓarf.","<b>Aktivitas AR (30 menit).</b> Siswa menyusun kalimat tentang kegiatan hariannya, lalu memeriksanya dengan media AR.","<b>Penutup (20 menit).</b> Latihan interaktif dan analisis dua syāhid."],
  latihan:[
    {q:`Maf'ūl bih dalam ${A("يَأْكُلُ الطِّفْلُ الْخُبْزَ")} adalah …`, opts:["يَأْكُلُ","الطِّفْلُ","الْخُبْزَ"], ar:true, ans:2},
    {q:`${A("أَشْرَبُ ..........")}`, opts:["الْمَاءُ","الْمَاءَ"], ar:true, ans:1},
    {q:`${A("يَجْلِسُ الْقِطُّ .......... الْمَكْتَبِ")}`, opts:["تَحْتُ","تَحْتَ"], ar:true, ans:1},
    {q:"Terjemahkan ke dalam bahasa Arab: Saya belajar malam hari.", open:A("أَدْرُسُ لَيْلًا")}]},
/* ============================ BAB 8 ============================ */
{ n:8, code:"AR-8", ar:"الْمَجْرُوْرَاتُ وَالتَّوَابِعُ", id:"Kata Depan, Gabungan Kata, dan Sifat", latin:"Al-Majrūrāt wa al-Tawābi'",
  capaian:["Siswa dapat memakai harf jar dan memberi harakat kasrah pada isim sesudahnya.","Siswa dapat menyusun iḍāfah dengan benar.","Siswa dapat menyesuaikan na't dengan man'ūt-nya."],
  qawaid:`<p><b>1. Harf jar.</b> Isim sesudah harf jar menjadi majrūr (kasrah).</p>
  <table><tr><th>Harf jar</th><th>Arti</th><th>Contoh</th></tr>
  <tr><td>${A("مِنْ")}</td><td>dari</td><td>${A("مِنَ الْبَيْتِ")}</td></tr><tr><td>${A("إِلَى")}</td><td>ke</td><td>${A("إِلَى الْمَدْرَسَةِ")}</td></tr>
  <tr><td>${A("فِيْ")}</td><td>di dalam</td><td>${A("فِي الْفَصْلِ")}</td></tr><tr><td>${A("عَلَى")}</td><td>di atas</td><td>${A("عَلَى الْمَكْتَبِ")}</td></tr>
  <tr><td>${A("بِـ")}</td><td>dengan</td><td>${A("بِالْقَلَمِ")}</td></tr></table>
  <p><b>2. Iḍāfah.</b> Gabungan dua isim yang bermakna kepemilikan. Kata pertama (<i>muḍāf</i>) tanpa ${A("ال")} dan tanpa tanwin; kata kedua (<i>muḍāf ilaih</i>) selalu majrūr: ${A("حَقِيْبَةُ الطَّالِبِ")} (tas siswa).</p>
  <p><b>3. Na't (sifat).</b> Na't mengikuti man'ūt dalam ta'rīf (${A("ال")}), jenis, dan harakat akhir.</p>
  <table><tr><th>Man'ūt + na't</th><th>Keadaan</th><th>Arti</th></tr>
  <tr><td>${A("الْكِتَابُ الْجَدِيْدُ")}</td><td>marfū'</td><td>buku yang baru</td></tr>
  <tr><td>${A("الْكِتَابَ الْجَدِيْدَ")}</td><td>manshūb</td><td>buku yang baru (objek)</td></tr>
  <tr><td>${A("الْكِتَابِ الْجَدِيْدِ")}</td><td>majrūr</td><td>buku yang baru (sesudah harf jar)</td></tr>
  <tr><td>${A("سَيَّارَةٌ جَدِيْدَةٌ")}</td><td>marfū', muannats, nakirah</td><td>mobil baru</td></tr></table>`,
  contoh:[{ar:"الْكِتَابُ عَلَى الْمَكْتَبِ", id:"Buku itu di atas meja."},{ar:"أَرْجِعُ مِنَ الْمَدْرَسَةِ إِلَى الْبَيْتِ", id:"Saya pulang dari sekolah ke rumah."},{ar:"هٰذِهِ حَقِيْبَةُ الطَّالِبِ", id:"Ini tas siswa."},{ar:"أَقْرَأُ الْكِتَابَ الْجَدِيْدَ", id:"Saya membaca buku yang baru."}],
  syahid:[{ayah:"بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ", ref:"QS. Al-Fātiḥah [1]: 1", s:1, a:1, note:`Satu ayat memuat ketiga kaidah bab ini: harf jar (${A("بِـ")}), iḍāfah (${A("اسْمِ اللّٰهِ")}), dan na't (${A("الرَّحْمٰنِ الرَّحِيْمِ")}), semuanya majrūr.`}],
  langkah:["<b>Pendahuluan (10 menit).</b> Guru mengambil tas seorang siswa dan bertanya: حَقِيْبَةُ مَنْ هٰذِهِ؟","<b>Video & kaidah (20 menit).</b> Putar Video Materi Bab 8, lalu jelaskan harf jar, iḍāfah, dan na't.","<b>Aktivitas AR (30 menit).</b> Siswa menyusun kartu; kelompok lain menyebut harakat akhir tiap kata dan alasannya.","<b>Penutup (20 menit).</b> Latihan interaktif dan analisis basmalah sebagai syāhid."],
  latihan:[
    {q:`${A("ذَهَبْتُ إِلَى السُّوْقـ..")} — harakat akhir yang tepat:`, opts:["السُّوْقُ","السُّوْقَ","السُّوْقِ"], ar:true, ans:2},
    {q:`Gabungkan menjadi iḍāfah: ${A("الْكِتَابُ + الْمُدَرِّسُ")}`, open:A("كِتَابُ الْمُدَرِّسِ")},
    {q:`${A("رَأَيْتُ الْمَسْجِدَ ..........")}`, opts:["الْكَبِيْرَ","كَبِيْرًا"], ar:true, ans:0},
    {q:`${A("هٰذِهِ سَيَّارَةٌ ..........")}`, opts:["جَدِيْدٌ","جَدِيْدَةٌ"], ar:true, ans:1}]},
],
evaluasi:[
  {q:`Kata ${A("يَذْهَبُ")} termasuk …`, opts:["isim","fi'il","harf","dhamīr"], ans:1},
  {q:"Tanda asli jazm adalah …", opts:["dhammah","fathah","kasrah","sukun"], ans:3},
  {q:`.......... ${A("مُدَرِّسَةٌ")}`, opts:["هُوَ","هِيَ","هٰذَا","ذٰلِكَ"], ar:true, ans:1},
  {q:"Yang merupakan kalimat lengkap adalah …", opts:["الْبَابُ الْكَبِيْرُ","الْبَابُ كَبِيْرٌ","بَابٌ الْكَبِيْرُ","الْكَبِيْرُ الْبَابُ"], ar:true, ans:1},
  {q:`${A("كَانَ الْجَوُّ ..........")}`, opts:["بَارِدٌ","بَارِدًا","بَارِدٍ","الْبَارِدُ"], ar:true, ans:1},
  {q:`${A("إِنَّ .......... نَظِيْفٌ")}`, opts:["الْفَصْلُ","الْفَصْلَ","الْفَصْلِ","فَصْلٌ"], ar:true, ans:1},
  {q:`${A(".......... فَاطِمَةُ الْكِتَابَ")}`, opts:["يَقْرَأُ","تَقْرَأُ","أَقْرَأُ","نَقْرَأُ"], ar:true, ans:1},
  {q:`Bentuk pasif dari ${A("فَتَحَ الْمُدَرِّسُ الْبَابَ")} adalah …`, opts:["فُتِحَ الْبَابُ","فُتِحَ الْبَابَ","فَتَحَ الْبَابُ","يَفْتَحُ الْبَابَ"], ar:true, ans:0},
  {q:`Dalam ${A("يُرِيْدُ اللّٰهُ بِكُمُ الْيُسْرَ")}, yang menjadi maf'ūl bih adalah …`, opts:["يُرِيْدُ","اللّٰهُ","بِكُمُ","الْيُسْرَ"], ar:true, ans:3},
  {q:`Dalam ${A("بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ")}, kata ${A("الرَّحْمٰنِ")} berkedudukan sebagai …`, opts:["khabar","fā'il","na't","maf'ūl bih"], ans:2}],
glosarium:[["Augmented Reality (AR)","Teknologi yang menampilkan objek digital di atas tampilan dunia nyata secara langsung"],["Hand tracking","Pelacakan posisi dan bentuk tangan melalui kamera untuk mengendalikan perangkat"],["MediaPipe","Pustaka kecerdasan buatan dari Google untuk mendeteksi titik-titik sendi tangan"],["Isim / fi'il / harf","Kata benda / kata kerja / kata tugas"],["I'rāb","Perubahan akhir kata karena perbedaan kedudukannya dalam kalimat"],["Mu'rab / mabnī","Kata yang akhirnya dapat berubah / tetap"],["Rafa' / nashab / jar / jazm","Empat keadaan i'rāb dengan tanda asli dhammah / fathah / kasrah / sukun"],["Ma'rifah / nakirah","Isim tertentu / tak tentu"],["Dhamīr","Kata ganti"],["Isim isyarah","Kata tunjuk"],["Isim maushūl","Kata sambung \"yang\""],["Mubtada' / khabar","Pokok kalimat / keterangannya dalam jumlah ismiyyah"],["Nawāsikh","Kata yang mengubah harakat mubtada'-khabar (kāna, inna, dan saudaranya)"],["Fā'il","Pelaku pekerjaan"],["Fi'il majhūl","Kata kerja pasif"],["Nā'ib al-fā'il","Pengganti pelaku dalam kalimat pasif"],["Maf'ūl bih","Objek pekerjaan"],["Ẓarf","Keterangan waktu atau tempat"],["Harf jar / majrūr","Kata depan / isim berharakat kasrah sesudahnya"],["Iḍāfah","Gabungan dua isim yang bermakna kepemilikan"],["Na't / man'ūt","Sifat / kata benda yang disifati"],["Mudzakkar / muannats","Berjenis laki-laki / berjenis perempuan"]],
pustaka:["Al-Ghalāyinī, M. (1993). <i>Jāmi' al-Durūs al-'Arabiyyah</i>. Beirut: al-Maktabah al-'Aṣriyyah.","Al-Rājiḥī, 'A. (1998). <i>Al-Taṭbīq al-Naḥwī</i>. Iskandariyah: Dār al-Ma'rifah al-Jāmi'iyyah.","Asher, J. J. (1969). The total physical response approach to second language learning. <i>The Modern Language Journal, 53</i>(1), 3–17.","Azuma, R. T. (1997). A survey of augmented reality. <i>Presence: Teleoperators and Virtual Environments, 6</i>(4), 355–385.","Google. (n.d.). <i>Hand landmarks detection guide (MediaPipe)</i>. https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker","Kementerian Agama Republik Indonesia. (2019). <i>Al-Qur'an dan Terjemahannya</i> (edisi penyempurnaan). Jakarta: Lajnah Pentashihan Mushaf Al-Qur'an.","Mayer, R. E. (2009). <i>Multimedia Learning</i> (2nd ed.). Cambridge: Cambridge University Press.","Ridwan, N. A., Fauzi, M. F., Oktaviani, H. I., Sugiardi, A. H. A., Lestari, E. A., Islamiyah, N. I., & Mi, G. (2026). Developing an augmented reality–based multimedia e-book (mE-Book) for Arabic teachers in Indonesia's teacher professional education program. <i>Prosiding MUDALLA</i>, Universitas Negeri Malang [dalam proses terbit]."],
};
