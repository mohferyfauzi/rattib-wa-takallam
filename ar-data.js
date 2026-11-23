// Bank soal Aktivitas AR (dipakai ar.html dan index.html). Boleh diubah dosen.
const ISIM=0, FIIL=1, HARF=2;
window.AR_CHAPTERS = [
  { code:"AR-1", title:"Kata dan Jenisnya", ar:"الْكَلِمَةُ وَأَقْسَامُهَا", mode:"kelompok",
    bins:["اِسْمٌ","فِعْلٌ","حَرْفٌ"],
    items:[
      {id:"Ronde 1", cards:[["الْمَسْجِدُ",ISIM],["كِتَابٌ",ISIM],["يَذْهَبُ",FIIL],["كَتَبَ",FIIL],["فِيْ",HARF],["إِلَى",HARF]]},
      {id:"Ronde 2", cards:[["الْمُدَرِّسُ",ISIM],["قَلَمٌ",ISIM],["يَقْرَأُ",FIIL],["جَلَسَ",FIIL],["مِنْ",HARF],["عَلَى",HARF]]},
      {id:"Ronde 3", cards:[["الْبَيْتُ",ISIM],["سَبُّوْرَةٌ",ISIM],["يَكْتُبُ",FIIL],["دَخَلَ",FIIL],["عَنْ",HARF],["ثُمَّ",HARF]]},
      {id:"Ronde 4", cards:[["مُحَمَّدٌ",ISIM],["الْفَصْلُ",ISIM],["يَلْعَبُ",FIIL],["خَرَجَ",FIIL],["هَلْ",HARF],["لَمْ",HARF]]},
      {id:"Ronde 5", cards:[["اللّٰهُ",ISIM],["رَبٌّ",ISIM],["خَلَقَ",FIIL],["اِقْرَأْ",FIIL],["بِـ",HARF],["فِيْ",HARF]]},
    ]},
  { code:"AR-2", title:"Perubahan Akhir Kata (I'rāb)", ar:"الْإِعْرَابُ وَعَلَامَاتُهُ", mode:"susun", items:[
      {id:"Siswa itu datang.",          words:["جَاءَ","الطَّالِبُ"], extra:["الطَّالِبَ"]},
      {id:"Saya melihat masjid.",       words:["رَأَيْتُ","الْمَسْجِدَ"], extra:["الْمَسْجِدُ"]},
      {id:"Saya duduk di kelas.",       words:["جَلَسْتُ","فِي","الْفَصْلِ"], extra:["الْفَصْلُ"]},
      {id:"Ahmad tidak pergi.",         words:["لَمْ","يَذْهَبْ","أَحْمَدُ"], extra:["يَذْهَبُ"]},
      {id:"Siswa itu membaca buku.",    words:["يَقْرَأُ","الطَّالِبُ","الْكِتَابَ"], extra:["الْكِتَابِ"]},
  ]},
  { code:"AR-3", title:"Kata Ganti dan Kata Tunjuk", ar:"الْمَعْرِفَةُ وَالنَّكِرَةُ", mode:"susun", items:[
      {id:"Dia (lk.) seorang siswa.",   words:["هُوَ","طَالِبٌ"], extra:["هِيَ"]},
      {id:"Dia (pr.) seorang guru.",    words:["هِيَ","مُدَرِّسَةٌ"], extra:["هُوَ"]},
      {id:"Ini tas.",                   words:["هٰذِهِ","حَقِيْبَةٌ"], extra:["هٰذَا"]},
      {id:"Itu pintu.",                 words:["ذٰلِكَ","بَابٌ"], extra:["تِلْكَ"]},
      {id:"Siswa yang membaca itu Ahmad.", words:["الطَّالِبُ","الَّذِيْ","يَقْرَأُ","أَحْمَدُ"], extra:["الَّتِيْ"]},
  ]},
  { code:"AR-4", title:"Kalimat Nominal (Mubtada'–Khabar)", ar:"الْمُبْتَدَأُ وَالْخَبَرُ", mode:"susun", items:[
      {id:"Buku ini baru.",             words:["هٰذَا","الْكِتَابُ","جَدِيْدٌ"], extra:["قَدِيْمٌ"]},
      {id:"Masjid itu bersih.",         words:["الْمَسْجِدُ","نَظِيْفٌ"], extra:["نَظِيْفَةٌ"]},
      {id:"Sekolah itu besar.",         words:["الْمَدْرَسَةُ","كَبِيْرَةٌ"], extra:["كَبِيْرٌ"]},
      {id:"Guru itu di kelas.",         words:["الْمُدَرِّسُ","فِي","الْفَصْلِ"], extra:["عَلَى"]},
      {id:"Tas yang baru itu indah.",   words:["الْحَقِيْبَةُ","الْجَدِيْدَةُ","جَمِيْلَةٌ"], extra:["جَدِيْدَةٌ"]},
  ]},
  { code:"AR-5", title:"Kāna dan Inna beserta Saudaranya", ar:"كَانَ وَإِنَّ وَأَخَوَاتُهُمَا", mode:"susun", items:[
      {id:"Cuaca (tadi) panas.",        words:["كَانَ","الْجَوُّ","حَارًّا"], extra:["حَارٌّ"]},
      {id:"Siswa itu menjadi rajin.",   words:["أَصْبَحَ","الطَّالِبُ","مُجْتَهِدًا"], extra:["مُجْتَهِدٌ"]},
      {id:"Sesungguhnya kelas itu bersih.", words:["إِنَّ","الْفَصْلَ","نَظِيْفٌ"], extra:["الْفَصْلُ"]},
      {id:"Seakan-akan bulan itu lampu.", words:["كَأَنَّ","الْقَمَرَ","مِصْبَاحٌ"], extra:["الْقَمَرُ"]},
      {id:"Semoga guru itu hadir.",     words:["لَعَلَّ","الْمُدَرِّسَ","حَاضِرٌ"], extra:["حَاضِرًا"]},
  ]},
  { code:"AR-6", title:"Pelaku dan Pengganti Pelaku", ar:"الْفَاعِلُ وَنَائِبُ الْفَاعِلِ", mode:"susun", items:[
      {id:"Ahmad menulis pelajaran.",   words:["يَكْتُبُ","أَحْمَدُ","الدَّرْسَ"], extra:["أَحْمَدَ"]},
      {id:"Fatimah membaca buku.",      words:["تَقْرَأُ","فَاطِمَةُ","الْكِتَابَ"], extra:["يَقْرَأُ"]},
      {id:"Para siswa duduk di kelas.", words:["جَلَسَ","الطُّلَّابُ","فِي","الْفَصْلِ"], extra:["جَلَسُوْا"]},
      {id:"Pelajaran itu ditulis.",     words:["كُتِبَ","الدَّرْسُ"], extra:["الدَّرْسَ"]},
      {id:"Pintu itu dibuka.",          words:["فُتِحَ","الْبَابُ"], extra:["فَتَحَ"]},
  ]},
  { code:"AR-7", title:"Objek serta Keterangan Waktu & Tempat", ar:"الْمَفْعُوْلُ بِهِ وَالظَّرْفُ", mode:"susun", items:[
      {id:"Saya membaca Al-Qur'an pagi hari.", words:["أَقْرَأُ","الْقُرْآنَ","صَبَاحًا"], extra:["الْقُرْآنُ"]},
      {id:"Ahmad minum susu.",          words:["يَشْرَبُ","أَحْمَدُ","اللَّبَنَ"], extra:["اللَّبَنُ"]},
      {id:"Guru berdiri di depan kelas.", words:["يَقِفُ","الْمُدَرِّسُ","أَمَامَ","الْفَصْلِ"], extra:["أَمَامُ"]},
      {id:"Saya pergi ke sekolah pagi hari.", words:["أَذْهَبُ","إِلَى","الْمَدْرَسَةِ","صَبَاحًا"], extra:["مَسَاءً"]},
      {id:"Fatimah menulis surat malam hari.", words:["تَكْتُبُ","فَاطِمَةُ","الرِّسَالَةَ","لَيْلًا"], extra:["الرِّسَالَةُ"]},
  ]},
  { code:"AR-8", title:"Kata Depan, Iḍāfah, dan Sifat", ar:"الْمَجْرُوْرَاتُ وَالتَّوَابِعُ", mode:"susun", items:[
      {id:"Buku itu di atas meja.",     words:["الْكِتَابُ","عَلَى","الْمَكْتَبِ"], extra:["الْمَكْتَبُ"]},
      {id:"Saya pulang dari sekolah ke rumah.", words:["أَرْجِعُ","مِنَ","الْمَدْرَسَةِ","إِلَى","الْبَيْتِ"], extra:["فِي"]},
      {id:"Ini tas siswa.",             words:["هٰذِهِ","حَقِيْبَةُ","الطَّالِبِ"], extra:["الْحَقِيْبَةُ"]},
      {id:"Pintu kelas itu besar.",     words:["بَابُ","الْفَصْلِ","كَبِيْرٌ"], extra:["الْبَابُ"]},
      {id:"Saya membaca buku yang baru.", words:["أَقْرَأُ","الْكِتَابَ","الْجَدِيْدَ"], extra:["جَدِيْدًا"]},
  ]},
];

